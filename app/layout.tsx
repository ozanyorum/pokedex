import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";
import { PokemonProvider } from "@/lib/PokemonContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PokéDex",
  description: "Gotta Catch 'Em All!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PokemonProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <main>
              <div>
                <NavBar />
              </div>
              {children}
            </main>
          </ThemeProvider>
        </PokemonProvider>
      </body>
    </html>
  );
}
