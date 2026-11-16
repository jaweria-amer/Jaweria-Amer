import Link from "next/link";
import { ADMISSIONS_FAQS } from "@/lib/faq";
import { ENROL_NOW_URL } from "@/lib/contact";
import { FaqItems } from "@/components/faq-items";
import { Arrow } from "@/components/editorial/arrow";

export function AdmissionsFaqs() {
  return (
    <div>
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="ed-h2">Before you join</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate">
            Your next O Level English Language (1123) batch, practice and feedback.
          </p>
        </div>
        <Link href="/faq" className="ed-link text-crimson">View all FAQs <Arrow /></Link>
      </div>
      <FaqItems items={ADMISSIONS_FAQS} open />
      <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
        <Link href={ENROL_NOW_URL} className="ed-link text-crimson">Enquire about the next batch <Arrow /></Link>
        <Link href="/class-timings" className="ed-link text-ink">View class timings <Arrow /></Link>
      </div>
    </div>
  );
}
