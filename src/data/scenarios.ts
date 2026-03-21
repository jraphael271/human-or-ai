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
        "Should improvement be treated as a red flag? How can we tell the difference between real growth and dishonesty without punishing students for getting better?",
    },
    {
      optionId: "allow",
      title: "Benefit of the Doubt",
      description:
        "The paper is graded as usual and receives a high mark. Alex feels rewarded for the effort put into improving. At the same time, other students who used AI go unnoticed.",
      consequence:
        "This is fair to Alex, but it may create an uneven playing field if AI use is common and not consistently addressed.",
      ethicalReflection:
        "Is it better to let some cases slip through, or risk accusing innocent students? Where should the line be?",
    },
    {
      optionId: "clarify",
      title: "Open Conversation",
      description:
        "In the meeting, Alex explains their research process, shows drafts and notes, and talks about how tutoring helped. Professor Martinez feels confident the work is original and gives helpful feedback.",
      consequence:
        "The conversation builds trust, but it takes time and may not be practical with large classes.",
      ethicalReflection:
        "One-on-one conversations work well, but they don’t scale. How can we build trust without needing to question every student?",
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
        "If we punish polished writing, are we hurting the people who rely on support tools the most? Is using Grammarly really that different from using ChatGPT?",
    },
    {
      optionId: "accept",
      title: "Equal Consideration",
      description:
        "Sam’s application is judged on its content and they get an interview. During the interview, Sam shows strong knowledge and real interest, which supports that the work is their own.",
      consequence:
        "Sam gets the internship and does well. Still, the counselor wonders if they would feel the same if Sam had struggled in the interview.",
      ethicalReflection:
        "Do we judge people by what they produce, or how they produce it? If AI helps non-native speakers compete, is that support or cheating?",
    },
    {
      optionId: "interview",
      title: "Additional Scrutiny",
      description:
        "An extra interview round is added just for Sam. Other candidates are not asked to do the same. Sam does well but feels singled out and wonders if bias played a role.",
      consequence:
        "The result is positive, but the extra step wasn’t applied equally and may reflect unconscious bias.",
      ethicalReflection:
        "How do we check for authenticity without unfairly targeting people? When does being careful turn into discrimination?",
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
        "AI coding tools are common in real-world development. Should schools reflect that, or keep stricter rules?",
    },
    {
      optionId: "ignore",
      title: "Unaddressed Tension",
      description:
        "The group submits a strong project on time. But Casey feels frustrated, thinking the workload wasn’t fair. In peer reviews, Casey gives Riley a low score and mentions 'unequal contribution' without bringing up AI.",
      consequence:
        "Avoiding the issue doesn’t solve it. It just shows up in other ways.",
      ethicalReflection:
        "If we don’t talk about AI use, does frustration just build under the surface? Is staying quiet the same as accepting it?",
    },
    {
      optionId: "discuss",
      title: "Transparent Dialogue",
      description:
        "Riley explains they used Copilot as a starting point but reviewed and understood everything. The team agrees to note their tool use in the README and asks the professor for clear guidance.",
      consequence:
        "The discussion leads the professor to update the course rules with clear guidelines for future students.",
      ethicalReflection:
        "Being open about AI helps everyone. But should students be the ones setting these norms, or should schools take the lead?",
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
        "Where do we draw the line between support and authorship? If a human editor made the same changes, would we call it cheating?",
    },
    {
      optionId: "dismiss",
      title: "Precedent Set",
      description:
        "The complaint is dismissed, which sets an informal precedent. Other students start claiming AI use as an accessibility need, making rules harder to enforce. The disability services office sees a surge in requests.",
      consequence:
        "Morgan is protected, but the decision makes it harder to tell the difference between real accommodations and general AI use.",
      ethicalReflection:
        "How do we support real accessibility needs without opening the door to misuse? Is it even possible to draw that line fairly?",
    },
    {
      optionId: "accommodate",
      title: "Policy Innovation",
      description:
        "The university creates a task force with faculty, students, and disability services to build clear guidelines. Morgan’s case becomes the starting point for a more thoughtful policy.",
      consequence:
        "It takes time, and current cases are left uncertain. But it leads to a framework that other schools begin to use.",
      ethicalReflection:
        "Big changes take time. How do we support students now while building better systems for the future?",
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
        "If professors use AI for tasks like reference letters, does it weaken their value? Or is it just a practical response to heavy workloads?",
    },
    {
      optionId: "accept",
      title: "Silent Compromise",
      description:
        "Kai submits the letter and gets accepted. But they’re left wondering if the generic wording helped or hurt their chances. That doubt stays with them.",
      consequence:
        "The system keeps working, but the sense of authenticity fades and no one addresses it.",
      ethicalReflection:
        "If everyone uses AI, do recommendation letters lose their meaning? What would a more honest system look like?",
    },
    {
      optionId: "request",
      title: "Respectful Revision",
      description:
        "Kai politely asks for more specific examples from their shared research work. Dr. Patel takes the feedback well and updates the letter with real details.",
      consequence:
        "The new letter is stronger and feels genuine. Dr. Patel also starts keeping better notes to rely less on AI in the future.",
      ethicalReflection:
        "Speaking up can help, but should students have to do that? What should be in place to make sure recommendations are actually personal?",
    },
  ],
},
];
