import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { AwardsLayout } from "@/components/awards/awards-layout";
import { Card, CardContent } from "@/components/ui/card";
import { AWARD_PAGES, AWARDS_HUB_INTRO } from "@/data/awards";

export default function Awards() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AwardsLayout>
      <section className="bg-light py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              About Canary
            </p>
            <h1 className="mb-6 text-4xl font-bold text-dark md:text-5xl">
              Awards
            </h1>
            <p className="text-xl leading-relaxed text-gray-600">
              {AWARDS_HUB_INTRO}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20" aria-labelledby="award-pages">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2
              id="award-pages"
              className="mb-12 text-center text-3xl font-bold text-dark md:text-4xl"
            >
              Annual Awards
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {AWARD_PAGES.map((award) => (
                <Card
                  key={award.path}
                  className="border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="h-2 bg-primary" aria-hidden="true" />
                  <CardContent className="flex h-full flex-col p-8">
                    <h3 className="mb-4 text-2xl font-bold text-dark">
                      {award.name}
                    </h3>
                    <p className="mb-8 flex-1 text-lg leading-relaxed text-gray-600">
                      {award.summary}
                    </p>
                    <Link
                      href={award.path}
                      className="inline-flex min-h-11 items-center gap-2 self-start font-semibold text-primary hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AwardsLayout>
  );
}
