
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Privacy policy - Book Writing Company in US",
    description: "Learn how Book Writing collects, uses, and protects your data. Our privacy policy details information handling, security, cookies, and your rights.",
    //===== OG Tags =====
    openGraph: {
        title: "Privacy policy - Book Writing Company in US",
        description: "Learn how Book Writing collects, uses, and protects your data. Our privacy policy details information handling, security, cookies, and your rights.",
        url: '/privacy-policy',
        siteName: 'Book Writing',
        locale: 'en_US',
        type: 'website',
        images: "https://www.bookwriting.us/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/privacy-policy' },
    //===== No-Index =====
    robots: {
        index: false,
        follow: false,
    }
}


export default function RootLayout({ children }) {
    return (children)
}
