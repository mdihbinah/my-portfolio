import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/component/general/navbar";
import Footer from "@/component/general/Footer";
import ScrollToTopButton from "@/component/general/ScrollToTopButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:['300','400','500','600','700']
});



export const metadata = {
  title: "Hossain's Portfolio Website",
  description: "Hossain's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <body className={`${poppins.className} antialiased bg-slate-950 min-h-full flex flex-col text-white`}>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
        <ScrollToTopButton></ScrollToTopButton>
      </body>
    </html>
  );
}
