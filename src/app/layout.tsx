import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Trend Clip | AI 기술 트렌드 요약 북마크",
  description: "유튜브와 개발 커뮤니티 링크를 3줄 AI 요약으로 정리하는 북마크 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
