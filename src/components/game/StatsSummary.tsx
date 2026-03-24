import { Phase1Round, Phase2Decision } from "@/lib/gameState";
import { emails } from "@/data/emails";
import { scenarios } from "@/data/scenarios";

interface StatsSummaryProps {
  score: number;
  rounds: Phase1Round[];
  decisions: Phase2Decision[];
  onReset: () => void;
}

export function StatsSummary({ score, rounds, decisions, onReset }: StatsSummaryProps) {
  const correctCount = rounds.filter((r) => r.correct).length;
  const accuracy = rounds.length > 0 ? Math.round((correctCount / rounds.length) * 100) : 0;

  const falseAccusations = rounds.filter((r) => {
    const email = emails.find((e) => e.id === r.emailId);
    return email && email.label === "Human" && r.choice !== "Human";
  }).length;

  const missedAI = rounds.filter((r) => {
    const email = emails.find((e) => e.id === r.emailId);
    return email && email.label === "AI" && r.choice !== "AI";
  }).length;

  const highConfidenceWrong = rounds.filter((r) => r.confidence === "high" && !r.correct).length;

  const reflectionPrompts = [
    "How should we define authorship when a student and an AI system both contribute to the final text?",
    "When AI-generated writing contains errors or misinformation, where should responsibility and accountability lie?",
    "Does AI assistance violate academic integrity, or can it count as legitimate support in some contexts?",
    "What makes a university response to suspected AI use fair and non-discriminatory?",
    "Are AI detectors still fair if they cannot reliably explain or justify their judgments?",
    "How can universities create transparent, contestable, and consistent rules for acceptable AI use in student writing?",
    "What values should universities prioritise when adapting to widespread AI writing tools: learning, fairness, efficiency, trust, or something else?"
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Simulation Complete</h1>
        <p className="text-muted-foreground">Here's how you navigated the ethics of AI detection</p>
      </div>

      <div className="text-center">
        <span className="text-6xl font-bold">{score}</span>
        <p className="text-sm text-muted-foreground mt-1">Total Points</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <StatCard label="Detection Accuracy" value={`${accuracy}%`} sub={`${correctCount}/${rounds.length} correct`} />
        <StatCard label="False Accusations" value={`${falseAccusations}`} sub="Humans flagged as AI" />
        <StatCard label="Missed AI Cases" value={`${missedAI}`} sub="AI texts identified as human" />
        <StatCard label="Overconfident Errors" value={`${highConfidenceWrong}`} sub="High-bet wrong answers" />
      </div>

      <div className="rounded-lg border bg-card p-6 space-y-4">
        <h3 className="font-semibold">Your Ethical Decisions</h3>
        <div className="space-y-3">
          {decisions.map((d) => {
            const scenario = scenarios.find((s) => s.id === d.scenarioId);
            const option = scenario?.options.find((o) => o.id === d.chosenOptionId);
            return (
              <div key={d.scenarioId} className="flex items-center justify-between text-sm border-b border-border pb-2 last:border-0">
                <span className="text-muted-foreground">{scenario?.title}</span>
                <span className="font-medium">{option?.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg text-center">Discussion Prompts</h3>
        <div className="space-y-3">
          {reflectionPrompts.map((prompt, i) => (
            <div key={i} className="rounded-lg border bg-card p-4">
              <p className="text-sm leading-relaxed">{prompt}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onReset}
        className="w-full rounded-lg border border-border bg-card px-6 py-3 font-medium hover:bg-muted transition-colors"
      >
        Reset Simulation
      </button>
    </div>
  );
}

function StatCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-lg border bg-card p-4 space-y-1">
      <span className="text-xs text-muted-foreground">{label}</span>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-xs text-muted-foreground">{sub}</p>
    </div>
  );
}
