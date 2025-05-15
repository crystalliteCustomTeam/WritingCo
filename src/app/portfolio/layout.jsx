
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Check Our Portfolio To See Top Selling Books Published By Us",
    description: "Take a tour to our portfolio and check the quality of the work you will get from Book Writing where creativity meets storytelling.",
    //===== OG Tags =====
    openGraph: {
        title: "Check Our Portfolio To See Top Selling Books Published By Us",
        description: "Take a tour to our portfolio and check the quality of the work you will get from Book Writing where creativity meets storytelling.",
        url: '/portfolio',
        siteName: 'Book Writing',
        locale: 'en_US',
        type: 'website',
        images: "https://www.bookwriting.us/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/portfolio' },
    //===== No-Index =====
    robots: {
        index: false,
        follow: false,
    }
}


export default function RootLayout({ children }) {
    return (children)
}
