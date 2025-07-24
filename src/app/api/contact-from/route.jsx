import { NextResponse } from 'next/server';
import { google } from 'googleapis';

function getPrivateKey() {
    const pk = process.env.PRIVATE_KEY;
    if (!pk) return null;
    return pk.includes('\\n') ? pk.replace(/\\n/g, '\n') : pk;
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, comment, person, services, location = {}, page_url } = body;

        const privateKey = getPrivateKey();
        if (!privateKey) {
            console.error("PRIVATE_KEY is missing!");
            return NextResponse.json({ success: false, error: "Missing PRIVATE_KEY" }, { status: 500 });
        }
        if (!process.env.CLIENT_EMAIL || !process.env.GOOGLE_SHEET_ID) {
            console.error("Environment variables missing!");
            return NextResponse.json({ success: false, error: "Missing required ENV variables" }, { status: 500 });
        }

        const auth = new google.auth.JWT({
            email: process.env.CLIENT_EMAIL,
            key: privateKey,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;

        const values = [[
            name || '', email || '', phone || '', comment || '', person || '',
            services || '', location.ip || '', location.country || '', location.city || '',
            location.state || '', location.zip || '', page_url || '',
            new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' })
        ]];

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A2',
            valueInputOption: 'USER_ENTERED',
            requestBody: { values },
        });

        if (!response || !response.data.updates) {
            console.error("Failed to append data to Google Sheets");
            return NextResponse.json({ success: false, error: "Google Sheets append failed" }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Google Sheets API Error:", error.message, error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
