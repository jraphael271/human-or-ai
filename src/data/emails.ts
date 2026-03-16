export type EmailLabel = "Human" | "AI" | "Edited by AI";

export interface Email {
  id: number;
  context: string;
  text: string;
  label: EmailLabel;
  explanation: string;
}

export const emails: Email[] = [
  {
    id: 1,
    context: "Student emailing a professor about a deadline extension",
    text: `Hi Professor Chen,

I hope this email finds you well. I'm writing to request a short extension on the research paper due this Friday. I've been dealing with some personal issues this week that have made it difficult to focus, and I want to make sure I submit work that meets the standard you expect.

Would it be possible to have until Monday? I already have a solid outline and most of my sources gathered - I just need a couple more days to pull it all together properly.

Thank you for your understanding.

Best,
Jamie`,
    label: "Human",
    explanation: "Natural tone with personal context, minor imperfections in structure, and authentic voice typical of student communication.",
  },
  {
    id: 2,
    context: "Teaching assistant announcing office hours change",
    text: `Dear Students,

I am writing to inform you that my office hours for the remainder of this semester will be adjusted. Effective immediately, my office hours will transition from Tuesdays and Thursdays, 2:00 PM - 4:00 PM, to Mondays and Wednesdays, 3:00 PM - 5:00 PM.

This change is being implemented to better accommodate the schedules of the majority of students enrolled in the course. Should you require assistance outside of these newly established hours, please do not hesitate to reach out via email to schedule an individual appointment.

I appreciate your understanding and flexibility regarding this matter.

Sincerely,
Alex Rivera, Teaching Assistant`,
    label: "AI",
    explanation: "Overly formal language, rigid structure, and phrases like 'I am writing to inform you' and 'do not hesitate' are hallmarks of AI-generated text.",
  },
  {
    id: 3,
    context: "Student responding to a group project message",
    text: `Hey everyone,

    So I looked over the slides from last night and honestly they're looking pretty good! I made a few tweaks to the intro section - nothing major, just tightened up some of the wording. Also moved the methodology graph to slide 4 because it flows better after the literature review.

    @Sarah - can you double-check the citation on slide 7? I think we might be referencing the wrong year for that WHO report.

Let's try to finalize everything by tomorrow night so we're not scrambling before the presentation. Sound good?

- Marcus`,
    label: "Human",
    explanation: "Casual tone, direct references to specific details, @-mentions, and natural conversational flow indicate genuine human writing.",
  },
  {
    id: 4,
    context: "Professor providing feedback on a draft essay",
    text: `Dear Student,

Thank you for submitting your draft essay on the socioeconomic implications of renewable energy adoption. Overall, the paper demonstrates a commendable understanding of the topic and presents several compelling arguments.

However, I would like to highlight a few areas for improvement:

1. Your thesis statement could benefit from greater specificity. Consider narrowing your focus to a particular region or demographic.
2. The transition between paragraphs 3 and 4 feels abrupt. Adding a connecting sentence would improve the logical flow.
3. Several of your sources are dated. I recommend incorporating more recent studies published within the last five years.

I encourage you to revise and resubmit by the end of next week. Please feel free to visit during office hours if you'd like to discuss these points further.

Best regards,
Dr. Williams`,
    label: "Edited by AI",
    explanation: "The structure is AI-typical (numbered lists, formal courtesy), but contains specific, contextual feedback that suggests a human edited AI-generated scaffolding.",
  },
  {
    id: 5,
    context: "Student complaint email to university administration",
    text: `To whom it may concern,

I'm writing because I've had a really frustrating experience with the financial aid office this semester. I submitted my FAFSA back in February and was told my package would be ready by April. It's now May and I still haven't received anything concrete - just vague emails saying it's "being processed."

I've called three times and visited in person twice. Each time I get a different answer. Meanwhile, my tuition payment deadline is in two weeks and I genuinely don't know how I'm supposed to pay.

I'm not trying to be difficult, but I need someone to actually look into this and give me a clear answer. This has been incredibly stressful and it's affecting my ability to focus on my coursework.

Thank you,
Jordan Park
Student ID: 2023-44891`,
    label: "Human",
    explanation: "Emotional authenticity, specific details about personal experience, and natural frustration make this clearly human-written.",
  },
  {
    id: 6,
    context: "Academic advisor sending a welcome email to new students",
    text: `Dear Incoming Students,

On behalf of the Department of Computer Science, I would like to extend a warm welcome to all of you as you embark on this exciting academic journey. The coming years will present you with numerous opportunities for intellectual growth, professional development, and personal enrichment.

As your academic advisor, I am here to support you in navigating your curriculum, selecting appropriate courses, and exploring research opportunities. I strongly encourage you to take advantage of the resources available to you, including tutoring services, career counseling, and student organizations.

Please find attached the orientation schedule and a comprehensive guide to departmental resources. I look forward to meeting each of you during the orientation session on September 5th.

Warm regards,
Dr. Patricia Hoffman
Academic Advisor, Department of Computer Science`,
    label: "AI",
    explanation: "Generic, templated language with no personal touch. Phrases like 'embark on this exciting academic journey' and 'intellectual growth, professional development, and personal enrichment' are classic AI patterns.",
  },
  {
    id: 7,
    context: "Student emailing about a missed exam",
    text: `Professor Nakamura,

I know this is going to sound like every excuse you've ever heard, but I genuinely overslept this morning and missed the midterm. My alarm didn't go off - I think my phone died overnight because I forgot to plug it in.

I completely understand if there's nothing you can do about this, and I take full responsibility. But if there's any possibility of a makeup exam or alternative assessment, I would be incredibly grateful. I've attended every class this semester and my assignment grades reflect that I've been keeping up with the material.

I'm available to take the exam at any time that works for you, including evenings or weekends. I can also provide any documentation you might need.

I'm really sorry about this.

Thank you,
Priya Sharma`,
    label: "Human",
    explanation: "Self-aware tone ('I know this is going to sound like every excuse'), genuine accountability, and personal details make this authentically human.",
  },
  {
    id: 8,
    context: "Department newsletter about an upcoming guest lecture",
    text: `Dear Members of the University Community,

We are pleased to announce an upcoming guest lecture that promises to be both enlightening and thought-provoking. Dr. Elena Rodriguez, a distinguished researcher in the field of artificial intelligence ethics, will be delivering a lecture entitled "The Moral Machine: Navigating Ethical Dilemmas in AI Development."

Event Details:
- Date: Thursday, November 14, 2024
- Time: 4:00 PM - 5:30 PM
- Location: Harrison Auditorium, Room 201
- Reception to follow in the Faculty Lounge

Dr. Rodriguez's research has been published in numerous prestigious journals and has been recognized with several international awards. Her work focuses on the intersection of technology, philosophy, and public policy.

This event is free and open to all students, faculty, and staff. No registration is required.

We look forward to your attendance.

Best regards,
The Department of Philosophy and Ethics`,
    label: "Edited by AI",
    explanation: "The structure and tone are AI-generated, but specific details (speaker name, room number, topic) were likely inserted by a human editor.",
  },
  {
    id: 9,
    context: "Peer tutor reaching out to a student",
    text: `Hey!

I'm your assigned peer tutor for CHEM 201 this semester. My name's Diego and I'm a third-year chem major. I saw from the sign-up sheet that you're looking for help with organic chemistry — honestly same, orgo almost broke me last year lol.

I usually hold sessions in the library study rooms on Tuesdays around 6pm, but I'm flexible if that doesn't work for you. We can also do virtual if that's easier.

Just shoot me a text or reply here and we can figure out a time. No pressure, no judgment — everyone struggles with chair conformations at first 😅

Looking forward to working with you!
Diego`,
    label: "Human",
    explanation: "Informal language, humor, emoji use, self-deprecation, and casual scheduling indicate natural human communication.",
  },
  {
    id: 10,
    context: "Cover letter for a research assistant position",
    text: `Dear Dr. Thompson,

I am writing to express my interest in the Research Assistant position in your Computational Linguistics Laboratory, as advertised on the university careers portal. As a second-year graduate student in the Department of Linguistics with a concentration in Natural Language Processing, I believe my academic background and research experience align well with the requirements of this role.

During my time at the university, I have developed proficiency in Python, R, and various NLP frameworks including spaCy and Hugging Face Transformers. My current thesis research involves fine-tuning large language models for low-resource languages, which has given me hands-on experience with the methodologies employed in your laboratory.

I have attached my CV and a brief writing sample for your review. I am available to discuss my qualifications at your earliest convenience and would welcome the opportunity to contribute to your team's groundbreaking research.

Thank you for your consideration.

Sincerely,
Taylor Chen`,
    label: "Edited by AI",
    explanation: "The letter follows a suspiciously perfect structure with AI-typical phrases ('express my interest', 'at your earliest convenience'), but includes specific personal details that suggest human editing of an AI draft.",
  },
];
