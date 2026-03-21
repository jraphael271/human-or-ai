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
    text: `Hi Professor Doe,

I hope this email finds you well. I'm writing to request a short extension on the research paper due this Friday. I've been dealing with some personal issues this week that have made it difficult to focus, and I want to make sure I submit work that meets the standard you expect.

Would it be possible to have until Monday? I already have a solid outline and most of my sources gathered - I just need a couple more days to pull it all together properly.

Thank you for your understanding.

Best,
Joe`,
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
Jane Doe, Teaching Assistant`,
    label: "AI",
    explanation: "Overly formal language, rigid structure, and phrases like 'I am writing to inform you' and 'do not hesitate' are hallmarks of AI-generated text.",
  },
  {
    id: 3,
    context: "Student responding to a group project message",
    text: `Hey everyone,

    So I looked over the slides from last night and honestly they're looking pretty good! I made a few tweaks to the intro section - nothing major, just tightened up some of the wording. Also moved the methodology graph to slide 4 because it flows better after the literature review.

    @Jane - can you double-check the citation on slide 7? I think we might be referencing the wrong year for that WHO report.

Let's try to finalize everything by tomorrow night so we're not scrambling before the presentation. Sound good?

- Jill`,
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
Dr. Doe`,
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
Jill Smith
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
Dr. Jill Smith
Academic Advisor, Department of Computer Science`,
    label: "AI",
    explanation: "Generic, templated language with no personal touch. Phrases like 'embark on this exciting academic journey' and 'intellectual growth, professional development, and personal enrichment' are classic AI patterns.",
  },
  {
    id: 7,
    context: "Student emailing about a missed exam",
    text: `Professor Doe,

I know this is going to sound like every excuse you've ever heard, but I genuinely overslept this morning and missed the midterm. My alarm didn't go off - I think my phone died overnight because I forgot to plug it in.

I completely understand if there's nothing you can do about this, and I take full responsibility. But if there's any possibility of a makeup exam or alternative assessment, I would be incredibly grateful. I've attended every class this semester and my assignment grades reflect that I've been keeping up with the material.

I'm available to take the exam at any time that works for you, including evenings or weekends. I can also provide any documentation you might need.

I'm really sorry about this.

Thank you,
Jill Smith`,
    label: "Human",
    explanation: "Self-aware tone ('I know this is going to sound like every excuse'), genuine accountability, and personal details make this authentically human.",
  },
  {
    id: 8,
    context: "Department newsletter about an upcoming guest lecture",
    text: `Dear Members of the University Community,

We are pleased to announce an upcoming guest lecture that promises to be both enlightening and thought-provoking. Dr. Jane Doe, a distinguished researcher in the field of artificial intelligence ethics, will be delivering a lecture entitled "The Moral Machine: Navigating Ethical Dilemmas in AI Development."

Event Details:
- Date: Thursday, November 14, 2024
- Time: 4:00 PM - 5:30 PM
- Location: Harrison Auditorium, Room 201
- Reception to follow in the Faculty Lounge

Dr. Doe's research has been published in numerous prestigious journals and has been recognized with several international awards. Her work focuses on the intersection of technology, philosophy, and public policy.

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

    I'm your assigned peer tutor for CHEM 201 this semester. My name's Joe and I'm a third-year chem major. I saw from the sign-up sheet that you're looking for help with organic chemistry - honestly same, orgo almost broke me last year lol.

    I usually hold sessions in the library study rooms on Tuesdays around 6pm, but I'm flexible if that doesn't work for you. We can also do virtual if that's easier.

    Just shoot me a text or reply here and we can figure out a time. No pressure, no judgment - everyone struggles with chair conformations at first 😅

Looking forward to working with you!
Joe`,
    label: "Human",
    explanation: "Informal language, humor, emoji use, self-deprecation, and casual scheduling indicate natural human communication.",
  },
  {
    id: 10,
    context: "Cover letter for a research assistant position",
    text: `Dear Dr. Doe,

I am writing to express my interest in the Research Assistant position in your Computational Linguistics Laboratory, as advertised on the university careers portal. As a second-year graduate student in the Department of Linguistics with a concentration in Natural Language Processing, I believe my academic background and research experience align well with the requirements of this role.

During my time at the university, I have developed proficiency in Python, R, and various NLP frameworks including spaCy and Hugging Face Transformers. My current thesis research involves fine-tuning large language models for low-resource languages, which has given me hands-on experience with the methodologies employed in your laboratory.

I have attached my CV and a brief writing sample for your review. I am available to discuss my qualifications at your earliest convenience and would welcome the opportunity to contribute to your team's groundbreaking research.

Thank you for your consideration.

Sincerely,
Jill Smith`,
    label: "Edited by AI",
    explanation: "The letter follows a suspiciously perfect structure with AI-typical phrases ('express my interest', 'at your earliest convenience'), but includes specific personal details that suggest human editing of an AI draft.",
  },
  {
    id: 11,
    context: "Student asking for lecture slides to be published",
    text: `Dear Dr. Doe,

Could you please publish the slides for lecture 5?

Thank you,

John Smith`,
    label: "Human",
    explanation: "Very brief and direct request with natural simplicity and no polished AI-style filler.",
  },
  {
    id: 12,
    context: "Student asking about a possible grade increase on an assignment",
    text: `Good afternoon Professor Doe,

I hope you are doing well. I would like to ask for your opinion on possibly increasing my grade for Assignment 1.

For question 5, I was marked down for not answering the last question, being "What kind of problems did you encounter?"

In that part of the assignment I didn't encounter any problems so instead I explained what problem I was able to avoid. Do you think this is a sufficient answer?

Thank you for your time and consideration,

Best Regards,

Joe Smith`,
    label: "Human",
    explanation: "Specific reference to grading details and slightly awkward phrasing reflect authentic student writing.",
  },
  {
    id: 13,
    context: "Student following up on a missing assignment grade",
    text: `Dear Jane,

Professor Doe mentioned that all the assignments should have been graded by now, however I do not see my grade for the latest assignment. Could you please let me know if our assignment was properly submitted and will receive a grade. Thank you.

Best Regards,

Joe Smith`,
    label: "Human",
    explanation: "Concrete academic context, minor grammatical roughness, and straightforward wording make it feel genuinely human.",
  },
  {
    id: 14,
    context: "Student expressing interest in becoming a teaching assistant",
    text: `Good evening Mr. Doe,
 
I am writing to express my interest in becoming a teaching assistant for next year's course.

Could you please provide me with information on when and where I should expect to apply for this position? I would like to know about any specific requirements or deadlines I should be aware of.

 
Thank you for your time.

Sincerely,

John Smith`,
    label: "Human",
    explanation: "Formal but slightly uneven phrasing suggests a real student writing carefully rather than a polished AI output.",
  },
  {
    id: 15,
    context: "Student asking whether a lecture recording will be shared",
    text: `Good afternoon,


I would like to know if the recording of tomorrow's lecture will be shared to students, and if so where?

Thank you, 

John Smith`,
    label: "Human",
    explanation: "Short functional message with natural wording and no elaborate structure typical of everyday student emails.",
  },
  {
    id: 16,
    context: "Student requesting an extension after a group member dropped the course",
    text: `Dear Professor John,

I wanted to ask if it would be possible to get an extension for assignment 2 since one of our group members informed us yesterday that he is not participating in the course anymore. There are only 2 people in our group now and it would be great if we can have more time to complete the assignment. We should be able to complete it before Thursday. Please let me know if this is possible, thanks in advance!

Kind regards,
Joe Smith`,
    label: "Human",
    explanation: "Specific situational detail and practical justification give it an authentic, human-written feel.",
  },
  {
    id: 17,
    context: "Student following up about an incorrect exam attendance grade",
    text: `Dear Prof. Doe,

I am emailing to ask about the wrong grade input since the system shows that I was not present at the exam even though I was and have got a grade for it. I have emailed about this issue last week and haven’t got a response so I wanted to check up on this again. Please let me know if this issue will be resolved soon.

Kind regards,
John Smith`,
    label: "Human",
    explanation: "Realistic administrative issue, mild frustration, and imperfect phrasing point to genuine human authorship.",
  },
  {
    id: 18,
    context: "Student informing a teaching assistant they are sick and absent from class",
    text: `Dear Jane,

Unfortunately I won’t be able to make it to class today because I am sick, sorry about that!

John Smith`,
    label: "Human",
    explanation: "Very casual and concise with natural apology, typical of a quick human absence note.",
  },
  {
    id: 19,
    context: "Student asking whether a listed course reader will be shared",
    text: `Dear Professor Scott,

I wanted to ask if the reader listed on canvas would be shared since it would be helpful to have other materials to study with other than the lecture slides. Please let me know.

Kind regards,
Joe Smith`,
    label: "Human",
    explanation: "Ordinary student request with simple phrasing and a practical motivation, without AI-style embellishment.",
  },
  {
    id: 20,
    context: "Student asking to discuss a bachelor thesis project",
    text: `Dear Jane,

My name is John and I am a 3rd year AI bachelor student. I am interested in doing the ‘Epistemic Logic in Fault Diagnosis’ for my thesis project since I’ve taken a Formal Logic course last December and would like to explore how it can be used in a practical setting in AI applications. Would it be possible to have a meeting to discuss more about the project? Please let me know.

Kind regards,
John Smith`,
    label: "Human",
    explanation: "Personal academic background, specific project interest, and slightly clunky phrasing make it sound naturally human.",
  },
  {
    id: 21,
    context: "Student declining a nominated summer school exchange opportunity",
    text: `Dear Jane,
Thank you so much for selecting me and for taking the time to reach out. I'm truly honored to have been nominated for the summer school exchange at a partner university abroad.
Unfortunately, due to personal reasons, I am unable to accept this spot at this time. I hope it can be offered to another deserving candidate.
I sincerely appreciate the opportunity and the work your team puts into these programs. I hope to explore other exchange opportunities in the future.
Kind regards,
John Doe`,
    label: "Human",
    explanation: "Polite and appreciative tone with a personal decline reads like genuine human correspondence.",
  },
  {
    id: 22,
    context: "Student replying to confirm they will wait for a meeting invitation",
    text: `Hi John,
Thank you for letting me know! I’ll be waiting for your email and invitation for the meeting all together.
Best regards,
John Doe`,
    label: "Human",
    explanation: "Informal reply with slightly awkward wording feels natural and not machine-polished.",
  },
  {
    id: 23,
    context: "Student asking how to register for an extra exam opportunity",
    text: `Dear John,
I would like to register for the extra examination opportunity for the your course. However, unlike my other course, the course registration page does not display a registration option for this one. Please let me know if there is anything I need to do to take part in the exam. Thank you for helping.
Best regards,
John Doe`,
    label: "Human",
    explanation: "Contains minor grammatical errors and a very practical request, both strong signs of human writing.",
  },
  {
    id: 24,
    context: "Student seeking supervision for a self-chosen bachelor thesis topic",
    text: `Dear Prof. Doe,

I would like to do Bachelor Thesis research project about Automated Power Systems and Power Automation Algoritms. As it is a self-chosen topic, I do need to find a supervisor and I believe, based on your past researches, that you would be a great specialist in this topic!
If you had the availability, I would love to schedule a short indtroductory meeting, when I can present to you my specific topic, and hopefully convince you about my motivation behind starting the research in this topic.

Thank you very much in advance, and I am looking forward to hear back from you!

Kind regards,
John Smith`,
    label: "Human",
    explanation: "Typos, enthusiastic tone, and non-native phrasing strongly suggest authentic human authorship.",
  },
  {
    id: 25,
    context: "Student asking about a missing partial grade transfer",
    text: `Dear Prof. Smith,

At the beginning of the course I have requested a partial grade transfer, as I did this course last year, however we have just received the final subject gerade on vu.nl and I believe grades from my assignments were not taken into the consideration, as the final grade is lower than what I calculated. Without assignments taken into consideration I should have a grade 7.5, then as I had 9.5 from all assignments last year, the final course grade should be 8.5 then.
I think maybe the transfer was not registered, as I also cannot still see it on Canvas, probably that is why on vu.nl the grade is different. The grade transfer usually takes place in the end of the course, that is why I did not contact earlier than today, hopefully that still can be adjusted!

Looking forward to hearing back from you.

Kind regards,
John Doe`,
    label: "Human",
    explanation: "Detailed grade calculation, spelling mistakes, and long winding sentences are typical of genuine student emails.",
  },
  {
    id: 26,
    context: "Student asking about eligibility for an extra exam date after severe winter travel disruption",
    text: `Dear Prof. Doe,
I live in Utrecht, and I was one of the students that in January could not attend the resit exam, because of the extreme winter conditions in the Netherlands. Unfortunately, I don't have a car, therefore I am always fully dependent on the public transportation. All the trains to Amsterdam were cancelled, and there was no working alternative transportation or bus that day, therefore I was not able to arrive.
I informed the examination board in January, but now I don't see any registration for the additional date of the exam, which is coming this week, and I wanted to check if I am still allowed to take the exam, even though I can't see myself in the system, or should I contact some department for registration?

Thank you very much in advance for your answer!

Kind regards,
Joe Doe`,
    label: "Human",
    explanation: "Personal circumstances, detailed context, and natural over-explanation make this clearly human-written.",
  },
  {
    id: 27,
    context: "Student requesting an exception to the practical-session absence rule due to illness",
    text: `Dear Prof. Smith,

Unfortunately, I have had a very strong fever for the past week, and I am still not healthy this week. Last week, I missed 2 practical sessions because of that, so I already used all of the possible absences, and I don't think I should attend the practical sessions this week too.
My doctor gave me the official document from him, so I can show it if requested. Also I do still contribute to the project, even when being sick, so I am very kindly asking if there can be an exception from the 2 absence maximum rule for me? I really do need to pass this subject in the current school year, so retaking it next year does not work well for me.

I have already had a meeting with the Academic Advisor, and she told me to directly discuss it with you, if my case can be re-evaluated.

Thank you in advance for answering to my email!

Kind regards,
John Doe`,
    label: "Human",
    explanation: "Emotionally invested, detailed, and somewhat awkwardly phrased in a way that feels authentically human.",
  },
  {
    id: 28,
    context: "Student requesting access to inspect a graded exam",
    text: `Dear Prof. Doe,

I have not seen any official announcement on Canvas or email about the inspection of the graded exams. However, I just checked my answers with the given solutions, and I believe my grade should be higher than the grade I received on Canvas.
Is it possible to see my exam, if there is no official inspection, could I please request the copy of my exam please? I would like to go through it and double-check as the grade from this subject is very important for me, and every point counts.

Thank you very much in advance for your reply!

Kind regards,
John Smith`,
    label: "Human",
    explanation: "Specific academic concern, repetitive phrasing, and personal emphasis on points all indicate natural human writing.",
  },
];
