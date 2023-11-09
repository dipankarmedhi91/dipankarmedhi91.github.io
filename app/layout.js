import { Merriweather } from "next/font/google";
import "./globals.css";

import Layout from "./lib/components/rootLayout/rootLayout";

const inter = Merriweather({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: "Dipankar Medhi",
  description: "consolidated resume with fun elements",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
