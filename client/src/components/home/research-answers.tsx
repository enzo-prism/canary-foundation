import { Link } from "wouter";

const linkClassName = "font-semibold text-dark underline decoration-primary underline-offset-4 hover:decoration-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

export function ResearchAnswers() {
  return (
    <section aria-labelledby="research-answers-title" className="bg-light py-16 md:py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 id="research-answers-title" className="mb-10 text-center text-3xl font-bold text-dark md:text-4xl">
          About our early detection research
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-dark">What does Canary Foundation do?</h3>
            <p className="leading-relaxed text-gray-600">
              Canary Foundation funds research aimed at developing reliable, affordable tests for early cancer detection. Don Listwin founded the nonprofit in 2004 after losing his mother to ovarian cancer. <Link href="/about/overview" className={linkClassName}>Read about our mission and history</Link>.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold text-dark">Which cancers does Canary research?</h3>
            <p className="leading-relaxed text-gray-600">
              Canary supports research programs focused on prostate, ovarian, pancreatic, and lung cancer. The programs investigate biomarkers, imaging, and disease-specific approaches to early detection. <Link href="/science/programs/tumors" className={linkClassName}>Explore the cancer research programs</Link>.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold text-dark">Where does the research take place?</h3>
            <p className="leading-relaxed text-gray-600">
              Canary supports research at the Canary Center at Stanford and Fred Hutch Cancer Center, alongside collaborations with other research institutions. <Link href="/science/centers" className={linkClassName}>Meet our research centers</Link>.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold text-dark">Where can I read research progress reports?</h3>
            <p className="leading-relaxed text-gray-600">
              Our team updates share dated reports from the ovarian, prostate, and pancreas research teams. Read them for details about the studies, technologies, and research priorities each team is pursuing. <Link href="/science/programs/team-updates" className={linkClassName}>Read the research team updates</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
