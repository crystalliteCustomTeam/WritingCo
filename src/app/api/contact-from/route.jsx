import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export const dynamic = 'force-dynamic'; // prevent caching

// --- Decode Base64 private key ---
function getPrivateKey() {
    const base64Key = process.env.PRIVATE_KEY_B64;
    if (!base64Key) return null;
    return Buffer.from(base64Key, 'base64').toString('utf8');
}

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

        // --- ENV validation ---
        const privateKey = getPrivateKey();
        if (!privateKey) {
            console.log("PRIVATE_KEY_B64 first 50 chars:", process.env.PRIVATE_KEY_B64?.substring(0, 50));
            return NextResponse.json(
                { success: false, error: 'Missing or invalid PRIVATE_KEY_B64' },
                { status: 500 }
            );
        }

        const clientEmail = process.env.CLIENT_EMAIL;
        if (!clientEmail) {
            console.error('CLIENT_EMAIL is missing!');
            return NextResponse.json(
                { success: false, error: 'Missing CLIENT_EMAIL' },
                { status: 500 }
            );
        }

        const spreadsheetId = process.env.GOOGLE_SHEET_ID;
        if (!spreadsheetId) {
            console.error('GOOGLE_SHEET_ID is missing!');
            return NextResponse.json(
                { success: false, error: 'Missing GOOGLE_SHEET_ID' },
                { status: 500 }
            );
        }

        // --- Auth with Google ---
        const auth = new google.auth.JWT({
            email: clientEmail,
            key: privateKey,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        // Test auth connection
        await auth.authorize();

        const sheets = google.sheets({ version: 'v4', auth });

        // --- Prepare data ---
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

        // --- Append to Google Sheet ---
        const appendRes = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A2',
            valueInputOption: 'USER_ENTERED',
            requestBody: { values },
        });

        if (appendRes?.status !== 200) {
            console.error('Google Sheets append failed:', appendRes?.data);
            return NextResponse.json(
                { success: false, error: 'Google Sheets append failed' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Google Sheets API Error:', error?.message, error);
        return NextResponse.json(
            { success: false, error: error?.message ?? 'Unknown error' },
            { status: 500 }
        );
    }
}
