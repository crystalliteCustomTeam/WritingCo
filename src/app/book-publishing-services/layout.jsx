
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Publish Your Book With Amazon KDP Publishing Service",
    description: "If your dream is to be published, Our Book Publishing Service is your best shot at success & earning royalties. Hire us today!",
    //===== OG Tags =====
    openGraph: {
        title: "Publish Your Book With Amazon KDP Publishing Service",
        description: "If your dream is to be published, Our Book Publishing Service is your best shot at success & earning royalties. Hire us today!",
        url: '/book-publishing-services',
        siteName: 'Book Writing',
        locale: 'en_US',
        type: 'website',
        images: "https://www.bookwriting.us/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/book-publishing-services' },
    others : {
        "DC.title": "book publishing services",
        "geo.region": "US",
        "geo.position": "39.78373;-100.445882",
        "ICBM": "39.78373, -100.445882"
      }      
}


export default function RootLayout({ children }) {
    return (children)
}
