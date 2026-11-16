# FAQ and homepage portrait release — 16 November 2026

## Audit and content evidence

Baseline production: `dpl_7K787TUK7rqbZcRr5ioMw9Fp3by9`, READY, SHA `2ad9da48b8ff0c1bcb9030b82f5bba17cd3d548d`, matching local/main and including PRs #23 and #24. No open PRs at audit. Project `jaweria-amer-wrfz`, team `amqur`, Node 24, Next 16.4.3. Public website and LMS remain separate.

Existing `/faq` uses categorised native disclosures and a single FAQPage JSON-LD block generated from `src/lib/faq.ts`. Footer already links it; main navigation did not. Homepage uses CMS hero copy, static course offerings, verified results, and the supplied immutable portrait. The red frame is a crimson decorative arch behind the inset white portrait wrapper, not part of the image. Removed only that arch.

Sources checked: public course records, registration configuration, homepage CMS types/defaults, current public/LMS FAQs, live `https://englishwithmissjay.com/api/public/timetable`, and the owner's 5 November 2026 Complete Website and LMS Agent Handbook retrieved from connected Drive. The timetable shows two O Level batches with weekly sessions and examination-series labels but no exact intake start date. The expired October campaign is not evidence of an upcoming start. No exact upcoming start date was verified. The shared answer explicitly says unconfirmed; the exact-date question remains unresolved until an approved announcement. No fee, homework quota, turnaround or recording guarantee added.

Published course materials support structured practice, checked work and personalised feedback. The handbook confirms authorised teacher/checker review, human publication and student access to published LMS feedback. Copy does not promise Miss Jay personally checks every submission. Existing category answers retained, with the old combined homework question replaced by separate homework/checking answers and task-specific LMS submission guidance.

## Implementation

- Shared admissions data in `src/lib/faq.ts`; one native disclosure renderer reused on home, FAQ and O Level 1123 detail.
- Homepage section immediately after existing results; prominent hero shortcut adjacent to the CTAs. Results still follow hero as required by existing tests.
- Course answers precede learning outcomes, beside registration on desktop.
- FAQ top question index links to unique answers in existing Registration and Assignments categories. Important answers initially expanded; other answers retain collapsed defaults.
- Added FAQs to shared desktop/mobile navigation; footer preserved.
- Canonical/indexability and existing data-generated FAQ JSON-LD retained; metadata clarified. No new structured-data block or rich-result claim.
- Original portrait URL, image props, alt text, size, inset, crop and rounded wrapper retained.

## Validation before release

`npm run lint`, `npm run typecheck`, `npm test` (including posttest), `npm run build` (including both MJ26 gates) passed. Real-database password-reset test remains skipped by its existing configuration; its in-memory contracts passed. Registration/required phone, persistence contracts, forwarding, notification, Excel export and admin auth tests passed. No live enquiry submitted or student record changed.

Browser checks: HTTP 200 and no horizontal overflow on home, FAQ and O Level detail at 375, 390, 768 and 1440 pixels. Native disclosures toggle via Enter/Space. Mobile FAQs links navigate correctly. Required-phone field and browser rejection of blank registration form checked without submission. Original site has existing AdSense/image-quality development warnings; no new page exceptions observed. Mechanical design detector returned no findings. React review: new components stay server-rendered, no hooks/client state, dependency or animation addition.

Before/local screenshots are in ignored/untracked `output/playwright/faq-photo-*`; not included in Git. Production deployment IDs and live verification are recorded in the delivery report after release.

## Scope and rollback

No changes to registration APIs, Supabase schemas, notification/export implementation, authentication, resources, results data/pipeline or LMS code. No credentials, student data, images, PDFs or packages added. Release via reviewed feature PR to main and existing Vercel production procedure; rollback by promoting the baseline production deployment if needed.
