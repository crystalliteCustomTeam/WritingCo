import { NextResponse } from 'next/server';
import { google } from 'googleapis';

function getPrivateKey() {
    const pk = process.env.PRIVATE_KEY;
    if (!pk) return null;

    // If it contains literal "\n", convert them to real newlines.
    if (pk.includes('\\n')) return pk.replace(/\\n/g, '\n');
    return pk; // already multiline
}

// Optional: small helper so both GET/POST can reuse it
function getEnvSnapshot() {
    return {
        hasPrivateKey: !!process.env.PRIVATE_KEY,
        privateKeyStarts:
            process.env.PRIVATE_KEY?.substring(0, 40) || 'MISSING',
        clientEmail: process.env.CLIENT_EMAIL || 'MISSING',
        sheetId: process.env.GOOGLE_SHEET_ID || 'MISSING',
    };
}

/**
 * GET — use just for debugging on Amplify to confirm env vars
 * Remove or lock down before going to production.
 */
export async function GET() {
    return NextResponse.json(getEnvSnapshot());
}

/**
 * POST — main writer to Google Sheets
 */
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
        } = body || {};

        const privateKey = getPrivateKey();
        if (!privateKey) {
            console.error('PRIVATE_KEY is missing!');
            return NextResponse.json(
                { success: false, error: 'Missing PRIVATE_KEY' },
                { status: 500 }
            );
        }

        if (!process.env.CLIENT_EMAIL) {
            console.error('CLIENT_EMAIL is missing!');
            return NextResponse.json(
                { success: false, error: 'Missing CLIENT_EMAIL' },
                { status: 500 }
            );
        }

        if (!process.env.GOOGLE_SHEET_ID) {
            console.error('GOOGLE_SHEET_ID is missing!');
            return NextResponse.json(
                { success: false, error: 'Missing GOOGLE_SHEET_ID' },
                { status: 500 }
            );
        }

        const auth = new google.auth.JWT({
            email: process.env.CLIENT_EMAIL,
            key: privateKey,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;

        const values = [[
            name || '',                     // Name
            email || '',                    // Email
            phone || '',                    // Phone
            comment || '',                  // Comment
            person || '',                   // Person
            services || '',                 // Services
            location.ip || '',              // IP
            location.country || '',         // Country
            location.city || '',            // City
            location.state || '',           // State
            location.zip || '',             // ZIP
            page_url || '',                 // PageURL
            new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' }) // Timestamp
        ]];

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A2', // headers in row 1
            valueInputOption: 'USER_ENTERED',
            requestBody: { values },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Google Sheets API Error:', error?.message, error);
        return NextResponse.json(
            { success: false, error: error?.message ?? 'Unknown error' },
            { status: 500 }
        );
    }
}
