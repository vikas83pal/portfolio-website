import Header from "@/components/header";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import ParticleBackground from "@/components/particles";
import AuroraBackground from "@/components/aurora-background";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata = {
  title: "Vikas Pal | Software Development Engineer | Portfolio",
  description:
    "Vikas Pal - Software Development Engineer specializing in Spring Boot, AI/ML, and scalable backend systems. GSoC'23 Contributor, IIT Hyderabad Intern.",
  keywords: [
    "Vikas Pal",
    "Software Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "AI ML Engineer",
    "Spring Boot",
    "Java Developer",
    "GSoC",
    "Portfolio",
  ],
  authors: [{ name: "Vikas Pal" }],
  openGraph: {
    title: "Vikas Pal | Software Development Engineer",
    description:
      "Software Engineer specializing in Spring Boot, AI/ML, and scalable backend systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#0a0a1a] dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden`}
      >
        {/* Aurora Background */}
        <AuroraBackground />
        
        {/* Particle Background */}
        <ParticleBackground />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(102, 126, 234, 0.2)",
                  borderRadius: "12px",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                },
              }}
            />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
