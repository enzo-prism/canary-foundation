import type { ReactNode } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";

interface TeamUpdatesLayoutProps {
  children: ReactNode;
}

export function TeamUpdatesLayout({ children }: TeamUpdatesLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
