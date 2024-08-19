import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iqbal Ansari",
  description: "Fullstack Developer, website, freelancer, portfolio, frontend developer, backend developer, web developer, react developer, nextjs developer, graphql developer, typescript developer, javascript developer, nodejs developer, express developer, mongodb developer, postgres developer, mysql developer, tailwindcss developer, chakraui developer, materialui developer, antdesign",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <link rel="icon" href="" sizes="any" /> */}
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
