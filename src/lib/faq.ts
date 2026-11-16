/**
 * Shared public FAQ content. Programme claims are grounded in the published
 * course material and the 5 November 2026 operations handbook. Edit here. The canonical YouTube channel is https://www.youtube.com/@englishwithmissjay.
 */
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@englishwithmissjay";

export interface FaqItem {
  id?: string;
  q: string;
  a: string;
}

// The live LMS timetable publishes session times and examination-series labels,
// not an approved next intake start date (checked 16 November 2026).
// Update this single shared answer only when an actual batch start is confirmed.
export const ADMISSIONS_FAQS: FaqItem[] = [
  {
    id: "next-batch",
    q: "When does the next O Level English Language (1123) batch start?",
    a: "The next O Level English Language (1123) batch start date is not yet confirmed here. The confirmed start date will appear here as soon as it is announced. The examination series shown in Class Timings is not a batch start date. Please enquire about the next intake and available seats.",
  },
  {
    id: "homework",
    q: "Will we receive homework and regular practice?",
    a: "Yes. Students receive structured homework and exam-focused practice linked to the topics taught in class. This helps you apply each technique, strengthen your writing and build confidence before the examination. The assignments follow your batch’s teaching programme.",
  },
  {
    id: "checked-work",
    q: "Is homework checked, and will I know what to improve?",
    a: "Yes. Submitted work is checked by authorised teaching staff, and students receive personalised, examiner-style feedback on what they have done well, where marks may be lost and what to improve next. Students view published feedback and any checked files in the LMS. Review and publication follow the teaching team’s checking process.",
  },
];

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    title: "Courses and syllabuses",
    items: [
      { q: "Which Cambridge syllabuses do you teach?", a: "Miss Jay teaches O Level English Language (1123), IGCSE First Language English (0500), IGCSE Second Language English (0510/0511) and AS & A Level English Language (9093)." },
      { q: "Do you teach any subjects other than English?", a: "No. Miss Jay teaches Cambridge English only, so every lesson, resource and piece of feedback follows the Cambridge English exam rubric." },
      { q: "What does the O Level course cover?", a: "Directed writing, composition and reading comprehension, the three core examination components, with rubric-based practice throughout." },
      { q: "Is there an English Literature course?", a: "Not at the moment. Miss Jay teaches Cambridge English Language only, so every lesson and every piece of feedback is built around the Language mark schemes." },
    ],
  },
  {
    title: "Registration",
    items: [
      { q: "How do I enrol?", a: "Use the Join the Next Batch form on this website, or contact Miss Jay on WhatsApp or by email to ask about available seats. Pricing and scheduling details are shared in that conversation. Sending the form is an enquiry, not a confirmed enrolment." },
      ADMISSIONS_FAQS[0],
      { q: "How much do the courses cost?", a: "Fees are discussed directly with Miss Jay. Message her on WhatsApp or send an email and she will share current pricing for the course you are interested in." },
      { q: "Can I join part-way through a programme?", a: "This depends on where the cohort is in the programme. Ask Miss Jay on WhatsApp whether joining part-way is possible for your course and intake." },
    ],
  },
  {
    title: "Class schedules",
    items: [
      { q: "Are the sessions online?", a: "Yes. All tuition is online, so students can join from anywhere." },
      { q: "When are the live sessions?", a: "Session days and times for each current batch are on the Class Timings page, in Pakistan Standard Time. Timings are reviewed each semester, so confirm the latest schedule with Miss Jay before you enrol." },
      { q: "How many students are in each group?", a: "Cohorts are kept small so every student receives direct attention and personal feedback." },
    ],
  },
  {
    title: "LMS access",
    items: [
      { q: "How do I get into the student portal (LMS)?", a: "Enrolled students use the LMS at englishwithmissjay.com. Registering your interest on this website does not create an account or enrol you; the school sets up access when you join a batch." },
      { q: "Where do I find my Zoom link?", a: "Enrolled students find their Zoom join link on the LMS dashboard." },
    ],
  },
  {
    title: "Learning resources",
    items: [
      { q: "Are there free resources?", a: "Yes. Miss Jay shares free lesson walkthroughs and Cambridge English tips on her YouTube channel, @englishwithmissjay, open to everyone with no enrolment. The free resource library and the free study plans on this website are open to everyone too." },
      { q: "Do enrolled students get additional materials?", a: "Yes. Enrolled students access a curated library of worksheets, solved papers, vocabulary banks and examiner report summaries, hosted securely in the student portal." },
      { q: "Can I download PDFs?", a: "No. Student materials are cloud-hosted and viewed through the website or student portal. There are no local file downloads or physical worksheets." },
    ],
  },
  {
    title: "Assignments and feedback",
    items: [
      ADMISSIONS_FAQS[1],
      ADMISSIONS_FAQS[2],
      { q: "How do I submit homework?", a: "Enrolled students submit work through the task in their LMS account, following the instructions for that assignment. The submission method and any files required depend on the task." },
    ],
  },
  {
    title: "Recorded lessons",
    items: [
      { q: "Are sessions recorded?", a: "The recording arrangement is explained at enrolment. Ask Miss Jay directly for the current policy." },
    ],
  },
  {
    title: "General student enquiries",
    items: [
      { q: "Can I ask questions between sessions?", a: "Yes. Students and parents can message Miss Jay on WhatsApp between sessions." },
      { q: "Can I check my exam dates?", a: "Yes. The Exam Countdown page shows the days left to each Cambridge paper for your syllabus. Always confirm your exact start time with your exam centre." },
    ],
  },
];
