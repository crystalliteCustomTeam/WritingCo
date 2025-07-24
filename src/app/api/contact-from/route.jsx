import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

let sheetsClient;

function nowInKarachi() {
    try {
        return new Intl.DateTimeFormat('en-US', {
            timeZone: 'Asia/Karachi',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        }).format(new Date());
    } catch {
        return new Date().toISOString();
    }
}

export async function POST(request) {
    try {
        const body = await request.json().catch(() => ({}));
        const {
            name = '',
            email = '',
            phone = '',
            comment = '',
            person = '',
            services = '',
            location = {},
            page_url = '',
        } = body ?? {};

        // ---- ENV VARS ----
        const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;
        const privateKeyBase64 = process.env.GOOGLE_PRIVATE_KEY_BASE64;

        if (!clientEmail || !spreadsheetId || !privateKeyBase64) {
            console.error('Missing required env vars:', {
                hasClientEmail: !!clientEmail,
                hasSpreadsheetId: !!spreadsheetId,
                hasPrivateKeyBase64: !!privateKeyBase64,
            });
            return NextResponse.json(
                { success: false, error: 'Missing required env vars' },
                { status: 500 }
            );
        }

        // Decode Base64 key
        const privateKey = Buffer.from(privateKeyBase64, 'base64').toString('utf8');

        // ---- Google Auth ----
        if (!sheetsClient) {
            const auth = new google.auth.JWT({
                email: clientEmail,
                key: privateKey,
                scopes: ['https://www.googleapis.com/auth/spreadsheets'],
            });
            sheetsClient = google.sheets({ version: 'v4', auth });
        }

        // ---- Data ----
        const values = [[
            name, email, phone, comment, person, services,
            location.ip || '',
            location.country || '',
            location.city || '',
            location.state || '',
            location.zip || '',
            page_url,
            nowInKarachi(),
        ]];

        const appendRes = await sheetsClient.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A2',
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            requestBody: { values },
        });

        if (appendRes.status !== 200) {
            console.error('Google Sheets append failed:', appendRes?.data);
            return NextResponse.json(
                { success: false, error: 'Failed to append data to Google Sheet' },
                { status: 502 }
            );
        }

        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error) {
        console.error('Google Sheets API Error:', error);
        return NextResponse.json(
            { success: false, error: error?.message || 'Unknown error' },
            { status: 500 }
        );
    }
}
