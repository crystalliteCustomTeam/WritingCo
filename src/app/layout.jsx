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
  title: "Book Writing Company - Expert Writers For Your Book",
  description: "Looking for a Professional Book Writing Company? Our Expert Writers craft compelling books in any genre, ensuring quality and originality. Start your journey Today!",

  //===== OG Tags =====
  openGraph: {
    title: "Book Writing Company - Expert Writers For Your Book",
    description: "Looking for a Professional Book Writing Company? Our Expert Writers craft compelling books in any genre, ensuring quality and originality. Start your journey Today!",
    url: '/',
    siteName: 'Book Writing',
    locale: 'en_US',
    type: 'website',
    images: "",
  },
  //===== Google Varification =====
  verification: {
    other: {
      "google-site-verification": ['TeBBv-OUZssYCNFSnYzbZAECWVfOaaxpxgDb4JXomSc'],
    },
  },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
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
