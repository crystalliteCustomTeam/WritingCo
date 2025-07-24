import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export const runtime = 'nodejs'; // googleapis requires Node runtime, not edge.

export async function POST(request) {
    try {
        const body = await request.json();
        const {
            name,
            email,
            phone,
            comment,
            person,
            services,
            location,
            page_url
        } = body ?? {};

        // Ensure environment variables exist
        const clientEmail = process.env.CLIENT_EMAIL;
        const privateKey = (process.env.PRIVATE_KEY || '').replace(/\\n/g, '\n');
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;

        if (!clientEmail || !privateKey || !spreadsheetId) {
            throw new Error('Missing required Google Sheets environment variables.');
        }

        const auth = new google.auth.JWT({
            email: clientEmail,
            key: privateKey,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const values = [[
            name ?? '',
            email ?? '',
            phone ?? '',
            comment ?? '',
            person ?? '',
            services ?? '',
            location?.ip ?? '',
            location?.country ?? '',
            location?.city ?? '',
            location?.state ?? '',
            location?.zip ?? '',
            page_url ?? '',
            new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' }),
        ]];

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A1',
            valueInputOption: 'USER_ENTERED',
            requestBody: { values },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Google Sheets API Error:", error);
        return NextResponse.json(
            { success: false, error: error.message ?? 'Unknown error' },
            { status: 500 }
        );
    }
}
