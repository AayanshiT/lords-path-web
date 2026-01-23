import "./globals.css";
import { Poppins } from "next/font/google";
import { UserProvider } from "@/context/UserContext";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Lords Path - Home Health Checkup Tests & Packages",
  icons: {
    icon: "/lordspath_flaticon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        {/* ✅ Razorpay Script */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />

        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>                           
  );
}
