import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer";
import "./globals.css";

export default function RootLayout({children}: Readonly <{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}