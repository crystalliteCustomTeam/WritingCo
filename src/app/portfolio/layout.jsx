
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "",
    description: "",
    //===== OG Tags =====
    openGraph: {
        title: "",
        description: "",
        url: '/Portfolio',
        siteName: 'Book Writing',
        locale: 'en_US',
        type: 'website',
        images: "",
    },
    //===== Canonical =====
    alternates: { canonical: '/Portfolio' },
    //===== No-Index =====
    robots: {
        index: false,
        follow: false,
    }
}


export default function RootLayout({ children }) {
    return (children)
}
