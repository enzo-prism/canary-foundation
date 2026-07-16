import { useEffect } from "react";
import { ArrowLeft, Home, SearchX } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content" className="bg-slate-50 px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-slate-950">
            <SearchX className="h-8 w-8" aria-hidden="true" />
          </div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-slate-600">
            Page not found
          </p>
          <h1 className="mb-5 text-4xl font-bold text-slate-950 sm:text-5xl">
            We could not find that page.
          </h1>
          <p className="mx-auto mb-9 max-w-xl text-lg leading-8 text-slate-700">
            The page may have moved or the address may be incomplete. You can
            return home or explore Canary Foundation&apos;s research programs.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 font-semibold text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              Return home
            </Link>
            <Link
              href="/science/programs"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border-2 border-slate-900 bg-white px-5 py-3 font-semibold text-slate-950 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Explore research
              <ArrowLeft className="h-4 w-4 rotate-180" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
