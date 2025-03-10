
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Fix Your Typos with Our Book Proofreading Service",
    description: "Our Professional Proofreading Services make sure your manuscript is polished, free of errors, and ready for publication. Let us take your writing to the next level.",
    //===== OG Tags =====
    openGraph: {
        title: "Fix Your Typos with Our Book Proofreading Service",
        description: "Our Professional Proofreading Services make sure your manuscript is polished, free of errors, and ready for publication. Let us take your writing to the next level.",
        url: '/book-proofreading-services',
        siteName: 'Book Writing',
        locale: 'en_US',
        type: 'website',
        images: "https://www.bookwriting.us/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/book-proofreading-services' },
    others: {
        "DC.title": "book proofreading services",
        "geo.region": "US",
        "geo.position": "39.78373;-100.445882",
        "ICBM": "39.78373, -100.445882"
      },
      
    //===== No-Index =====
    robots: {
        index: false,
        follow: false,
    }
}


export default function RootLayout({ children }) {
    return (children)
}
