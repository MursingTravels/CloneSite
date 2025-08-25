import type { Metadata } from "next"

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
        url: "/mursing-logo.png", // ✅ Put your logo or a nice hero image in /public
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
    images: ["/mursing-logo.png"], // ✅ Same image as OG or a square one
    creator: "@WorldNomadTravelAgency", // your Instagram/Twitter handle if you want
  },
}
