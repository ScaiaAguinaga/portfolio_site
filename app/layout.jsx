import { Inter, Orbitron } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio App",
  description: "Portfolio website for Isaac Aguinaga",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${orbitron.variable} bg-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
