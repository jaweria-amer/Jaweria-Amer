import { FaqItems } from "@/components/faq-items";
import type { Metadata } from "next";
import Link from "next/link";
import { socialMetadata } from "@/lib/seo";
import { PageIntro } from "@/components/editorial/page-intro";
import { FAQ_GROUPS, ADMISSIONS_FAQS, YOUTUBE_CHANNEL_URL } from "@/lib/faq";
import { ENROL_NOW_URL, getWhatsAppUrl } from "@/lib/contact";

const description =
  "Answers about Miss Jay's online Cambridge English courses: next batch dates, structured homework, checked work and feedback, registration, schedules and LMS access.";
export const metadata: Metadata = {
  title: "FAQ",
  description,
  alternates: { canonical: "/faq" },
  ...socialMetadata({ title: "FAQ", description, path: "/faq" }),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_GROUPS.flatMap((g) =>
    g.items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  ),
};

export default function FaqPage() {
  return (
    <>
      <PageIntro label="Help" title="Questions, answered" size="md" lead="Everything students and parents ask most. Anything else, message Miss Jay directly." />
      <section className="ed-paper ed-margin pb-24">
        <div className="ed-wrap max-w-3xl">
          <nav aria-label="Before you join: key questions" className="mb-10 border-y border-ink/15 py-5">
            <h2 className="ed-h3">Before you join</h2>
            <ul className="mt-3 space-y-1">
              {ADMISSIONS_FAQS.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="inline-flex min-h-11 items-center py-2 font-semibold text-crimson underline underline-offset-4">{item.q}</a>
                </li>
              ))}
            </ul>
          </nav>
          {FAQ_GROUPS.map((g) => (
            <div key={g.title} className="mt-12 first:mt-0">
              <h2 className="ed-label">{g.title}</h2>
              <div className="mt-4">
                <FaqItems items={g.items} />
              </div>
            </div>
          ))}
          <p className="mt-12 text-slate">
            More free lessons on YouTube:{" "}
            <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="text-crimson underline underline-offset-4">
              @englishwithmissjay
            </a>
            .
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={ENROL_NOW_URL} className="ed-btn ed-btn-lg">Join the next batch</Link>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="ed-btn ed-btn-ink ed-btn-lg">Ask on WhatsApp</a>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
