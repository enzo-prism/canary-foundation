import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { FinancialDocumentSlots } from "@/components/financial-document-slots";

export default function Financials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main id="main-content" tabIndex={-1}>
        <section className="bg-light py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold text-dark md:text-5xl">
                Financials
              </h1>
              <p className="text-xl leading-relaxed text-gray-600">
                We are committed to complete transparency in how we manage and utilize
                donations to advance early cancer detection research.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20" aria-labelledby="current-filings">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2
                id="current-filings"
                className="mb-6 text-center text-3xl font-bold text-dark md:text-4xl"
              >
                Current filings
              </h2>
              <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-gray-600">
                2025 documents will be posted here as they become available. The current
                set includes a narrative, an overview, Form 990, and a QuickBooks summary.
              </p>
              <FinancialDocumentSlots />
            </div>
          </div>
        </section>

        <section className="bg-light py-16 md:py-20" aria-labelledby="stewardship">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 id="stewardship" className="mb-6 text-3xl font-bold text-dark md:text-4xl">
                Financial transparency
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                The Canary Foundation maintains the highest standards of financial
                transparency and accountability, ensuring every donation is used
                effectively to advance early cancer detection research.
              </p>

              <div className="mx-auto max-w-xl">
                <Card className="bg-white">
                  <CardContent className="p-6 text-left">
                    <h3 className="mb-4 text-xl font-bold text-dark">Nonprofit commitment</h3>
                    <p className="mb-4 text-sm text-gray-600">
                      As a 501(c)(3) nonprofit organization (Tax ID: 65-1230251), we are
                      committed to the highest standards of financial stewardship. Annual
                      independent audits support compliance with nonprofit standards and
                      transparent use of donor funds.
                    </p>
                    <p className="mb-4 text-sm text-gray-600">
                      Our Board of Directors provides oversight of financial management
                      and strategic allocation of resources to maximize research impact.
                    </p>
                    <p className="text-sm text-gray-600">
                      Questions about giving or filings can be sent from the{" "}
                      <Link
                        href="/contact"
                        className="font-semibold text-primary underline underline-offset-4 hover:text-primary-dark"
                      >
                        contact page
                      </Link>
                      {" "}or the{" "}
                      <Link
                        href="/donate"
                        className="font-semibold text-primary underline underline-offset-4 hover:text-primary-dark"
                      >
                        donate page
                      </Link>
                      .
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
