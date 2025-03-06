
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Contact Us  To Publish & Promote Your Book with Experts",
    description: "Get in touch with our publishing experts today. Whether you need help with writing, editing, publishing, or marketing, we’re here to guide you.  Let's get started.",
    //===== OG Tags =====
    openGraph: {
        title: "Contact Us  To Publish & Promote Your Book with Experts",
        description: "Get in touch with our publishing experts today. Whether you need help with writing, editing, publishing, or marketing, we’re here to guide you.  Let's get started.",
        url: '/contact-us',
        siteName: 'Book Writing',
        locale: 'en_US',
        type: 'website',
        images: "https://www.bookwriting.us/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/contact-us' },
    //===== No-Index =====
    robots: {
        index: false,
        follow: false,
    }
}


export default function RootLayout({ children }) {
    return (children)
}
