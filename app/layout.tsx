import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "DIVINIA Eclibs Body Contouring | Skinlux Pinzgau",
  description:
    "Revolutionaeres 5-in-1 Body Contouring mit 7 Technologien. Fettreduktion, Hautstraffung und Muskelaufbau in einer Behandlung. Jetzt kostenlose Erstberatung buchen.",
  metadataBase: new URL("https://bodycontouring.skinlux.at"),
  openGraph: {
    title: "DIVINIA Eclibs Body Contouring | Skinlux Pinzgau",
    description:
      "5-in-1 Body Contouring Weltneuheit. 7 Technologien. Eine Behandlung. Sichtbare Ergebnisse.",
    type: "website",
    locale: "de_AT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${lato.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
