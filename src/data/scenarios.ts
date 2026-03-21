export interface ScenarioOption {
  id: string;
  label: string;
  description: string;
}

export interface ScenarioOutcome {
  optionId: string;
  title: string;
  description: string;
  consequence: string;
  ethicalReflection: string;
}

export interface Scenario {
  id: number;
  title: string;
  description: string;
  excerpt: string;
  options: ScenarioOption[];
  outcomes: ScenarioOutcome[];
}

export const scenarios: Scenario[] = [
{
  id: 1,
  title: "The Suspicious Essay",
  description:
    "Professor Martinez reads a paper from Alex, a student who usually does average work. This one stands out right away. The writing is clearer, better structured, and uses more advanced language than before. It doesn’t quite match Alex’s past work. But Alex has also been attending extra tutoring sessions this semester, so there may be a simple explanation.",
  excerpt: `"The implications of quantum computing for modern cryptographic systems mark a major shift in how we think about digital security. As Shor's algorithm shows, the assumptions behind RSA encryption no longer hold in a post-quantum world..."`,
  options: [
    { id: "flag", label: "Flag as AI-generated", description: "Report the student for academic misconduct" },
    { id: "allow", label: "Accept the submission", description: "Grade the paper on its merits" },
    {
      id: "clarify",
      label: "Ask for clarification",
      description: "Meet with the student to talk through their writing process",
    },
  ],
  outcomes: [
    {
      optionId: "flag",
      title: "Wrongful Accusation",
      description:
        "Alex is called before the academic integrity board. After a review, it becomes clear that Alex had been working with a tutor and had genuinely improved. The accusation causes stress and harms the relationship with the professor.",
      consequence:
        "Alex loses trust in the system and becomes anxious about submitting future work, even holding back their improved writing.",
      ethicalReflection:
        "From a Value Sensitive Design perspective, the professor should first identify the relevant stakeholders and values: academic integrity, fairness, trust, and student development. A sudden improvement is not itself proof of misconduct. The key issue is whether suspicion turns into unfair discrimination or a false positive. Duty ethics also matters here: educators have a duty not to accuse students without sufficient grounds. So the real question is what a justified and contestable norm for AI suspicion should look like, and how to avoid a system that punishes genuine learning because it treats deviation from past performance as a red flag.",
    },
    {
      optionId: "allow",
      title: "Benefit of the Doubt",
      description:
        "The paper is graded as usual and receives a high mark. Alex feels rewarded for the effort put into improving. At the same time, other students who used AI go unnoticed.",
      consequence:
        "This is fair to Alex, but it may create an uneven playing field if AI use is common and not consistently addressed.",
      ethicalReflection:
        "This option protects Alex from wrongful harm, but it raises a broader value conflict between fairness to this student and fairness across the whole class. In the lecture terms, the issue is not just individual judgment but the lack of a SMART guideline for acceptable AI assistance. Without clear norms, enforcement becomes inconsistent, and similar cases will be treated differently. A consequentialist might accept some missed violations to avoid harmful false accusations, while a duty-based view would stress equal treatment under known rules. The deeper design question is whether the institution has translated the value of academic integrity into actionable, transparent, and contestable policy.",
    },
    {
      optionId: "clarify",
      title: "Open Conversation",
      description:
        "In the meeting, Alex explains their research process, shows drafts and notes, and talks about how tutoring helped. Professor Martinez feels confident the work is original and gives helpful feedback.",
      consequence:
        "The conversation builds trust, but it takes time and may not be practical with large classes.",
      ethicalReflection:
        "This is strongest in terms of accountability because it improves both transparency and contestability. The student is given a chance to explain the process, challenge suspicion, and provide understandable reasons for the final judgment. It also reflects care ethics, since it treats the student as a person in a relationship of trust rather than as a risk score. But the scalability problem remains real. The lecture point is that values are only the beginning: they must be turned into design requirements. So the next step would be to create SMART norms, such as requiring process evidence or disclosure in specific cases, instead of relying on ad hoc suspicion alone.",
    },
  ],
},
{
  id: 2,
  title: "The AI Cover Letter",
  description:
    "A university career counselor reviews applications for a competitive internship. One candidate, Sam, submits a cover letter that stands out right away. It’s polished, well-structured, and has no errors. The counselor suspects AI help but has no proof. Sam comes from a disadvantaged background, and English is their second language.",
  excerpt: `"I am well positioned to contribute to your organization's work in sustainable technology. My background in environmental science and data analytics, along with my interest in evidence-based policy, helps me connect research with real-world solutions..."`,
  options: [
    { id: "reject", label: "Reject the application", description: "Disqualify for suspected AI use" },
    { id: "accept", label: "Evaluate normally", description: "Judge the application on its content" },
    { id: "interview", label: "Add an interview round", description: "Assess the candidate’s abilities in person" },
  ],
  outcomes: [
    {
      optionId: "reject",
      title: "Opportunity Denied",
      description:
        "Sam is rejected and never told why. The internship goes to a native English speaker with a similar application. In reality, Sam had used Grammarly and help from a university writing center. They miss out on an opportunity that could have changed their path.",
      consequence:
        "The decision hits a student from a disadvantaged background the hardest, and adds to existing inequalities.",
      ethicalReflection:
        "This is a clear non-discrimination problem. The lectures stress that bias becomes ethically serious when it leads to systematic disadvantage for certain groups. Here, polished writing is treated as suspicious in a way that may disproportionately burden non-native speakers and students who depend on support tools. The counselor may believe they are detecting misconduct, but in practice they risk scaling existing social inequalities. From a duty-based perspective, there is also a problem of procedural fairness: Sam is denied equal consideration without explanation or an opportunity to contest the judgment. The key question is whether the institution is mistaking difference in expression for evidence of cheating, and whether its norm is producing unfair bias.",
    },
    {
      optionId: "accept",
      title: "Equal Consideration",
      description:
        "Sam’s application is judged on its content and they get an interview. During the interview, Sam shows strong knowledge and real interest, which supports that the work is their own.",
      consequence:
        "Sam gets the internship and does well. Still, the counselor wonders if they would feel the same if Sam had struggled in the interview.",
      ethicalReflection:
        "This option treats the output as the primary object of evaluation, which supports equal access, but it leaves open the unresolved value conflict between authenticity and assistance. The course repeatedly shows that technology is not value-neutral, and writing tools embed implicit values about fluency, professionalism, and efficiency. So the ethical question is not simply whether AI was used, but what kind of assistance counts as acceptable in this context. If AI support helps level the playing field for disadvantaged applicants, that may promote fairness rather than undermine it. The real need is for a justified norm that distinguishes support, authorship, and deception in a way that can be applied consistently.",
    },
    {
      optionId: "interview",
      title: "Additional Scrutiny",
      description:
        "An extra interview round is added just for Sam. Other candidates are not asked to do the same. Sam does well but feels singled out and wonders if bias played a role.",
      consequence:
        "The result is positive, but the extra step wasn’t applied equally and may reflect unconscious bias.",
      ethicalReflection:
        "This looks reasonable on the surface, but it raises a fairness problem because the burden of proof is not distributed equally. In lecture terms, the system becomes contestable for Sam, but only because Sam is singled out. That creates a new value conflict between verification and equal treatment. A care-ethical approach would ask how this affects the social relationship and whether the candidate is made to feel distrusted or stigmatized. A VSD approach would ask whether the rule is grounded in stakeholder values and whether it could be turned into a general SMART guideline. If only some people get extra scrutiny, caution can slide into discrimination.",
    },
  ],
},
{
  id: 3,
  title: "The Group Project Dilemma",
  description:
    "In a software engineering group project, Riley has been submitting code that stands out. It’s clean, well-structured, and clearly documented. Another teammate, Casey, realizes Riley has been using GitHub Copilot a lot. The project guidelines don’t say anything about AI tools. The deadline is tomorrow.",
  excerpt: `// Riley's code submission
async function optimizeQueryExecution(queries: Query[]): Promise<Result[]> {
  const priorityQueue = new PriorityQueue<Query>((a, b) => a.complexity - b.complexity);
  queries.forEach(q => priorityQueue.enqueue(q));
  
  const results: Result[] = [];
  const connectionPool = await DatabasePool.initialize(CONFIG.maxConnections);
  // ... well-structured implementation continues
}`,
  options: [
    { id: "report", label: "Report to professor", description: "Flag Riley’s use of AI tools" },
    { id: "ignore", label: "Let it go", description: "Focus on finishing the project" },
    { id: "discuss", label: "Talk to Riley", description: "Have an open conversation about tool use" },
  ],
  outcomes: [
    {
      optionId: "report",
      title: "Group Consequences",
      description:
        "The professor looks into it and finds the rules around AI tools are unclear. Instead of singling out Riley, the whole group’s work is reviewed. The team dynamic breaks down, and the project suffers.",
      consequence:
        "Reporting it right away hurts the whole group and doesn’t fix the unclear policy.",
      ethicalReflection:
        "The core problem here is not only Riley’s conduct but the absence of a clear norm. The lectures stress that guidelines are only useful when they are grounded in stakeholder values and are actionable. Here, the institution failed to turn abstract concerns about authorship and fairness into SMART rules. That creates an accountability problem, because students cannot reasonably know what standard they are being held to. In terms from the Artificial Minds lectures, this also risks an achievement gap: who deserves credit for strong code when human work and AI assistance are mixed? Reporting may be defensible, but without prior norms it mainly exposes a governance failure.",
    },
    {
      optionId: "ignore",
      title: "Unaddressed Tension",
      description:
        "The group submits a strong project on time. But Casey feels frustrated, thinking the workload wasn’t fair. In peer reviews, Casey gives Riley a low score and mentions 'unequal contribution' without bringing up AI.",
      consequence:
        "Avoiding the issue doesn’t solve it. It just shows up in other ways.",
      ethicalReflection:
        "Silence does not make the value conflict disappear. It simply pushes it into informal judgments, resentment, and opaque peer evaluation. That is ethically risky because the group loses transparency about what happened and accountability for how credit is assigned. The question is not just whether Copilot was used, but whether the use was understood, reviewed, and integrated responsibly. If Riley used AI as a tool but still exercised knowledge and control over the code, that matters for responsibility. If not, the fairness concern is stronger. The lecture point is that hidden norms produce bad outcomes, because people still enforce standards, just unofficially and inconsistently.",
    },
    {
      optionId: "discuss",
      title: "Transparent Dialogue",
      description:
        "Riley explains they used Copilot as a starting point but reviewed and understood everything. The team agrees to note their tool use in the README and asks the professor for clear guidance.",
      consequence:
        "The discussion leads the professor to update the course rules with clear guidelines for future students.",
      ethicalReflection:
        "This response best matches the course emphasis on transparency, accountability, and turning values into design. Disclosure in the README increases transparency about process, while team discussion makes the work more contestable and easier to justify. It also lets the group assess the relevant accountability conditions: did Riley know what the code did, have control over it, and competently review it? If yes, AI use looks more like assisted authorship than pure outsourcing. The remaining issue is institutional: students should not have to invent the rules on their own. The professor should translate values like fairness, learning, and responsibility into SMART guidelines for future projects.",
    },
  ],
},
{
  id: 4,
  title: "The Accessibility Argument",
  description:
    "Morgan, a student with dyslexia, uses AI writing tools to organize ideas and fix grammar in essays. A classmate reports Morgan, saying this gives an unfair advantage. Morgan argues the AI is just an accessibility tool, not cheating.",
  excerpt: `Morgan's original notes: "reneable enrgy importnt for fture. solar wind good but cost high. govrmnt need invest more. developing cntries need help too."

Morgan's submitted paragraph: "Renewable energy is a key investment in our shared future. Solar and wind show strong potential, but high upfront costs remain a barrier, especially for developing countries that could benefit the most from clean energy."`,
  options: [
    { id: "uphold", label: "Uphold the complaint", description: "The AI changed the work too much" },
    { id: "dismiss", label: "Dismiss the complaint", description: "AI as an accessibility tool is valid" },
    {
      id: "accommodate",
      label: "Create accommodation policy",
      description: "Set clear rules for AI as assistive technology",
    },
  ],
  outcomes: [
    {
      optionId: "uphold",
      title: "Accessibility Denied",
      description:
        "Morgan is found in violation of academic integrity. They appeal, arguing the AI plays a similar role to speech-to-text or a human scribe. The case exposes how disability support hasn’t kept up with new technology.",
      consequence:
        "Morgan’s record is affected, and they stop using the tool that helped them express their ideas clearly.",
      ethicalReflection:
        "This treats formal sameness as fairness, but the lectures show that what is fair is not always obvious. A system can appear neutral while still producing discrimination when it ignores relevant differences in people’s situations. If AI assistance functions here as an accessibility measure, banning it may create systematic disadvantage rather than equal treatment. From a rights-and-duties perspective, the institution has duties not only to protect integrity but also to provide fair access. The central ethical question is where authorship ends and support begins, and whether the university is applying a norm that protects learning or one that silently excludes disabled students.",
    },
    {
      optionId: "dismiss",
      title: "Precedent Set",
      description:
        "The complaint is dismissed, which sets an informal precedent. Other students start claiming AI use as an accessibility need, making rules harder to enforce. The disability services office sees a surge in requests.",
      consequence:
        "Morgan is protected, but the decision makes it harder to tell the difference between real accommodations and general AI use.",
      ethicalReflection:
        "This protects Morgan in the short term, but it leaves the value conflict unresolved. The lectures warn that abstract norms like 'be fair' are not enough. The institution still needs a more specific account of what counts as an accommodation, what level of intervention is acceptable, and how this should be documented. Otherwise, a justified exception becomes an unclear general practice. That does not mean Morgan’s use is wrong. It means the university has failed to convert the values of inclusion, fairness, and integrity into SMART and contestable guidance. The hard part is not recognizing the value, but translating it into workable design and policy.",
    },
    {
      optionId: "accommodate",
      title: "Policy Innovation",
      description:
        "The university creates a task force with faculty, students, and disability services to build clear guidelines. Morgan’s case becomes the starting point for a more thoughtful policy.",
      consequence:
        "It takes time, and current cases are left uncertain. But it leads to a framework that other schools begin to use.",
      ethicalReflection:
        "This is the strongest Value Sensitive Design response because it begins with stakeholders, identifies their values, specifies the concept at stake, and then builds norms. It also fits the course point that ethical AI is not solved by one principle alone. Accessibility, fairness, integrity, and equal treatment can conflict, so they must be balanced rather than assumed to align automatically. A good policy would make the accommodation rule specific, measurable, and contestable, instead of leaving students to argue case by case. The remaining challenge is temporal: how to treat present students fairly while the institution is still building the norm.",
    },
  ],
},
{
  id: 5,
  title: "The Reference Letter",
  description:
    "Dr. Patel has to write 15 reference letters in one week. Feeling overwhelmed, they use AI to draft them based on bullet points for each student. One student, Kai, notices that their ‘personalized’ letter includes a paragraph that’s identical to another student’s. The AI reused the same praise.",
  excerpt: `"I am pleased to recommend [Student Name] for your program. In my 15 years of teaching, I have rarely seen a student with such strong curiosity, analytical thinking, and teamwork. Their contributions in class consistently improved discussions for everyone..."`,
  options: [
    { id: "confront", label: "Confront Dr. Patel", description: "Ask about the repeated language" },
    { id: "accept", label: "Accept the letter", description: "Use it as is" },
    { id: "request", label: "Request a revision", description: "Ask for a more personal version" },
  ],
  outcomes: [
    {
      optionId: "confront",
      title: "Uncomfortable Truth",
      description:
        "Dr. Patel admits using AI and apologizes. The conversation becomes tense, with Dr. Patel arguing that the core evaluation is still honest, even if the wording was generated.",
      consequence:
        "Kai gets a revised letter but the relationship becomes strained. Other students with similar letters never realize it.",
      ethicalReflection:
        "This raises a problem of transparency and possible achievement gaps. A reference letter is valuable because it is supposed to communicate a human judgment rooted in personal knowledge. When AI-generated praise is passed off as individualized assessment, the letter may still contain true claims, but its social meaning changes. Kai also lacks transparency about how the letter was produced and whether it reflects genuine attention. From a duty-based perspective, the issue is not just efficiency but honesty in representation. The question is whether AI drafting preserves the recommender’s authorship and accountability, or whether it weakens the practice by simulating care without actually providing it.",
    },
    {
      optionId: "accept",
      title: "Silent Compromise",
      description:
        "Kai submits the letter and gets accepted. But they’re left wondering if the generic wording helped or hurt their chances. That doubt stays with them.",
      consequence:
        "The system keeps working, but the sense of authenticity fades and no one addresses it.",
      ethicalReflection:
        "This keeps the system functioning, but it normalizes opacity. In lecture terms, the problem is less about raw output quality and more about accountability and trust. If recommendation letters become generic AI artifacts, then the institution still distributes praise and opportunity, but without a clear account of who deserves credit for the content or who stands behind it. That weakens the practice itself. A care-ethical view also matters here: recommendation letters are relational documents, and their value partly comes from attention, knowledge, and endorsement. If everyone uses AI silently, the norm has changed without anyone openly justifying that change.",
    },
    {
      optionId: "request",
      title: "Respectful Revision",
      description:
        "Kai politely asks for more specific examples from their shared research work. Dr. Patel takes the feedback well and updates the letter with real details.",
      consequence:
        "The new letter is stronger and feels genuine. Dr. Patel also starts keeping better notes to rely less on AI in the future.",
      ethicalReflection:
        "This response improves explainability and accountability because the final letter can now be justified by concrete examples. It does not reject AI outright, but it reasserts human control over the final output, which matches the lecture idea that users should actively review and approve AI-generated text. It also restores the practice’s core value: the letter becomes contestable, specific, and genuinely tied to the recommender’s knowledge. The broader lesson is that a good guideline here would not just say 'use AI responsibly.' It would specify when AI drafting is acceptable and require human verification plus individualized evidence before submission.",
    },
  ],
},
];
