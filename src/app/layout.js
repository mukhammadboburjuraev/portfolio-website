import Navbar from "@/components/Navbar";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "주라에브 무함마드버부르",
  description:
    "React를 사용하여 반응형 및 인터랙티브 웹 애플리케이션을 직접 구축한 경험이 있는 동기 부여형 프론트엔드 개발자.",
  keywords: "프론트엔드,프론트엔드 개발자,프론트엔드 개발자 포트폴리오",
  verification: {
    google: "qTeVVpaiTLEtBM20_KHkTEbfq7li3ly2sAv3ONhAZKA",
  },
  openGraph: {
    title: "주라에브 무함마드버부르",
    description:
      "React를 사용하여 반응형 및 인터랙티브 웹 애플리케이션을 직접 구축한 경험이 있는 동기 부여형 프론트엔드 개발자.",
    images: [
      {
        url: "https://portfolio-website-t9bl.onrender.com/home_img4.webp",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6MR091RP9Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6MR091RP9Z');
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
