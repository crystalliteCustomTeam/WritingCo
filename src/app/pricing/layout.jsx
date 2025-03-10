
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Click Here To Check Our Complete Book Services And Rates",
    description: "We provide top book writing service all around the world. Check Our affordable pricing for book writing, editing, publishing and marketing for every author.",
    //===== OG Tags =====
    openGraph: {
        title: "Click Here To Check Our Complete Book Services And Rates",
        description: "We provide top book writing service all around the world. Check Our affordable pricing for book writing, editing, publishing and marketing for every author.",
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
