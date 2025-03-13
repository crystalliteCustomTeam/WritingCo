
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Publish Your Children’s Book in 5 Simple Steps",
    description: "Our children book publication services will create masterpieces that appeal to all the little readers. Start your publishing journey today!",
    //===== OG Tags =====
    openGraph: {
        title: "Publish Your Children’s Book in 5 Simple Steps",
        description: "Our children book publication services will create masterpieces that appeal to all the little readers. Start your publishing journey today!",
        url: '/children-book-publication-services',
        siteName: 'Book Writing',
        locale: 'en_US',
        type: 'website',
        images: "https://www.bookwriting.us/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/children-book-publication-services' },
    others :{
        "DC.title": "children book publication services",
        "geo.region": "US",
        "geo.position": "39.78373;-100.445882",
        "ICBM": "39.78373, -100.445882"
      }
      

}


export default function RootLayout({ children }) {
    return (children)
}
