
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Book Writing Service",
    description: "Turn your blank pages into a great book with our Book Writing Services. We will make your story into your LEGACY 24/7. Hire us to see your book selling. ",
    //===== OG Tags =====
    openGraph: {
        title: "Book Writing Service",
        description: "Turn your blank pages into a great book with our Book Writing Services. We will make your story into your LEGACY 24/7. Hire us to see your book selling. ",
        url: '/book-writing-services',
        siteName: 'Book Writing',
        locale: 'en_US',
        type: 'website',
        images: "https://www.bookwriting.us/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/book-writing-services' },

     others : {
        "DC.title": "book writing services",
        "geo.region": "US",
        "geo.position": "39.78373;-100.445882",
        "ICBM": "39.78373, -100.445882"
      }      

}


export default function RootLayout({ children }) {
    return (children)
}
