"use client";
import LayoutContent from "@/components/LayoutContent";
import "./globals.css";
import { ThemeProvider } from "@/components/themeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <LayoutContent>{children}</LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}
