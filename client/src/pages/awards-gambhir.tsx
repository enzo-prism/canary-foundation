import { useEffect } from "react";
import { AwardsLayout } from "@/components/awards/awards-layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  AWARDS_NOMINATIONS_NOTE,
  GAMBHIR_ABOUT_PARAGRAPHS,
  GAMBHIR_AWARD_NAME,
} from "@/data/awards";

export default function AwardsGambhir() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AwardsLayout>
      <section className="bg-light py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Awards
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-dark md:text-5xl">
              {GAMBHIR_AWARD_NAME}
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20" aria-labelledby="about-the-award">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2
              id="about-the-award"
              className="mb-8 text-3xl font-bold text-dark md:text-4xl"
            >
              About the award
            </h2>
            <div className="space-y-6">
              {GAMBHIR_ABOUT_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20" aria-labelledby="nominations">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="border border-primary/20 bg-white shadow-sm">
              <CardContent className="p-8">
                <h2
                  id="nominations"
                  className="mb-3 text-2xl font-bold text-dark"
                >
                  Nominations
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  {AWARDS_NOMINATIONS_NOTE}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AwardsLayout>
  );
}
