import { Ubuntu } from "next/font/google";
import "./globals.css";
import LenisWrapper from "@/components/LenisWrapper";
import CanvasCursor from "./utils";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";

const ubuntu = Ubuntu({
  variable: "--font-Ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "M Aun",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ubuntu.variable} antialiased`}>
        <LenisWrapper>
          <ScrollToTopBtn />
          <CanvasCursor />
          {children}
        </LenisWrapper>
      </body>
    </html>
  );
}
