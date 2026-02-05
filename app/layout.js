import { Merriweather } from "next/font/google";
import "./globals.css";

import Layout from "@/components/rootLayout/rootLayout";
import { Providers } from "@/components/rootLayout/Providers";

const inter = Merriweather({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Dipankar Medhi",
  description: "consolidated resume with fun elements",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
