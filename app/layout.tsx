import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const recursive = Recursive({ weight: ["400", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Highstorm Software",
  description: "Crafting memorable native iOS and Android apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${recursive.className} bg-slate-950`}>
        <div className="relative h-screen">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/highstorm-background.png")' }}>
            <nav className="absolute top-8 left-1/2 transform -translate-x-1/2 border border-gray-700/20 bg-white/50 backdrop-blur-2xl backdrop-saturate-200 backdrop-opacity-80 rounded-xl shadow-custom dark:border-neutral-800 dark:bg-zinc-800/30 p-2">
              <ul className="flex justify-center space-x-4">
                <li className="font-cardo p-2 font-semibold text-gray-900 hover:bg-white/20 rounded-lg transition duration-250 ease-in-out">
                  <Link href="/">Home</Link>
                </li>
                <li className="font-cardo p-2 font-semibold text-gray-900 hover:bg-white/20 rounded-lg transition duration-250 ease-in-out">
                  <Link href="mailto:hello@highstorm.dev">Contact</Link>
                </li>
              </ul>
            </nav>
            <main className="flex items-center justify-center h-full w-full">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
