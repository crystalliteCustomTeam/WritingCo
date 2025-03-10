
//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Expert Book Publishing Tips & Latest Marketing Insights",
  description: "Get expert tips on writing, editing, publishing, and marketing your book. Read our blogs for expert advice and insights for authors.",
  //===== OG Tags =====
  openGraph: {
    title: "Expert Book Publishing Tips & Latest Marketing Insights",
    description: "Get expert tips on writing, editing, publishing, and marketing your book. Read our blogs for expert advice and insights for authors.",
    url: '/blogs',
    siteName: "Inifniti Digital",
    locale: 'en_US',
    type: 'website',
    images: "https://www.bookwriting.us/logo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/blogs' },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  }
}


export default function RootLayout({ children }) {
  return (children)
}
