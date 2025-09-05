import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bookly"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider
          style={{
            ["--sidebar-width" as any]: "20rem",
            ["--sidebar-width-mobile" as any]: "20rem",
          } as React.CSSProperties}
        >
          <AppSidebar />
          <SidebarInset>
            <div className="flex min-h-screen">
            <main className="flex-1 bg-blue-50">
              <div className="flex items-center gap-3 px-10 py-4 bg-white">
                <SidebarTrigger className=""/>
              </div>
              {children}
            </main>
          </div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
