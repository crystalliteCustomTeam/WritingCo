import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export const dynamic = 'force-dynamic'; // prevent caching in Next.js API routes

// --- Decode Base64 private key ---
function getPrivateKey() {
    const base64Key = process.env.PRIVATE_KEY_B64;
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

        // --- Validate Environment Variables ---
        const privateKey = getPrivateKey();
        if (!privateKey) {
            console.error("PRIVATE_KEY_B64 missing or invalid:", process.env.PRIVATE_KEY_B64?.substring(0, 50));
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

        // --- Google Auth ---
        const auth = new google.auth.JWT({
            email: clientEmail,
            key: privateKey,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        try {
            await auth.authorize();
        } catch (authError) {
            console.error("Google Auth failed:", authError.message);
            return NextResponse.json(
                { success: false, error: 'Google Authentication failed' },
                { status: 500 }
            );
        }

        const sheets = google.sheets({ version: 'v4', auth });

        // --- Prepare Row Data ---
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

        // --- Append Row to Google Sheet ---
        const appendRes = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A2',
            valueInputOption: 'USER_ENTERED',
            requestBody: { values },
        });

        const success = appendRes?.status === 200 && appendRes?.data?.updates?.updatedRows >= 1;

        if (!success) {
            console.error('Google Sheets append failed:', appendRes?.data);
            return NextResponse.json(
                { success: false, error: 'Failed to append data to Google Sheets' },
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
