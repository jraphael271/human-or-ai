import { EmailLabel } from "@/data/emails";
import { CheckCircle2, XCircle } from "lucide-react";

interface ResultRevealProps {
  correctAnswer: EmailLabel;
  userChoice: EmailLabel;
  confidence: string;
  pointsChange: number;
  explanation: string;
  onNext: () => void;
  isLastRound: boolean;
}

export function ResultReveal({
  correctAnswer,
  userChoice,
  confidence,
  pointsChange,
  explanation,
  onNext,
  isLastRound,
}: ResultRevealProps) {
  const isCorrect = correctAnswer === userChoice;

  return (
    <div className="max-w-xl mx-auto space-y-6 animate-fade-in-scale">
      <div className="flex justify-center">
        {isCorrect ? (
          <CheckCircle2 className="w-16 h-16 text-success" />
        ) : (
          <XCircle className="w-16 h-16 text-destructive" />
        )}
      </div>

      <h2 className={`text-2xl font-bold text-center ${isCorrect ? "text-success" : "text-destructive"}`}>
        {isCorrect ? "Correct!" : "Incorrect"}
      </h2>

      <div className="rounded-lg border bg-card p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground block">Correct Answer</span>
            <span className="font-semibold text-success">{correctAnswer}</span>
          </div>
          <div>
            <span className="text-muted-foreground block">Your Choice</span>
            <span className={`font-semibold ${isCorrect ? "text-success" : "text-destructive"}`}>{userChoice}</span>
          </div>
          <div>
            <span className="text-muted-foreground block">Confidence</span>
            <span className="font-semibold capitalize">{confidence}</span>
          </div>
          <div>
            <span className="text-muted-foreground block">Points</span>
            <span className={`font-semibold font-mono-code ${pointsChange >= 0 ? "text-success" : "text-destructive"}`}>
              {pointsChange >= 0 ? "+" : ""}{pointsChange}
            </span>
          </div>
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm text-muted-foreground italic">"{explanation}"</p>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
      >
        {isLastRound ? "Continue to Phase 2" : "Next Email →"}
      </button>
    </div>
  );
}
