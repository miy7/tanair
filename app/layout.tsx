import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = { title: "TANAIR · Repair Management", description: "ระบบจัดการงานซ่อมและติดตามสถานะงาน" }
export const viewport: Viewport = { width: "device-width", initialScale: 1, maximumScale: 1, themeColor: "#f6f7f9" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="th"><body>{children}</body></html> }
