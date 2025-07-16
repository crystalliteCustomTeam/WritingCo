
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "privacy-policy",
    description: "",
    //===== OG Tags =====
    openGraph: {
        title: "privacy-policy",
        description: "",
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
