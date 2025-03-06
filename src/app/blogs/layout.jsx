
//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Expert Book Publishing & Marketing Insights | Our Blog",
  description: "Learn expert tips on writing, editing, publishing, and marketing your book. Explore trends in SEO, social media, and book promotion to maximize your success. Read our latest blogs now.",
  //===== OG Tags =====
  openGraph: {
    title: "Expert Book Publishing & Marketing Insights | Our Blog",
    description: "Learn expert tips on writing, editing, publishing, and marketing your book. Explore trends in SEO, social media, and book promotion to maximize your success. Read our latest blogs now.",
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
