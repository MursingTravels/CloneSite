import React from "react";
import type { Metadata } from "next";
import "./globals.css"; // adjust if your global CSS file is named differently

export const metadata: Metadata = {
  title: "Mursing Travels",
  description: "A Premium Travel Agency For Nurses and More",
  openGraph: {
    title: "Mursing Travels",
    description: "A Premium Travel Agency For Nurses and More",
    url: "https://mursingtravels.com",
    siteName: "Mursing Travels",
    images: [
      {
        url: "/mursing-logo.png", // ensure this file is in /public
        width: 1200,
        height: 630,
        alt: "Mursing Travels Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mursing Travels",
    description: "A Premium Travel Agency For Nurses and More",
    images: ["/mursing-logo.png"], // same as OG image
    creator: "@WorldNomadTravelAgency", // optional
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags from Next.js metadata will be injected here */}
      </head>
      <body>
        <header>
          <img src="/mursing-logo.png" alt="Mursing Travels Logo" width={120} />
          <h1>Mursing Travels</h1>
        </header>

        <main>{children}</main>

        <footer>
          <p>&copy; {new Date().getFullYear()} Mursing Travels. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
