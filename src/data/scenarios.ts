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
      "Professor Martinez notices that a typically average student, Alex, has submitted an exceptionally well-written research paper. The writing style seems different from Alex's previous work - more polished, more structured, with sophisticated vocabulary. However, Alex has been attending extra tutoring sessions this semester.",
    excerpt: `"The implications of quantum computing on modern cryptographic systems represent a paradigm shift in our understanding of digital security. As Shor's algorithm demonstrates, the computational complexity assumptions underlying RSA encryption become fundamentally untenable in a post-quantum landscape..."`,
    options: [
      { id: "flag", label: "Flag as AI-generated", description: "Report the student for academic misconduct" },
      { id: "allow", label: "Accept the submission", description: "Grade the paper on its merits" },
      {
        id: "clarify",
        label: "Ask for clarification",
        description: "Meet with the student to discuss their writing process",
      },
    ],
    outcomes: [
      {
        optionId: "flag",
        title: "Wrongful Accusation",
        description:
          "Alex was called before the academic integrity board. After investigation, it was revealed that Alex had been working with a writing tutor and had genuinely improved. The accusation caused significant stress and damaged the student-professor relationship.",
        consequence:
          "Alex lost trust in the academic system and became anxious about submitting future work, even self-censoring their improved writing.",
        ethicalReflection:
          "Should improvement itself be grounds for suspicion? How do we distinguish growth from dishonesty without punishing students for getting better?",
      },
      {
        optionId: "allow",
        title: "Benefit of the Doubt",
        description:
          "The paper was graded normally and received a high mark. Alex felt validated for the hard work put into improvement. Other students who actually used AI went undetected in the same batch.",
        consequence:
          "While fair to Alex, this approach may create an uneven playing field if AI use is widespread but inconsistently enforced.",
        ethicalReflection:
          "Is it better to risk letting some AI use slip through than to risk falsely accusing genuine students? Where should the threshold be?",
      },
      {
        optionId: "clarify",
        title: "Open Conversation",
        description:
          "During the meeting, Alex walked through their research process, showed drafts and notes, and explained how tutoring helped. Professor Martinez gained confidence in the work's authenticity and provided constructive feedback.",
        consequence:
          "The conversation strengthened the academic relationship, but required significant time investment that may not scale across hundreds of students.",
        ethicalReflection:
          "Individual conversations are ideal but resource-intensive. How do we build systems of trust that don't require interrogating every student?",
      },
    ],
  },
  {
    id: 2,
    title: "The AI Cover Letter",
    description:
      "A university career counselor reviews applications for a competitive internship program. One candidate, Sam, submitted a cover letter that's remarkably well-crafted - professional tone, perfect structure, zero errors. The counselor suspects AI assistance but has no proof. Sam comes from a disadvantaged background and English is their second language.",
    excerpt: `"I am uniquely positioned to contribute to your organization's mission of advancing sustainable technology solutions. My interdisciplinary background in environmental science and data analytics, combined with my passion for evidence-based policy making, enables me to bridge the gap between technical research and practical implementation..."`,
    options: [
      { id: "reject", label: "Reject the application", description: "Disqualify for suspected AI use" },
      { id: "accept", label: "Evaluate normally", description: "Judge the application on its content" },
      { id: "interview", label: "Add an interview round", description: "Assess the candidate's abilities in person" },
    ],
    outcomes: [
      {
        optionId: "reject",
        title: "Opportunity Denied",
        description:
          "Sam was rejected and never learned why. The internship went to a native English speaker whose application was similar in quality. Sam, who had used Grammarly and a university writing center, was denied an opportunity that could have changed their career trajectory.",
        consequence:
          "The decision disproportionately affected a student from a disadvantaged background, reinforcing existing inequalities.",
        ethicalReflection:
          "When we penalize polished writing, do we inadvertently discriminate against those who need writing tools the most? Is using Grammarly fundamentally different from using ChatGPT?",
      },
      {
        optionId: "accept",
        title: "Equal Consideration",
        description:
          "Sam's application was evaluated on its merits and they were selected for an interview. During the interview, Sam demonstrated genuine knowledge and passion, confirming the application's authenticity.",
        consequence:
          "Sam got the internship and thrived, but the counselor wondered if they'd have felt the same way if Sam had performed poorly in the interview.",
        ethicalReflection:
          "Should we judge people by their outputs or their tools? If an AI helps level the playing field for non-native speakers, is that assistance or deception?",
      },
      {
        optionId: "interview",
        title: "Additional Scrutiny",
        description:
          "An extra interview round was added specifically for Sam, though other candidates weren't subjected to the same scrutiny. Sam performed well but felt singled out and questioned whether bias played a role.",
        consequence:
          "While the outcome was positive, the additional barrier was applied inconsistently and may have been influenced by unconscious bias.",
        ethicalReflection:
          "How do we ensure that verification processes don't become tools of discrimination? When does 'due diligence' become 'targeting'?",
      },
    ],
  },
  {
    id: 3,
    title: "The Group Project Dilemma",
    description:
      "In a group project for a software engineering course, teammate Riley has been contributing code that's unusually clean and well-documented. Another teammate, Casey, discovers that Riley has been using GitHub Copilot extensively. The project guidelines don't explicitly mention AI coding assistants. The deadline is tomorrow.",
    excerpt: `// Riley's code submission
async function optimizeQueryExecution(queries: Query[]): Promise<Result[]> {
  const priorityQueue = new PriorityQueue<Query>((a, b) => a.complexity - b.complexity);
  queries.forEach(q => priorityQueue.enqueue(q));
  
  const results: Result[] = [];
  const connectionPool = await DatabasePool.initialize(CONFIG.maxConnections);
  // ... extensive well-structured implementation
}`,
    options: [
      { id: "report", label: "Report to professor", description: "Flag Riley's AI tool usage" },
      { id: "ignore", label: "Let it go", description: "Focus on finishing the project" },
      { id: "discuss", label: "Talk to Riley", description: "Have an honest conversation about tool usage" },
    ],
    outcomes: [
      {
        optionId: "report",
        title: "Group Consequences",
        description:
          "The professor investigated and found that the guidelines were ambiguous about AI coding assistants. Rather than penalizing Riley alone, the entire group's grade was put under review. The team dynamic collapsed, and the project suffered.",
        consequence:
          "Reporting without first seeking clarification harmed the entire team and didn't resolve the underlying policy ambiguity.",
        ethicalReflection:
          "In professional software development, AI coding assistants are standard tools. Should academic settings reflect professional norms, or maintain stricter boundaries?",
      },
      {
        optionId: "ignore",
        title: "Unaddressed Tension",
        description:
          "The project was submitted on time with high quality. However, Casey remained resentful, feeling the workload was unfair. In peer evaluations, Casey gave Riley low marks, citing 'unequal contribution' without mentioning AI.",
        consequence:
          "Avoiding the conversation didn't make the ethical tension disappear, it just manifested in indirect ways.",
        ethicalReflection:
          "When we avoid difficult conversations about AI use, do we create a culture of silent resentment? Is passive acceptance of AI tools a form of complicity?",
      },
      {
        optionId: "discuss",
        title: "Transparent Dialogue",
        description:
          "Riley explained that they used Copilot as a starting point but reviewed and understood every line. The team agreed to document their tool usage in the project README and asked the professor for clarification on the policy.",
        consequence:
          "The conversation led the professor to update the course policy with clear guidelines on AI tool usage for future semesters.",
        ethicalReflection:
          "Transparency about AI use benefits everyone. But should students be responsible for setting these norms, or should institutions lead?",
      },
    ],
  },
  {
    id: 4,
    title: "The Accessibility Argument",
    description:
      "A student with dyslexia, Morgan, uses AI writing tools to help organize thoughts and correct grammar in their essays. A classmate reports Morgan to the academic integrity office, claiming unfair advantage. Morgan argues the AI is an accessibility tool, not a cheating mechanism.",
    excerpt: `Morgan's original notes: "reneable enrgy importnt for fture. solar wind good but cost high. govrmnt need invest more. developing cntries need help too."

Morgan's submitted paragraph: "Renewable energy represents a critical investment in our collective future. While solar and wind technologies have shown tremendous promise, the high initial costs remain a significant barrier, particularly for developing nations that stand to benefit most from clean energy transitions."`,
    options: [
      { id: "uphold", label: "Uphold the complaint", description: "The AI fundamentally changed Morgan's work" },
      { id: "dismiss", label: "Dismiss the complaint", description: "AI as accessibility tool is legitimate" },
      {
        id: "accommodate",
        label: "Create accommodation policy",
        description: "Develop formal guidelines for AI as assistive technology",
      },
    ],
    outcomes: [
      {
        optionId: "uphold",
        title: "Accessibility Denied",
        description:
          "Morgan was found in violation of academic integrity. They appealed, arguing that the AI served the same function as speech-to-text software or a human scribe. The case highlighted how disability accommodations haven't kept pace with technology.",
        consequence:
          "Morgan's academic record was marked, and they stopped using the tool that helped them communicate their ideas effectively.",
        ethicalReflection:
          "Where is the line between assistance and authorship? If a human editor made the same improvements, would we consider it cheating?",
      },
      {
        optionId: "dismiss",
        title: "Precedent Set",
        description:
          "The complaint was dismissed, setting an informal precedent. Other students began claiming AI use as an accessibility need, making it difficult to enforce any AI restrictions. The disability services office was overwhelmed with new accommodation requests.",
        consequence:
          "While protecting Morgan, the decision created a loophole that blurred the line between accommodation and general AI use.",
        ethicalReflection:
          "How do we protect legitimate accessibility needs without creating policies that can be exploited? Can we even make that distinction fairly?",
      },
      {
        optionId: "accommodate",
        title: "Policy Innovation",
        description:
          "The university formed a task force including disability services, faculty, and students to develop clear guidelines. Morgan's case became the catalyst for a nuanced AI accommodation policy.",
        consequence:
          "The process took months, leaving current cases in limbo. But it ultimately produced a framework that other institutions adopted.",
        ethicalReflection:
          "Systemic change is slow but necessary. How do we support individual students while building institutional frameworks that don't yet exist?",
      },
    ],
  },
  {
    id: 5,
    title: "The Reference Letter",
    description:
      "Dr. Patel needs to write 15 reference letters in one week. Overwhelmed, they use AI to draft letters based on bullet points about each student. One student, Kai, discovers that their 'personalized' letter contains a paragraph identical to another student's letter, the AI recycled the same praise.",
    excerpt: `"It is with great enthusiasm that I recommend [Student Name] for your program. In my 15 years of teaching, I have rarely encountered a student who demonstrates such a remarkable combination of intellectual curiosity, analytical rigor, and collaborative spirit. Their contributions to class discussions consistently elevated the learning experience for all participants..."`,
    options: [
      { id: "confront", label: "Confront Dr. Patel", description: "Ask the professor about the duplicate language" },
      { id: "accept", label: "Accept the letter", description: "A recommendation is a recommendation" },
      { id: "request", label: "Request a revision", description: "Ask for a more personalized letter" },
    ],
    outcomes: [
      {
        optionId: "confront",
        title: "Uncomfortable Truth",
        description:
          "Dr. Patel admitted to using AI and apologized. However, the confrontation strained their relationship, and Dr. Patel became defensive, arguing that the core assessments in the letters were genuine even if the prose was AI-generated.",
        consequence:
          "Kai got a revised letter but lost a potential mentor. Other students who received similar letters never knew.",
        ethicalReflection:
          "If professors use AI for administrative tasks like letters, does it devalue the recommendation system? Or is it a pragmatic response to unsustainable workloads?",
      },
      {
        optionId: "accept",
        title: "Silent Compromise",
        description:
          "Kai submitted the letter and was accepted to the program. They never knew if the acceptance was despite or because of the generic letter. The doubt lingered throughout their time in the program.",
        consequence:
          "The recommendation system continued functioning but with eroded authenticity that neither party acknowledged.",
        ethicalReflection:
          "When everyone uses AI, does the entire system of personal recommendations become performative? What would a more honest system look like?",
      },
      {
        optionId: "request",
        title: "Respectful Revision",
        description:
          "Kai diplomatically asked if the letter could include more specific examples from their research project together. Dr. Patel appreciated the reminder and revised the letter with genuine personal details.",
        consequence:
          "The revised letter was stronger and more authentic. Dr. Patel began keeping better notes on students to avoid over-reliance on AI for future letters.",
        ethicalReflection:
          "Students advocating for themselves can improve outcomes, but should they need to? What systems should be in place to ensure recommendations are meaningful?",
      },
    ],
  },
];
