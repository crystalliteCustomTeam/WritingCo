
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Professional Book Editing Services",
    description: "Book Editing Service that transforms your book from Fine to Great. Your book’s got potential, and we make sure it reaches it with our book editing services.",
    //===== OG Tags =====
    openGraph: {
        title: "Professional Book Editing Services",
        description: "Book Editing Service that transforms your book from Fine to Great. Your book’s got potential, and we make sure it reaches it with our book editing services.",
        url: '/book-editing-services',
        siteName: 'Book Writing',
        locale: 'en_US',
        type: 'website',
        images: "https://www.bookwriting.us/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/book-editing-services' },
     others : {
        "DC.title": "book editing services",
        "geo.region": "US",
        "geo.position": "39.78373;-100.445882",
        "ICBM": "39.78373, -100.445882"
      }
}


export default function RootLayout({ children }) {
    return (children)
}
