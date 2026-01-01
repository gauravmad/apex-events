import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Apex Events | Professional Event Staffing Across India",
  description: "Professional manpower services for corporate events, weddings, and private parties. Experienced staff including coordinators, ushers, waiters, and more — available nationwide.",
  keywords: "event staffing, wedding staff, corporate event management, manpower services, event coordinators, India",
  openGraph: {
    title: "Apex Events | Professional Event Staffing Across India",
    description: "Professional manpower services for corporate events, weddings, and private parties — wherever your celebration takes you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
