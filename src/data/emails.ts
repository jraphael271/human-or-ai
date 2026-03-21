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
    context: "Teaching assistant announcing office hours change",
    text: `Dear Students,

I am writing to inform you that my office hours for the remainder of this semester will be adjusted. Effective immediately, my office hours will transition from Tuesdays and Thursdays, 2:00 PM - 4:00 PM, to Mondays and Wednesdays, 3:00 PM - 5:00 PM.

This change is being implemented to better accommodate the schedules of the majority of students enrolled in the course. Should you require assistance outside of these newly established hours, please do not hesitate to reach out via email to schedule an individual appointment.

I appreciate your understanding and flexibility regarding this matter.

Sincerely,
Jane Doe, Teaching Assistant`,
    label: "AI",
    explanation: "Overly formal language, rigid structure, and phrases like 'I am writing to inform you' and 'do not hesitate' are typical AI cues.",
  },
  {
    id: 2,
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
    explanation: "The polished structure feels AI-generated, but the specific comments suggest human editing.",
  },
  {
    id: 3,
    context: "Academic advisor sending a welcome email to new students",
    text: `Dear Incoming Students,

On behalf of the Department of Computer Science, I would like to extend a warm welcome to all of you as you embark on this exciting academic journey. The coming years will present you with numerous opportunities for intellectual growth, professional development, and personal enrichment.

As your academic advisor, I am here to support you in navigating your curriculum, selecting appropriate courses, and exploring research opportunities. I strongly encourage you to take advantage of the resources available to you, including tutoring services, career counseling, and student organizations.

Please find attached the orientation schedule and a comprehensive guide to departmental resources. I look forward to meeting each of you during the orientation session on September 5th.

Warm regards,
Dr. Jill Smith
Academic Advisor, Department of Computer Science`,
    label: "AI",
    explanation: "Generic, highly polished, and motivational phrasing makes this sound AI-written.",
  },
  {
    id: 4,
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
    explanation: "The wording is highly templated, but the inserted event details suggest human revision.",
  },
  {
    id: 5,
    context: "Cover letter for a research assistant position",
    text: `Dear Dr. Doe,

I am writing to express my interest in the Research Assistant position in your Computational Linguistics Laboratory, as advertised on the university careers portal. As a second-year graduate student in the Department of Linguistics with a concentration in Natural Language Processing, I believe my academic background and research experience align well with the requirements of this role.

During my time at the university, I have developed proficiency in Python, R, and various NLP frameworks including spaCy and Hugging Face Transformers. My current thesis research involves fine-tuning large language models for low-resource languages, which has given me hands-on experience with the methodologies employed in your laboratory.

I have attached my CV and a brief writing sample for your review. I am available to discuss my qualifications at your earliest convenience and would welcome the opportunity to contribute to your team's groundbreaking research.

Thank you for your consideration.

Sincerely,
Jill Smith`,
    label: "Edited by AI",
    explanation: "The structure is very polished and AI-like, but the concrete background details suggest human customization.",
  },

  {
    id: 6,
    context: "Student asking for lecture slides",
    text: `Dear Dr. Doe,

Could you please publish the slides for lecture 5?

Thank you,

John Smith`,
    label: "Human",
    explanation: "Short, direct, and slightly plain phrasing feels like a real student email rather than generated text.",
  },
  {
    id: 7,
    context: "Student asking about increasing an assignment grade",
    text: `Good afternoon Professor Doe,

I hope you are doing well. I would like to ask for your opinion on possibly increasing my grade for Assignment 1.

For question 5, I was marked down for not answering the last question, being "What kind of problems did you encounter?"

In that part of the assignment I didn't encounter any problems so instead I explained what problem I was able to avoid. Do you think this is a sufficient answer?

Thank you for your time and consideration,

Best Regards,

Joe Smith`,
    label: "Human",
    explanation: "The wording is specific and slightly awkward in a natural way, which is common in genuine student emails.",
  },
  {
    id: 8,
    context: "Student asking about a missing assignment grade",
    text: `Dear Jane,

Professor Doe mentioned that all the assignments should have been graded by now, however I do not see my grade for the latest assignment. Could you please let me know if our assignment was properly submitted and will receive a grade. Thank you.

Best Regards,

Joe Smith`,
    label: "Human",
    explanation: "The message is practical, specific, and not overly polished, which fits natural human writing.",
  },
  {
    id: 9,
    context: "Student expressing interest in becoming a teaching assistant",
    text: `Good evening Mr. Doe,
 
I am writing to express my interest in becoming a teaching assistant for next year's course.

Could you please provide me with information on when and where I should expect to apply for this position? I would like to know about any specific requirements or deadlines I should be aware of.

 
Thank you for your time.

Sincerely,

John Smith`,
    label: "Human",
    explanation: "Although formal, it has a realistic student tone and straightforward wording typical of a real inquiry.",
  },
  {
    id: 10,
    context: "Student asking whether a lecture recording will be shared",
    text: `Good afternoon,


I would like to know if the recording of tomorrow's lecture will be shared to students, and if so where?

Thank you, 

John Smith`,
    label: "Human",
    explanation: "Brief, functional, and slightly imperfect phrasing makes this feel naturally human.",
  },
  {
    id: 11,
    context: "Student requesting an extension for a group assignment",
    text: `Dear Professor John,

I wanted to ask if it would be possible to get an extension for assignment 2 since one of our group members informed us yesterday that he is not participating in the course anymore. There are only 2 people in our group now and it would be great if we can have more time to complete the assignment. We should be able to complete it before Thursday. Please let me know if this is possible, thanks in advance!

Kind regards,
Joe Smith`,
    label: "Human",
    explanation: "It contains concrete context, a plausible reason, and informal phrasing that feels authentic.",
  },
  {
    id: 12,
    context: "Student following up about an incorrect exam attendance record",
    text: `Dear Prof. Doe,

I am emailing to ask about the wrong grade input since the system shows that I was not present at the exam even though I was and have got a grade for it. I have emailed about this issue last week and haven’t got a response so I wanted to check up on this again. Please let me know if this issue will be resolved soon.

Kind regards,
John Smith`,
    label: "Human",
    explanation: "The wording is a bit clunky and repetitive in a realistic way, which strongly suggests human authorship.",
  },
  {
    id: 13,
    context: "Student notifying a teaching assistant about being sick",
    text: `Dear Jane,

Unfortunately I won’t be able to make it to class today because I am sick, sorry about that!

John Smith`,
    label: "Human",
    explanation: "Very brief and natural; the apology and simplicity feel genuinely human.",
  },
  {
    id: 14,
    context: "Student asking if a reader will be shared",
    text: `Dear Professor Scott,

I wanted to ask if the reader listed on canvas would be shared since it would be helpful to have other materials to study with other than the lecture slides. Please let me know.

Kind regards,
Joe Smith`,
    label: "Human",
    explanation: "The message has a realistic student concern and an unpolished but natural flow.",
  },
  {
    id: 15,
    context: "Student asking for a thesis project meeting",
    text: `Dear Jane,

My name is John and I am a 3rd year AI bachelor student. I am interested in doing the ‘Epistemic Logic in Fault Diagnosis’ for my thesis project since I’ve taken a Formal Logic course last December and would like to explore how it can be used in a practical setting in AI applications. Would it be possible to have a meeting to discuss more about the project? Please let me know.

Kind regards,
John Smith`,
    label: "Human",
    explanation: "Specific motivation and mildly awkward phrasing are strong indicators of a real human email.",
  },
  {
    id: 16,
    context: "Student declining a summer school exchange nomination",
    text: `Dear Jane,
Thank you so much for selecting me and for taking the time to reach out. I'm truly honored to have been nominated for the summer school exchange at a partner university abroad.
Unfortunately, due to personal reasons, I am unable to accept this spot at this time. I hope it can be offered to another deserving candidate.
I sincerely appreciate the opportunity and the work your team puts into these programs. I hope to explore other exchange opportunities in the future.
Kind regards,
John Doe`,
    label: "Human",
    explanation: "The tone is warm and personal, and the message feels like a genuine response to a real opportunity.",
  },
  {
    id: 17,
    context: "Student replying about a meeting invitation",
    text: `Hi John,
Thank you for letting me know! I’ll be waiting for your email and invitation for the meeting all together.
Best regards,
John Doe`,
    label: "Human",
    explanation: "Short, informal, and slightly awkward phrasing makes this read like a real person writing quickly.",
  },
  {
    id: 18,
    context: "Student asking how to register for an extra exam opportunity",
    text: `Dear John,
I would like to register for the extra examination opportunity for the your course. However, unlike my other course, the course registration page does not display a registration option for this one. Please let me know if there is anything I need to do to take part in the exam. Thank you for helping.
Best regards,
John Doe`,
    label: "Human",
    explanation: "The typo and straightforward explanation are strong signs of authentic human writing.",
  },
  {
    id: 19,
    context: "Student asking a professor to supervise a bachelor thesis topic",
    text: `Dear Prof. Doe,

I would like to do Bachelor Thesis research project about Automated Power Systems and Power Automation Algoritms. As it is a self-chosen topic, I do need to find a supervisor and I believe, based on your past researches, that you would be a great specialist in this topic!
If you had the availability, I would love to schedule a short indtroductory meeting, when I can present to you my specific topic, and hopefully convince you about my motivation behind starting the research in this topic.

Thank you very much in advance, and I am looking forward to hear back from you!

Kind regards,
John Smith`,
    label: "Human",
    explanation: "Typos and slightly unusual wording make this feel strongly human rather than machine-produced.",
  },
  {
    id: 20,
    context: "Student asking about a missing partial grade transfer",
    text: `Dear Prof. Smith,

At the beginning of the course I have requested a partial grade transfer, as I did this course last year, however we have just received the final subject gerade on vu.nl and I believe grades from my assignments were not taken into the consideration, as the final grade is lower than what I calculated. Without assignments taken into consideration I should have a grade 7.5, then as I had 9.5 from all assignments last year, the final course grade should be 8.5 then.
I think maybe the transfer was not registered, as I also cannot still see it on Canvas, probably that is why on vu.nl the grade is different. The grade transfer usually takes place in the end of the course, that is why I did not contact earlier than today, hopefully that still can be adjusted!

Looking forward to hearing back from you.

Kind regards,
John Doe`,
    label: "Human",
    explanation: "The email is detailed, slightly repetitive, and imperfectly phrased in a very human way.",
  },

  {
    id: 21,
    context: "Registrar announcing transcript processing times",
    text: `Dear Students,

Please be advised that official transcript requests submitted after March 15 will require up to ten business days for processing. This temporary adjustment reflects an increase in seasonal request volume and is intended to ensure accurate and timely fulfillment of all orders.

Students with urgent academic or professional deadlines are encouraged to indicate this in the request form so that appropriate consideration may be given where possible.

We appreciate your patience and understanding.

Sincerely,
Office of the Registrar`,
    label: "AI",
    explanation: "Highly polished institutional tone, generic wording, and formulaic structure are characteristic of AI text.",
  },
  {
    id: 22,
    context: "Library notifying students about extended exam-week hours",
    text: `Dear Students,

In support of final examination preparation, the university library will operate on extended hours beginning next Monday. During this period, the building will remain open until midnight from Monday through Friday and until 10:00 PM on weekends.

We encourage all students to make use of the designated quiet study areas, reservable group rooms, and on-site academic support services available throughout the week.

Best wishes for a productive study period.

Kind regards,
University Library Services`,
    label: "AI",
    explanation: "This reads like a polished generic announcement with no human quirks or personalization.",
  },
  {
    id: 23,
    context: "Professor reminding students about plagiarism policy",
    text: `Dear Class,

This message serves as a reminder that all submitted coursework must comply with the university's academic integrity policy. Any form of plagiarism, unauthorized collaboration, or misuse of external tools may result in disciplinary consequences.

Please ensure that your submissions accurately reflect your own work and that all external sources are cited appropriately. If you are uncertain about what constitutes acceptable use, I encourage you to consult the course handbook before submitting your assignment.

Best regards,
Professor Doe`,
    label: "AI",
    explanation: "The wording is formal, balanced, and impersonal in a way that strongly suggests AI generation.",
  },
  {
    id: 24,
    context: "Department announcing a workshop on academic writing",
    text: `Dear Students,

We are pleased to share that the department will be hosting a workshop on effective academic writing next Wednesday afternoon. The session will cover argument structure, citation practices, editing strategies, and common mistakes observed in student essays.

Attendance is optional but strongly recommended, particularly for those preparing major written assignments this semester.

Further details will be circulated shortly.

Sincerely,
Department Administration`,
    label: "AI",
    explanation: "The email uses smooth but generic institutional phrasing and lacks specific natural detail.",
  },
  {
    id: 25,
    context: "Course coordinator announcing a new discussion section",
    text: `Dear Students,

To provide additional support in advance of the midterm examination, an extra discussion section will be offered on Friday at 1:00 PM in Room B204. This session will include a review of core concepts, sample questions, and time for student questions.

Students are welcome to attend regardless of their assigned tutorial group.

Warm regards,
Course Coordination Team`,
    label: "AI",
    explanation: "The efficient, neatly structured language feels generated and not like a spontaneous human email.",
  },
  {
    id: 26,
    context: "IT services announcing scheduled maintenance",
    text: `Dear University Community,

Please note that scheduled maintenance will take place on the student portal this Saturday between 6:00 AM and 11:00 AM. During this period, some services may be temporarily unavailable, including course registration, timetable access, and grade viewing.

We apologize for any inconvenience this may cause and thank you for your understanding.

Best regards,
University IT Services`,
    label: "AI",
    explanation: "Generic service-announcement language and very clean structure are typical of AI-generated administrative text.",
  },
  {
    id: 27,
    context: "Student success office inviting students to a networking event",
    text: `Dear Students,

The Student Success Office is delighted to invite you to an upcoming networking evening designed to connect current students with alumni from a wide range of professional fields. This event offers an excellent opportunity to gain insight into career pathways, ask questions, and build meaningful connections.

Light refreshments will be provided, and business casual attire is encouraged.

We hope to see many of you there.

Sincerely,
Student Success Office`,
    label: "AI",
    explanation: "Polished promotional wording and broad generic phrasing are strong AI indicators.",
  },
  {
    id: 28,
    context: "Faculty office informing students about room changes",
    text: `Dear Students,

Please be informed that several classes scheduled in Building C next week have been reassigned to alternative rooms due to maintenance work. Updated room allocations will be visible on the course timetable system by the end of the day.

Students are encouraged to verify their room locations before attending class to avoid confusion.

Thank you for your cooperation.

Faculty Office`,
    label: "AI",
    explanation: "This sounds like standard generated admin copy: concise, formal, and impersonal.",
  },

  {
    id: 29,
    context: "Professor commenting on a revised project proposal",
    text: `Dear John,

Thank you for sending the revised version of your proposal. The overall direction is much clearer now, and your research question is significantly better defined than in the earlier draft.

There are still a few points that would benefit from improvement. In particular, I recommend clarifying how you intend to evaluate the success of your method and tightening the final paragraph so that the contribution is easier to identify.

Once those changes are made, I believe the proposal will be in strong shape for submission.

Best regards,
Dr. Smith`,
    label: "Edited by AI",
    explanation: "The structure is very polished and balanced, but the comments are specific enough to suggest human editing.",
  },
  {
    id: 30,
    context: "Supervisor replying to a request for a thesis meeting",
    text: `Dear John,

Thank you for your message and for your interest in the thesis topic. Your background in formal logic sounds relevant, and I agree that the project could offer an interesting practical angle within AI.

I would be happy to schedule a short meeting to discuss the project further and hear more about your ideas. Please send me a few time slots that work for you next week, and I will do my best to accommodate one of them.

Kind regards,
Jane Doe`,
    label: "Edited by AI",
    explanation: "Smooth phrasing and clean organization suggest AI scaffolding, while the personalized response points to human revision.",
  },
  {
    id: 31,
    context: "Course staff replying about a registration issue",
    text: `Dear John,

Thank you for reaching out. I have checked the course registration system, and it appears that the extra examination option has not yet been made visible for all students.

This should be updated shortly. If the option still does not appear by tomorrow afternoon, please send me another message and I will look into it further on your behalf.

Best regards,
Course Administration`,
    label: "Edited by AI",
    explanation: "The email is very clean and template-like, but includes a realistic specific action and follow-up.",
  },
  {
    id: 32,
    context: "Academic coordinator responding to a missed grade",
    text: `Dear Joe,

Thank you for your email. I understand your concern regarding the missing grade for the latest assignment.

I will verify whether the submission was properly received in the system and check with the grading team if there has been a delay. You should receive an update as soon as I have more information.

Kind regards,
Jane Doe`,
    label: "Edited by AI",
    explanation: "The tidy structure feels AI-assisted, but the specific issue being addressed suggests human intervention.",
  },
  {
    id: 33,
    context: "Professor replying to an extension request for a group assignment",
    text: `Dear Joe,

Thank you for explaining the situation. I understand that the withdrawal of one group member has created additional pressure on the remaining members of your group.

In this case, I am willing to grant a short extension until Thursday, provided that the final submission reflects a complete and coordinated effort from both remaining group members. Please keep me informed if any additional complications arise.

Best regards,
Professor John`,
    label: "Edited by AI",
    explanation: "The response is polished and structured, but it includes contextual judgment that suggests a human-edited draft.",
  },
  {
    id: 34,
    context: "Department staff replying about lecture recordings",
    text: `Dear John,

Thank you for your message. Yes, the recording of tomorrow's lecture will be made available to students after the session.

It will be uploaded to the course Canvas page under the lecture materials section. Please note that processing may take a little time, so it may not appear immediately after class has ended.

Best regards,
Department Assistant`,
    label: "Edited by AI",
    explanation: "Very polished and efficient wording suggests AI help, while the practical detail about upload timing feels human-added.",
  },
  {
    id: 35,
    context: "Professor responding about grade inspection",
    text: `Dear John,

Thank you for your email. If you believe there may be an issue with the grading, you are welcome to request access to review your exam.

Although no general inspection announcement has been circulated, individual review requests can still be considered. Please send me your student number and availability, and we can determine the most suitable next step.

Kind regards,
Prof. Doe`,
    label: "Edited by AI",
    explanation: "The message is clean and composed like AI-generated text, but the procedural specifics suggest human editing.",
  },
];
