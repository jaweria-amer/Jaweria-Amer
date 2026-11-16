import { Plus } from "lucide-react";
import type { FaqItem } from "@/lib/faq";

/** Native disclosures work with keyboard, assistive technology and no JavaScript. */
export function FaqItems({ items, open = false }: { items: FaqItem[]; open?: boolean }) {
  return (
    <div className="border-t border-ink/15">
      {items.map((item) => (
        <details key={item.q} id={item.id} open={open || Boolean(item.id)} className="group scroll-mt-24 border-b border-ink/15">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-[1.0625rem] font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson [&::-webkit-details-marker]:hidden">
            {item.q}
            <Plus aria-hidden="true" className="h-5 w-5 shrink-0 text-crimson group-open:rotate-45" />
          </summary>
          <p className="max-w-[70ch] pb-5 leading-relaxed text-slate">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
