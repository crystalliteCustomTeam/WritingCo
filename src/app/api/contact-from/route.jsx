import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export const dynamic = 'force-dynamic'; // avoid caching in Next.js app router

function getPrivateKey() {
    const pk = process.env.PRIVATE_KEY;
    if (!pk) return null;
    // If the key was saved with literal '\n', convert them back to real newlines
    return pk.includes('\\n') ? pk.replace(/\\n/g, '\n') : pk;
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

        // --- ENV validation -----------------------------------------------------
        const privateKey = getPrivateKey();
        if (!privateKey) {
            console.error('PRIVATE_KEY is missing!');
            return NextResponse.json(
                { success: false, error: 'Missing PRIVATE_KEY' },
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

        // --- Auth ---------------------------------------------------------------
        const auth = new google.auth.JWT({
            email: clientEmail,
            key: privateKey,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        // Optional: fail fast if auth can’t be established
        await auth.authorize();

        const sheets = google.sheets({ version: 'v4', auth });

        // --- Payload to sheet ---------------------------------------------------
        const values = [[
            name || '',                       // Name
            email || '',                      // Email
            phone || '',                      // Phone
            comment || '',                    // Comment
            person || '',                     // Person
            services || '',                   // Services
            location.ip || '',                // IP
            location.country || '',           // Country
            location.city || '',              // City
            location.state || '',             // State
            location.zip || '',               // ZIP
            page_url || '',                   // PageURL
            new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' }) // Timestamp
        ]];

        const appendRes = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A2', // assuming headers are in row 1
            valueInputOption: 'USER_ENTERED',
            requestBody: { values },
        });

        const ok =
            appendRes?.status === 200 &&
            appendRes?.data?.updates?.updatedRows === 1;

        if (!ok) {
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
