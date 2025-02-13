import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/src/app/globals.scss";
import ConditionalLayout from "@/src/app/conditionallayout";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <ConditionalLayout >
          {children}
        </ConditionalLayout >
      </body>
    </html>
  );
}
