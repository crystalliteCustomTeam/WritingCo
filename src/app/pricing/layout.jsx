
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "",
    description: "",
    //===== OG Tags =====
    openGraph: {
        title: "",
        description: "",
        url: '/pricing',
        siteName: 'Book Writing',
        locale: 'en_US',
        type: 'website',
        images: "https://www.bookwriting.us/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/pricing' },
    //===== No-Index =====
    robots: {
        index: false,
        follow: false,
    }
}


export default function RootLayout({ children }) {
    return (children)
}
