import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {/* The 'children' is the unique content of each page */}
        <main className="m-0 p-0">{children}</main>
        <Footer/>
        <Script src="https://app.enzuzo.com/scripts/cookiebar/60056e1e-0d8b-11f1-ada3-5f6c4515702e" strategy="lazyOnload"/>
      </body>
    </html>
  );
}