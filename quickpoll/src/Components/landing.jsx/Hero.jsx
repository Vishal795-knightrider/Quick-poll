import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-40 pb-20 text-center">
      <div className="max-w-4xl mx-auto px-6">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-orange-600">
          <span className="h-2 w-2 rounded-full bg-orange-500" />
          Frictionless Polling
        </div>

        {/* Headline */}
        <h1 className="text-6xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-7xl md:text-8xl">
          Make decisions,
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            not forms.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg text-slate-600 md:text-xl max-w-2xl mx-auto">
          Create instant, beautiful polls that people actually love to answer.
          <br />
          <span className="bg-orange-100 px-2 py-1 rounded font-semibold text-orange-600">
            No logins
          </span>{" "}
          no wait times — just pure feedback.
        </p>

        {/* CTA */}
        <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-white font-bold text-base transition hover:bg-slate-800">
          Create a Free Poll
          <ArrowRight className="h-5 w-5" />
        </button>

      </div>
    </section>
  );
}