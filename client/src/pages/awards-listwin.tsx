import { useEffect } from "react";
import { AwardsLayout } from "@/components/awards/awards-layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  LISTWIN_ABOUT_PARAGRAPHS,
  LISTWIN_ANNOUNCEMENT_PARAGRAPHS,
  LISTWIN_AWARD_NAME,
  LISTWIN_PHOTO_ALT,
  LISTWIN_PHOTO_CAPTION,
  LISTWIN_RECIPIENT_NAME,
} from "@/data/awards";
import lisaNewcombPortraitJpg from "@assets/lisa-newcomb-listwin-award.jpg";
import lisaNewcombPortraitWebp from "@assets/lisa-newcomb-listwin-award.webp";

export default function AwardsListwin() {
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
              {LISTWIN_AWARD_NAME}
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
              {LISTWIN_ABOUT_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20" aria-labelledby="inaugural-recipient">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Inaugural recipient
            </p>
            <h2
              id="inaugural-recipient"
              className="mb-10 text-3xl font-bold text-dark md:text-4xl"
            >
              {LISTWIN_RECIPIENT_NAME}
            </h2>

            <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
              <figure className="mx-auto max-w-md lg:mx-0">
                <picture>
                  <source srcSet={lisaNewcombPortraitWebp} type="image/webp" />
                  <img
                    src={lisaNewcombPortraitJpg}
                    alt={LISTWIN_PHOTO_ALT}
                    width={1200}
                    height={1600}
                    className="w-full rounded-lg border border-gray-200 object-cover shadow-sm"
                  />
                </picture>
                <figcaption className="mt-4 text-sm leading-relaxed text-gray-500">
                  {LISTWIN_PHOTO_CAPTION}
                </figcaption>
              </figure>

              <Card className="border border-gray-200 bg-white shadow-sm">
                <CardContent className="space-y-6 p-8">
                  {LISTWIN_ANNOUNCEMENT_PARAGRAPHS.map((paragraph) => (
                    <p key={paragraph} className="text-lg leading-relaxed text-gray-600">
                      {paragraph}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </AwardsLayout>
  );
}
