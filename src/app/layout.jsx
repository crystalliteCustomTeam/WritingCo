import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/src/app/globals.scss";
import ConditionalLayout from "@/src/app/conditionallayout";
import Scripts from "@/src/app/Scripts";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://www.bookwriting.us/"),
  title: "Book Writing Company: Start Your Bestseller in 3 Easy Steps!",
  description: "Making books from concept to bestseller, we offer best book writing, editing, publishing, and marketing services in US. Expert book services at affordable prices.",

  //===== OG Tags =====
  openGraph: {
    title: "Book Writing Company: Start Your Bestseller in 3 Easy Steps!",
    description: "Making books from concept to bestseller, we offer best book writing, editing, publishing, and marketing services in US. Expert book services at affordable prices.",
    url: '/',
    siteName: 'Book Writing',
    locale: 'en_US',
    type: 'website',
    images: "https://www.bookwriting.us/logo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/' },
  //===== Google Varification =====
  verification: {
    other: {
      "google-site-verification": ['TeBBv-OUZssYCNFSnYzbZAECWVfOaaxpxgDb4JXomSc'],
    },
  },
  //===== No-Index =====
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Scripts />
        <ConditionalLayout >
          {children}
        </ConditionalLayout >
      </body>
    </html>
  );
}
