import Header from "@/components/header";
import "./globals.css";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import EngineeringTerminal from "@/components/engineering-terminal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title:
    "Vikas Pal | Quant Developer · Low-Latency Systems · Backend Engineering",
  description:
    "Vikas Pal — Computer Science engineer building high-performance software at the intersection of algorithms, C++, backend systems, and quantitative trading infrastructure. Open to Quant Developer, Low-Latency C++ Engineer, and Backend Engineer roles.",
  keywords: [
    "Vikas Pal",
    "Quant Developer",
    "Low-Latency Engineer",
    "C++ Engineer",
    "Backend Developer",
    "Systems Engineer",
    "Quantitative Trading",
    "Algorithms",
    "Competitive Programming",
    "Portfolio",
  ],
  authors: [{ name: "Vikas Pal" }],
  openGraph: {
    title: "Vikas Pal | Quant Developer · Low-Latency Systems · Backend Engineering",
    description:
      "Building high-performance software at the intersection of algorithms, C++, backend systems, and quantitative trading infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-[#080a0f] text-[#e2e8f0] overflow-x-hidden`}
      >
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <EngineeringTerminal />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
