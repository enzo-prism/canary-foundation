import type { ReactNode } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { AwardsSubnav } from "@/components/awards/awards-subnav";

interface AwardsLayoutProps {
  children: ReactNode;
}

export function AwardsLayout({ children }: AwardsLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <AwardsSubnav />
        {children}
      </main>
      <Footer />
    </div>
  );
}
