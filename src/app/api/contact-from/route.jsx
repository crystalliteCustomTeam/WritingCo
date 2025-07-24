import { NextResponse } from 'next/server';
import { google } from 'googleapis';
export const dynamic = 'force-dynamic';

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
            location = {},
            page_url,
        } = body ?? {};

        const clientEmail = process.env.CLIENT_EMAIL;
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;
        const privateKey = (process.env.PRIVATE_KEY || '').replace(/\\n/g, '\n');

        if (!privateKey || !clientEmail || !spreadsheetId) {
            return NextResponse.json(
                { success: false, error: 'Missing required env vars' },
                { status: 500 }
            );
        }

        const auth = new google.auth.JWT({
            email: clientEmail,
            key: privateKey,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        await auth.authorize();

        const sheets = google.sheets({ version: 'v4', auth });

        const values = [[
            name || '',
            email || '',
            phone || '',
            comment || '',
            person || '',
            services || '',
            location.ip || '',
            location.country || '',
            location.city || '',
            location.state || '',
            location.zip || '',
            page_url || '',
            new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' }),
        ]];

        const res = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A2',
            valueInputOption: 'USER_ENTERED',
            requestBody: { values },
        });

        const ok = res?.status === 200 && res?.data?.updates?.updatedRows >= 1;
        if (!ok) {
            console.error('Sheets append failed:', res?.data);
            return NextResponse.json(
                { success: false, error: 'Failed to append data to Google Sheets' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Google Sheets API Error:', error);
        return NextResponse.json(
            { success: false, error: error?.message ?? 'Unknown error' },
            { status: 500 }
        );
    }
}
