import { NextResponse } from 'next/server';
import { google } from 'googleapis';

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
        } = body;

        const auth = new google.auth.JWT({
            email: process.env.CLIENT_EMAIL,
            key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;

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
            new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' })
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
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}