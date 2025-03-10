
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "About Us - Book Writing",
    description: "We help aspiring writers to become published authors with expert publishing, writing, and marketing services backed by 10+ years of experience.",
    //===== OG Tags =====
    openGraph: {
        title: "About Us - Book Writing",
        description: "We help aspiring writers to become published authors with expert publishing, writing, and marketing services backed by 10+ years of experience.",
        url: '/about-us',
        siteName: 'Book Writing',
        locale: 'en_US',
        type: 'website',
        images: "https://www.bookwriting.us/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/about-us' },
    
}


export default function RootLayout({ children }) {
    return (children)
}
