import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jardín Bulbasaur - Tu Pokédex Oficial",
  description: "Explora el vasto mundo de Pokémon. Descubre tipos, estadísticas y características únicas en el Jardín Bulbasaur.",
  keywords: "Pokémon, Pokédex, Bulbasaur, Jardín, Pokeapi",
  authors: [{ name: "Jonathan Leonel Merlino" }],
  openGraph: {
    title: "Jardín Bulbasaur",
    description: "Tu puerta al mundo Pokémon. Explora, descubre y disfruta de la mejor experiencia Pokédex.",
    url: "https://bulbasaur-garden.vercel.app",
    siteName: "Jardín Bulbasaur",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Jardín Bulbasaur - Tu Pokédex Oficial",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({children}: Readonly <{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}