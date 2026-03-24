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
    context: "Change to Office Hours (New Schedule)",
    text: `Dear Students,

I am writing to inform you that my office hours for the remainder of this semester will be adjusted. Effective immediately, my office hours will transition from Tuesdays and Thursdays, 2:00 PM to 4:00 PM, to Mondays and Wednesdays, 3:00 PM to 5:00 PM.

This change is being implemented to better accommodate the schedules of the majority of students enrolled in the course. Should you require assistance outside of these newly established hours, please do not hesitate to reach out via email to schedule an individual appointment.

I appreciate your understanding and flexibility regarding this matter.

Sincerely,
Jane Doe, Teaching Assistant`,
    label: "AI",
    explanation: "It sounds too formal and stiff. Phrases like “I am writing to inform you” and “do not hesitate” are dead giveaways for AI.",
  },
  {
    id: 2,
    context: "Feedback on Your Essay Draft + Revisions Needed",
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
    explanation: "The clean, polished structure feels like AI wrote it, but the specific comments look like they were added by a person.",
  },
  {
    id: 3,
    context: "Welcome to CS + Orientation Info (Sept 5)",
    text: `Dear Incoming Students,

On behalf of the Department of Computer Science, I would like to extend a warm welcome to all of you as you embark on this exciting academic journey. The coming years will present you with numerous opportunities for intellectual growth, professional development, and personal enrichment.

As your academic advisor, I am here to support you in navigating your curriculum, selecting appropriate courses, and exploring research opportunities. I strongly encourage you to take advantage of the resources available to you, including tutoring services, career counseling, and student organisations.

Please find attached the orientation schedule and a comprehensive guide to departmental resources. I look forward to meeting each of you during the orientation session on September 5th.

Warm regards,
Dr. Jill Smith
Academic Advisor, Department of Computer Science`,
    label: "AI",
    explanation: "It feels generic, overly polished, and a bit too motivational. That kind of tone often points to AI writing.",
  },
  {
    id: 4,
    context: "Guest Lecture: The Moral Machine (Nov 14)",
    text: `Dear Members of the University Community,

We are pleased to announce an upcoming guest lecture that promises to be both enlightening and thought-provoking. Dr. Jane Doe, a distinguished researcher in the field of artificial intelligence ethics, will be delivering a lecture entitled "The Moral Machine: Navigating Ethical Dilemmas in AI Development."

Event Details:
- Date: Thursday, November 14, 2024
- Time: 4:00 PM - 5:30 PM
- Location: Harrison Auditorium, Room 201
- Reception to follow in the Faculty Lounge

Dr. Doe's research has been published in numerous prestigious journals and has been recognised with several international awards. Her work focuses on the intersection of technology, philosophy, and public policy.

This event is free and open to all students, faculty, and staff. No registration is required.

We look forward to your attendance.

Best regards,
The Department of Philosophy and Ethics`,
    label: "Edited by AI",
    explanation: "The wording follows a clear template, but the added event details make it look like a person went in and tweaked it.",
  },
  {
    id: 5,
    context: "Application for Research Assistant Position",
    text: `Dear Dr. Doe,

I am writing to express my interest in the Research Assistant position in your Computational Linguistics Laboratory, as advertised on the university careers portal. As a second-year graduate student in the Department of Linguistics with a concentration in Natural Language Processing, I believe my academic background and research experience align well with the requirements of this role.

During my time at the university, I have developed proficiency in Python, R, and various NLP frameworks including spaCy and Hugging Face Transformers. My current thesis research involves fine-tuning large language models for low-resource languages, which has given me hands-on experience with the methodologies employed in your laboratory.

I have attached my CV and a brief writing sample for your review. I am available to discuss my qualifications at your earliest convenience and would welcome the opportunity to contribute to your team's groundbreaking research.

Thank you for your consideration.

Sincerely,
Jill Smith`,
    label: "Edited by AI",
    explanation: "The wording follows a clear template, but the added event details make it look like a person went in and tweaked it.",
  },

  {
    id: 6,
    context: "Lecture 5 Slides Not Posted Yet",
    text: `Dear Dr. Doe,

Could you please publish the slides for lecture 5?

Thank you,

John Smith`,
    label: "Human",
    explanation: "It's short, direct, and a bit plain, which makes it sound like a real student email, not something generated.",
  },
  {
    id: 7,
    context: "Question About My Grade (Assignment 1, Q5)",
    text: `Good afternoon Professor Doe,

I hope you are doing well. I would like to ask for your opinion on possibly increasing my grade for Assignment 1.

For question 5, I was marked down for not answering the last question, being "What kind of problems did you encounter?"

In that part of the assignment I didn't encounter any problems so instead I explained what problem I was able to avoid. Do you think this is a sufficient answer?

Thank you for your time and consideration,

Best Regards,

Joe Smith`,
    label: "Human",
    explanation: "The wording is specific and a bit awkward in a natural way, which is typical for real student emails.",
  },
  {
    id: 8,
    context: "Missing Grade for Recent Assignment",
    text: `Dear Jane,

Professor Doe mentioned that all the assignments should have been graded by now, however I do not see my grade for the latest assignment. Could you please let me know if our assignment was properly submitted and will receive a grade. Thank you.

Best Regards,

Joe Smith`,
    label: "Human",
    explanation: "The message is practical and specific, and it's not too polished, which makes it feel like natural human writing.",
  },
  {
    id: 9,
    context: "Question About TA Application for Next Year",
    text: `Good evening Mr. Doe,
 
I am writing to express my interest in becoming a teaching assistant for next year's course.

Could you please provide me with information on when and where I should expect to apply for this position? I would like to know about any specific requirements or deadlines I should be aware of.

 
Thank you for your time.

Sincerely,

John Smith`,
    label: "Human",
    explanation: "It's formal, but still sounds like a real student. The wording is simple and direct, like a genuine question.",
  },
  {
    id: 10,
    context: "Will Tomorrow’s Lecture Be Recorded?",
    text: `Good afternoon,


I would like to know if the recording of tomorrow's lecture will be shared to students, and if so where?

Thank you, 

John Smith`,
    label: "Human",
    explanation: "It's brief, practical, and a bit imperfect, which makes it feel like something a real person wrote.",
  },
  {
    id: 11,
    context: "Request for Extension (Group Member Dropped Course)",
    text: `Dear Professor John,

I wanted to ask if it would be possible to get an extension for assignment 2 since one of our group members informed us yesterday that he is not participating in the course anymore. There are only 2 people in our group now and it would be great if we can have more time to complete the assignment. We should be able to complete it before Thursday. Please let me know if this is possible, thanks in advance!

Kind regards,
Joe Smith`,
    label: "Human",
    explanation: "It includes clear details, a believable reason, and slightly informal wording that feels real.",
  },
  {
    id: 12,
    context: "Follow-Up: Incorrect Exam Attendance / Grade",
    text: `Dear Prof. Doe,

I am emailing to ask about the wrong grade input since the system shows that I was not present at the exam even though I was and have got a grade for it. I have emailed about this issue last week and haven't got a response so I wanted to check up on this again. Please let me know if this issue will be resolved soon.

Kind regards,
John Smith`,
    label: "Human",
    explanation: "The wording is a bit clunky and repeats itself in a natural way, which makes it feel human-written.",
  },
  {
    id: 13,
    context: "Absent Today Due to Illness",
    text: `Dear Jane,

Unfortunately I won't be able to make it to class today because I am sick, sorry about that!

John Smith`,
    label: "Human",
    explanation: "It's very short and natural. The simple apology makes it feel real.",
  },
  {
    id: 14,
    context: "Will the Course Reader Be Shared?",
    text: `Dear Professor Scott,

I wanted to ask if the reader listed on canvas would be shared since it would be helpful to have other materials to study with other than the lecture slides. Please let me know.

Kind regards,
Joe Smith`,
    label: "Human",
    explanation: "It shows a real student concern, and the flow is a bit rough but natural.",
  },
  {
    id: 15,
    context: "Request to Discuss Thesis Topic",
    text: `Dear Jane,

My name is John and I am a 3rd year AI bachelor student. I am interested in doing the ‘Epistemic Logic in Fault Diagnosis' for my thesis project since I've taken a Formal Logic course last December and would like to explore how it can be used in a practical setting in AI applications. Would it be possible to have a meeting to discuss more about the project? Please let me know.

Kind regards,
John Smith`,
    label: "Human",
    explanation: "The reason is clear, and the wording is a bit awkward in a natural way, which makes it feel like a real person wrote it.",
  },
  {
    id: 16,
    context: "Regarding Summer School Exchange Nomination",
    text: `Dear Jane,
Thank you so much for selecting me and for taking the time to reach out. I'm truly honored to have been nominated for the summer school exchange at a partner university abroad.
Unfortunately, due to personal reasons, I am unable to accept this spot at this time. I hope it can be offered to another deserving candidate.
I sincerely appreciate the opportunity and the work your team puts into these programs. I hope to explore other exchange opportunities in the future.
Kind regards,
John Doe`,
    label: "Human",
    explanation: "The tone is warm and personal, and it feels like a real reply to an actual opportunity.",
  },
  {
    id: 17,
    context: "Re: Meeting Invitation",
    text: `Hi John,
Thank you for letting me know! I'll be waiting for your email and invitation for the meeting all together.
Best regards,
John Doe`,
    label: "Human",
    explanation: "It's short, informal, and a bit awkward, like someone writing quickly.",
  },
  {
    id: 18,
    context: "How to Register for Extra Exam Opportunity?",
    text: `Dear John,
I would like to register for the extra examination opportunity for the your course. However, unlike my other course, the course registration page does not display a registration option for this one. Please let me know if there is anything I need to do to take part in the exam. Thank you for helping.
Best regards,
John Doe`,
    label: "Human",
    explanation: "The typo and the simple explanation make it feel like real human writing.",
  },
  {
    id: 19,
    context: "Request for Thesis Supervision (Power Systems Topic)",
    text: `Dear Prof. Doe,

I would like to do Bachelor Thesis research project about Automated Power Systems and Power Automation Algoritms. As it is a self-chosen topic, I do need to find a supervisor and I believe, based on your past researches, that you would be a great specialist in this topic!
If you had the availability, I would love to schedule a short indtroductory meeting, when I can present to you my specific topic, and hopefully convince you about my motivation behind starting the research in this topic.

Thank you very much in advance, and I am looking forward to hear back from you!

Kind regards,
John Smith`,
    label: "Human",
    explanation: "The typos and slightly odd wording make it feel very human, not machine-made.",
  },
  {
    id: 20,
    context: "Issue with Grade Transfer from Previous Year",
    text: `Dear Prof. Smith,

At the beginning of the course I have requested a partial grade transfer, as I did this course last year, however we have just received the final subject gerade on vu.nl and I believe grades from my assignments were not taken into the consideration, as the final grade is lower than what I calculated. Without assignments taken into consideration I should have a grade 7.5, then as I had 9.5 from all assignments last year, the final course grade should be 8.5 then.
I think maybe the transfer was not registered, as I also cannot still see it on Canvas, probably that is why on vu.nl the grade is different. The grade transfer usually takes place in the end of the course, that is why I did not contact earlier than today, hopefully that still can be adjusted!

Looking forward to hearing back from you.

Kind regards,
John Doe`,
    label: "Human",
    explanation: "The email has clear detail, repeats a bit, and isn't perfectly phrased, which makes it feel very human.",
  },

  {
    id: 21,
    context: "Transcript Requests: Processing Delay Notice",
    text: `Dear Students,

Please be advised that official transcript requests submitted after March 15 will require up to ten business days for processing. This temporary adjustment reflects an increase in seasonal request volume and is intended to ensure accurate and timely fulfillment of all orders.

Students with urgent academic or professional deadlines are encouraged to indicate this in the request form so that appropriate consideration may be given where possible.

We appreciate your patience and understanding.

Sincerely,
Office of the Registrar`,
    label: "AI",
    explanation: "It has a polished, corporate tone. The wording is generic, and the structure feels formulaic. That's typical of AI writing.",
  },
  {
    id: 22,
    context: "Library Hours Extended During Exams",
    text: `Dear Students,

In support of final examination preparation, the university library will operate on extended hours beginning next Monday. During this period, the building will remain open until midnight from Monday through Friday and until 10:00 PM on weekends.

We encourage all students to make use of the designated quiet study areas, reservable group rooms, and on-site academic support services available throughout the week.

Best wishes for a productive study period.

Kind regards,
University Library Services`,
    label: "AI",
    explanation: "It sounds like a polished, generic announcement. There's no personal touch or human quirks, which makes it feel AI-written.",
  },
  {
    id: 23,
    context: "Reminder: Academic Integrity Policy",
    text: `Dear Class,

This message serves as a reminder that all submitted coursework must comply with the university's academic integrity policy. Any form of plagiarism, unauthorised collaboration, or misuse of external tools may result in disciplinary consequences.

Please ensure that your submissions accurately reflect your own work and that all external sources are cited appropriately. If you are uncertain about what constitutes acceptable use, I encourage you to consult the course handbook before submitting your assignment.

Best regards,
Professor Doe`,
    label: "AI",
    explanation: "The wording is very formal and neutral. It feels impersonal, which makes it seem AI-generated.",
  },
  {
    id: 24,
    context: "Academic Writing Workshop (Next Wednesday)",
    text: `Dear Students,

We are pleased to share that the department will be hosting a workshop on effective academic writing next Wednesday afternoon. The session will cover argument structure, citation practices, editing strategies, and common mistakes observed in student essays.

Attendance is optional but strongly recommended, particularly for those preparing major written assignments this semester.

Further details will be circulated shortly.

Sincerely,
Department Administration`,
    label: "AI",
    explanation: "The phrasing is smooth but generic, and it misses real, specific details. That's a common AI tell.",
  },
  {
    id: 25,
    context: "Extra Discussion Session Before Midterm",
    text: `Dear Students,

To provide additional support in advance of the midterm examination, an extra discussion section will be offered on Friday at 1:00 PM in Room B204. This session will include a review of core concepts, sample questions, and time for student questions.

Students are welcome to attend regardless of their assigned tutorial group.

Warm regards,
Course Coordination Team`,
    label: "AI",
    explanation: "It's very tidy and structured. It doesn't feel like something someone would write off the cuff, which makes it seem AI-generated.",
  },
  {
    id: 26,
    context: "Scheduled Maintenance: Student Portal (Saturday)",
    text: `Dear University Community,

Please note that scheduled maintenance will take place on the student portal this Saturday between 6:00 AM and 11:00 AM. During this period, some services may be temporarily unavailable, including course registration, timetable access, and grade viewing.

We apologise for any inconvenience this may cause and thank you for your understanding.

Best regards,
University IT Services`,
    label: "AI",
    explanation: "It uses generic service-style wording, and the structure is very clean. That's typical of AI-generated admin emails.",
  },
  {
    id: 27,
    context: "Invitation: Student-Alumni Networking Event",
    text: `Dear Students,

The Student Success Office is delighted to invite you to an upcoming networking evening designed to connect current students with alumni from a wide range of professional fields. This event offers an excellent opportunity to gain insight into career pathways, ask questions, and build meaningful connections.

Light refreshments will be provided, and business casual attire is encouraged.

We hope to see many of you there.

Sincerely,
Student Success Office`,
    label: "AI",
    explanation: "It uses polished, promotional language and broad, generic phrasing. Those are strong signs it was written by AI.",
  },
  {
    id: 28,
    context: "Room Changes for Classes Next Week",
    text: `Dear Students,

Please be informed that several classes scheduled in Building C next week have been reassigned to alternative rooms due to maintenance work. Updated room allocations will be visible on the course timetable system by the end of the day.

Students are encouraged to verify their room locations before attending class to avoid confusion.

Thank you for your cooperation.

Faculty Office`,
    label: "AI",
    explanation: "It sounds like standard admin copy. It's concise, formal, and impersonal, which makes it feel AI-generated.",
  },

  {
    id: 29,
    context: "Feedback on Revised Proposal",
    text: `Dear John,

Thank you for sending the revised version of your proposal. The overall direction is much clearer now, and your research question is significantly better defined than in the earlier draft.

There are still a few points that would benefit from improvement. In particular, I recommend clarifying how you intend to evaluate the success of your method and tightening the final paragraph so that the contribution is easier to identify.

Once those changes are made, I believe the proposal will be in strong shape for submission.

Best regards,
Dr. Smith`,
    label: "Edited by AI",
    explanation: "The structure is very polished and feels AI-written, but the specific background details make it clear someone went in and customised it.",
  },
  {
    id: 30,
    context: "Re: Thesis Topic Meeting",
    text: `Dear John,

Thank you for your message and for your interest in the thesis topic. Your background in formal logic sounds relevant, and I agree that the project could offer an interesting practical angle within AI.

I would be happy to schedule a short meeting to discuss the project further and hear more about your ideas. Please send me a few time slots that work for you next week, and I will do my best to accommodate one of them.

Kind regards,
Jane Doe`,
    label: "Edited by AI",
    explanation: "The smooth wording and clean structure feel AI-built, but the personalised response shows someone went in and edited it.",
  },
  {
    id: 31,
    context: "Re: Issue with Exam Registration",
    text: `Dear John,

Thank you for reaching out. I have checked the course registration system, and it appears that the extra examination option has not yet been made visible for all students.

This should be updated shortly. If the option still does not appear by tomorrow afternoon, please send me another message and I will look into it further on your behalf.

Best regards,
Course Administration`,
    label: "Edited by AI",
    explanation: "The email is very clean and feels like a template, but the specific action and follow-up make it seem like a person stepped in and adjusted it.",
  },
  {
    id: 32,
    context: "Re: Missing Assignment Grade",
    text: `Dear Joe,

Thank you for your email. I understand your concern regarding the missing grade for the latest assignment.

I will verify whether the submission was properly received in the system and check with the grading team if there has been a delay. You should receive an update as soon as I have more information.

Kind regards,
Jane Doe`,
    label: "Edited by AI",
    explanation: "The tidy structure feels AI-assisted, but the specific issue being addressed makes it clear a person stepped in.",
  },
  {
    id: 33,
    context: "Re: Extension Request for Group Assignment",
    text: `Dear Joe,

Thank you for explaining the situation. I understand that the withdrawal of one group member has created additional pressure on the remaining members of your group.

In this case, I am willing to grant a short extension until Thursday, provided that the final submission reflects a complete and coordinated effort from both remaining group members. Please keep me informed if any additional complications arise.

Best regards,
Professor John`,
    label: "Edited by AI",
    explanation: "The smooth wording and clean structure feel AI-built, but the personalised response shows someone went in and edited it.",
  },
  {
    id: 34,
    context: "Re: Lecture Recording Availability",
    text: `Dear John,

Thank you for your message. Yes, the recording of tomorrow's lecture will be made available to students after the session.

It will be uploaded to the course Canvas page under the lecture materials section. Please note that processing may take a little time, so it may not appear immediately after class has ended.

Best regards,
Department Assistant`,
    label: "Edited by AI",
    explanation: "The smooth wording and clean structure feel AI-built, but the personalised response shows someone went in and edited it.",
  },
  {
    id: 35,
    context: "Re: Request to Review Exam Grade",
    text: `Dear John,

Thank you for your email. If you believe there may be an issue with the grading, you are welcome to request access to review your exam.

Although no general inspection announcement has been circulated, individual review requests can still be considered. Please send me your student number and availability, and we can determine the most suitable next step.

Kind regards,
Prof. Doe`,
    label: "Edited by AI",
    explanation: "The smooth wording and clean structure feel AI-built, but the personalised response shows someone went in and edited it.",
  },
];
