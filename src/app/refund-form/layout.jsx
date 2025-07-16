
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Refund and Return Policy - BookWriting.US",
    description: "Learn about BookWriting.us refund policy and easily submit your refund request. Find details on cancellations, eligibility, and how to get your refund.",
    //===== OG Tags =====
    openGraph: {
        title: "Refund and Return Policy - BookWriting.US",
        description: "Learn about BookWriting.us refund policy and easily submit your refund request. Find details on cancellations, eligibility, and how to get your refund.",
        url: '/refund-form',
        siteName: 'Book Writing',
        locale: 'en_US',
        type: 'website',
        images: "https://www.bookwriting.us/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/refund-form' },
    //===== No-Index =====
    robots: {
        index: false,
        follow: false,
    }
}


export default function RootLayout({ children }) {
    return (children)
}
