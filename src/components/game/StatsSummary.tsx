import { Phase1Round, Phase2Decision } from "@/lib/gameState";
import { emails } from "@/data/emails";
import { scenarios } from "@/data/scenarios";
import { BarChart3, Target, AlertTriangle, TrendingUp, Brain } from "lucide-react";

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
    "Can AI writing actually be detected reliably?",
    "What evidence is enough to accuse someone of using AI?",
    "Should AI assistance always be considered cheating?",
    "What policies would be fair for both students and educators?",
    "How should institutions adapt to a world where AI writing tools are ubiquitous?",
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Simulation Complete</h1>
        <p className="text-muted-foreground">Here's how you navigated the ethics of AI detection</p>
      </div>

      {/* Score */}
      <div className="text-center">
        <span className="text-6xl font-bold font-mono-code text-primary">{score}</span>
        <p className="text-sm text-muted-foreground mt-1">Total Points</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard icon={<Target className="w-5 h-5 text-primary" />} label="Detection Accuracy" value={`${accuracy}%`} sub={`${correctCount}/${rounds.length} correct`} />
        <StatCard icon={<AlertTriangle className="w-5 h-5 text-destructive" />} label="False Accusations" value={`${falseAccusations}`} sub="Humans flagged as AI" />
        <StatCard icon={<Brain className="w-5 h-5 text-warning" />} label="Missed AI Cases" value={`${missedAI}`} sub="AI texts identified as human" />
        <StatCard icon={<TrendingUp className="w-5 h-5 text-success" />} label="Overconfident Errors" value={`${highConfidenceWrong}`} sub="High-bet wrong answers" />
      </div>

      {/* Scenario Decisions */}
      <div className="rounded-lg border bg-card p-6 space-y-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Your Ethical Decisions</h3>
        </div>
        <div className="space-y-3">
          {decisions.map((d) => {
            const scenario = scenarios.find((s) => s.id === d.scenarioId);
            const option = scenario?.options.find((o) => o.id === d.chosenOptionId);
            return (
              <div key={d.scenarioId} className="flex items-center justify-between text-sm border-b border-border pb-2 last:border-0">
                <span className="text-muted-foreground">{scenario?.title}</span>
                <span className="font-medium text-primary">{option?.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reflection */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg text-center">Discussion Prompts</h3>
        <div className="space-y-3">
          {reflectionPrompts.map((prompt, i) => (
            <div key={i} className="rounded-lg border bg-muted/30 p-4 animate-slide-up" style={{ animationDelay: `${i * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}>
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

function StatCard({ icon, label, value, sub }: { icon: React.ReactNode; label: string; value: string; sub: string }) {
  return (
    <div className="rounded-lg border bg-card p-4 space-y-1">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
      <p className="text-2xl font-bold font-mono-code">{value}</p>
      <p className="text-xs text-muted-foreground">{sub}</p>
    </div>
  );
}
