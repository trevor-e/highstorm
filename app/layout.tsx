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
    <html lang="en" className="h-full">
      <body className={`${recursive.className} bg-slate-950 flex flex-col h-full overflow-hidden`}>
        <nav className="bg-[rgba(3,3,3,0.8)] backdrop-blur-sm shadow-md z-10 flex-shrink-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex justify-center space-x-4 py-4">
              <li className="font-cardo p-2 font-semibold text-gray-200 hover:bg-slate-800 rounded-lg transition duration-250 ease-in-out">
                <Link href="/">Home</Link>
              </li>
              <li className="font-cardo p-2 font-semibold text-gray-200 hover:bg-slate-800 rounded-lg transition duration-250 ease-in-out">
                <Link href="mailto:hello@highstorm.dev">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="flex-grow relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/highstorm-background.png")' }}
          />
          <div className="relative z-10 h-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
