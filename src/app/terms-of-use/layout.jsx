
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Terms of use - Book Writing Company in US",
    description: "Review Book Writing's Terms of Use to understand site conditions, content rights, electronic communications, and important disclaimers for using our services.",
    //===== OG Tags =====
    openGraph: {
        title: "Terms of use - Book Writing Company in US",
        description: "Review Book Writing's Terms of Use to understand site conditions, content rights, electronic communications, and important disclaimers for using our services.",
        url: '/terms-of-use',
        siteName: 'Book Writing',
        locale: 'en_US',
        type: 'website',
        images: "https://www.bookwriting.us/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/terms-of-use' },
    //===== No-Index =====
    robots: {
        index: false,
        follow: false,
    }
}


export default function RootLayout({ children }) {
    return (children)
}
