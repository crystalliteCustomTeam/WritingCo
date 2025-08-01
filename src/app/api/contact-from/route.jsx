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
        // ✅ ENV Debugging
        console.log("✅ ENV DEBUG START");
        console.log("CLIENT_EMAIL:", process.env.CLIENT_EMAIL);
        console.log("GOOGLE_SHEET_ID:", process.env.GOOGLE_SHEET_ID);
        console.log("GOOGLE_PRIVATE_KEY starts with:", process.env.GOOGLE_PRIVATE_KEY?.slice(0, 30));
        console.log("GOOGLE_PRIVATE_KEY length:", process.env.GOOGLE_PRIVATE_KEY?.length);
        console.log("✅ ENV DEBUG END");



        const auth = new google.auth.JWT({
            email: process.env.CLIENT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
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