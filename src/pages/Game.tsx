import { useState, useCallback } from "react";
import { emails, EmailLabel } from "@/data/emails";
import { scenarios } from "@/data/scenarios";
import {
  GameState,
  GamePhase,
  ConfidenceLevel,
  confidencePoints,
  createInitialState,
  shuffleAndPick,
} from "@/lib/gameState";

import { TopBar } from "@/components/game/TopBar";

import { EmailCard } from "@/components/game/EmailCard";
import { ChoiceButtons } from "@/components/game/ChoiceButtons";
import { ConfidenceSelector } from "@/components/game/ConfidenceSelector";
import { ResultReveal } from "@/components/game/ResultReveal";
import { ScenarioCard } from "@/components/game/ScenarioCard";
import { ScenarioOutcomeReveal } from "@/components/game/ScenarioOutcomeReveal";
import { StatsSummary } from "@/components/game/StatsSummary";
import { Bot, Eye, BookOpen, ArrowRight, Zap, Scale, Search } from "lucide-react";

const PHASE1_ROUNDS = 5;
const PHASE2_SCENARIOS = 3;

export default function Game() {
  const [state, setState] = useState<GameState>(() => {
    const selectedEmails = shuffleAndPick(emails, PHASE1_ROUNDS).map((e) => e.id);
    const selectedScenarios = shuffleAndPick(scenarios, PHASE2_SCENARIOS).map((s) => s.id);
    return createInitialState(selectedEmails, selectedScenarios);
  });

  const [choice, setChoice] = useState<EmailLabel | null>(null);
  const [confidence, setConfidence] = useState<ConfidenceLevel | null>(null);
  const [scoreAnimating, setScoreAnimating] = useState(false);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);

  const isPhase1Active = state.phase === "phase1";
  const currentEmail = isPhase1Active
    ? emails.find((e) => e.id === state.selectedEmailIds[state.currentRound])
    : null;


  function setPhase(phase: GamePhase) {
    setState((prev) => ({ ...prev, phase }));
  }

  function handleSubmit() {
    if (!choice || !confidence || !currentEmail) return;

    const isCorrect = choice === currentEmail.label;
    const pts = confidencePoints[confidence];
    const pointsChange = isCorrect ? pts : -pts;

    setScoreAnimating(true);
    setTimeout(() => setScoreAnimating(false), 500);

    setState((prev) => ({
      ...prev,
      phase: "result",
      score: prev.score + pointsChange,
      phase1Rounds: [
        ...prev.phase1Rounds,
        {
          emailId: currentEmail.id,
          choice,
          confidence,
          correct: isCorrect,
          pointsChange,
        },
      ],
    }));
  }

  function handleNextRound() {
    const nextRound = state.currentRound + 1;
    if (nextRound >= PHASE1_ROUNDS) {
      setPhase("transition");
    } else {
      setChoice(null);
      setConfidence(null);
      setState((prev) => ({ ...prev, phase: "phase1", currentRound: nextRound }));
    }
  }

  function handleScenarioChoice(optionId: string) {
    const scenarioId = state.selectedScenarioIds[currentScenarioIndex];
    setState((prev) => ({
      ...prev,
      phase: "scenarioOutcome",
      phase2Decisions: [...prev.phase2Decisions, { scenarioId, chosenOptionId: optionId }],
    }));
  }

  function handleNextScenario() {
    const next = currentScenarioIndex + 1;
    if (next >= PHASE2_SCENARIOS) {
      setPhase("results");
    } else {
      setCurrentScenarioIndex(next);
      setPhase("phase2");
    }
  }

  function handleReset() {
    const selectedEmails = shuffleAndPick(emails, PHASE1_ROUNDS).map((e) => e.id);
    const selectedScenarios = shuffleAndPick(scenarios, PHASE2_SCENARIOS).map((s) => s.id);
    setState(createInitialState(selectedEmails, selectedScenarios));
    setChoice(null);
    setConfidence(null);
    setCurrentScenarioIndex(0);
  }

  const lastRound = state.phase1Rounds[state.phase1Rounds.length - 1];
  const lastEmail = lastRound ? emails.find((e) => e.id === lastRound.emailId) : null;

  const currentScenario =
    state.phase === "phase2" || state.phase === "scenarioOutcome"
      ? scenarios.find((s) => s.id === state.selectedScenarioIds[currentScenarioIndex])
      : null;

  const lastDecision = state.phase2Decisions[state.phase2Decisions.length - 1];
  const currentOutcome =
    state.phase === "scenarioOutcome" && currentScenario && lastDecision
      ? currentScenario.outcomes.find((o) => o.optionId === lastDecision.chosenOptionId)
      : null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Landing */}
      {state.phase === "landing" && (
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-lg text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-xs text-muted-foreground">
              <Bot className="w-3.5 h-3.5" />
              Ethics Lab Simulation
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Human <span className="text-primary">or</span> AI?
            </h1>
            <p className="text-xl text-muted-foreground">Can you actually tell the difference?</p>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              A classroom game about detecting AI writing and making fair ethical decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setPhase("rules")}
                className="rounded-lg bg-primary px-8 py-3.5 text-primary-foreground font-semibold hover:bg-primary/90 transition-colors animate-pulse-glow"
              >
                Start Game
              </button>
              <button
                onClick={() => setPhase("rules")}
                className="rounded-lg border border-border px-8 py-3.5 font-medium hover:bg-muted transition-colors"
              >
                How It Works
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rules */}
      {state.phase === "rules" && (
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-xl space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-center">How It Works</h2>

            <div className="space-y-4">
              {[
                { icon: <Eye className="w-6 h-6" />, step: "Step 1", title: "Read the email", desc: "You'll see a university-related email — from students, professors, or staff." },
                { icon: <Search className="w-6 h-6" />, step: "Step 2", title: "Classify the author", desc: "Decide: was it written by a Human, AI, or Edited by AI?" },
                { icon: <Zap className="w-6 h-6" />, step: "Step 3", title: "Bet your confidence", desc: "Risk more points for bigger rewards — or play it safe." },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 rounded-lg border bg-card p-5 animate-slide-up stagger-${i + 1}`}
                >
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary">{item.icon}</div>
                  <div>
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">{item.step}</span>
                    <h3 className="font-semibold mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-warning/30 bg-warning/5 p-5 animate-slide-up stagger-4">
              <div className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-warning shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-warning">Phase 2: Ethical Consequences</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    After the detection rounds, you'll face scenarios where misidentifying AI use has real consequences. Your decisions will be tested.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setChoice(null);
                setConfidence(null);
                setState((prev) => ({ ...prev, phase: "phase1", currentRound: 0 }));
              }}
              className="w-full rounded-lg bg-primary px-6 py-3.5 text-primary-foreground font-semibold hover:bg-primary/90 transition-colors animate-slide-up stagger-5"
            >
              Start Phase 1 →
            </button>
          </div>
        </div>
      )}

      {/* Phase 1 */}
      {state.phase === "phase1" && currentEmail && (
        <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-6 pb-8">
          <TopBar
            phaseLabel="Detection"
            round={state.currentRound + 1}
            totalRounds={PHASE1_ROUNDS}
            score={state.score}
            scoreAnimating={scoreAnimating}
          />
          <div className="flex-1 space-y-6 overflow-y-auto">
            <EmailCard context={currentEmail.context} text={currentEmail.text} />
            <ChoiceButtons selected={choice} onSelect={setChoice} />
            <ConfidenceSelector selected={confidence} onSelect={setConfidence} />
            <button
              onClick={handleSubmit}
              disabled={!choice || !confidence}
              className="w-full rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Submit Guess
            </button>
          </div>
        </div>
      )}

      {/* Result */}
      {state.phase === "result" && lastRound && lastEmail && (
        <div className="flex-1 flex items-center justify-center px-6">
          <ResultReveal
            correctAnswer={lastEmail.label}
            userChoice={lastRound.choice!}
            confidence={lastRound.confidence!}
            pointsChange={lastRound.pointsChange}
            explanation={lastEmail.explanation}
            onNext={handleNextRound}
            isLastRound={state.currentRound + 1 >= PHASE1_ROUNDS}
          />
        </div>
      )}

      {/* Transition */}
      {state.phase === "transition" && (
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-lg text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-warning/10 border border-warning/20">
              <Scale className="w-8 h-8 text-warning" />
            </div>
            <h2 className="text-3xl font-bold">Phase 1 Complete</h2>
            <p className="text-muted-foreground leading-relaxed">
              You just experienced how difficult it is to detect AI writing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Now imagine making decisions where <span className="text-warning font-medium">accusations have real consequences</span>.
            </p>
            <button
              onClick={() => {
                setCurrentScenarioIndex(0);
                setPhase("phase2");
              }}
              className="rounded-lg bg-primary px-8 py-3.5 text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Ethical Scenarios →
            </button>
          </div>
        </div>
      )}

      {/* Phase 2 */}
      {state.phase === "phase2" && currentScenario && (
        <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-medium uppercase tracking-widest text-warning">Ethical Scenarios</span>
            <span className="text-sm text-muted-foreground">
              {currentScenarioIndex + 1}/{PHASE2_SCENARIOS}
            </span>
          </div>
          <ScenarioCard scenario={currentScenario} onChoose={handleScenarioChoice} />
        </div>
      )}

      {/* Scenario Outcome */}
      {state.phase === "scenarioOutcome" && currentOutcome && (
        <div className="flex-1 flex items-center justify-center px-6 py-8">
          <ScenarioOutcomeReveal
            outcome={currentOutcome}
            onNext={handleNextScenario}
            isLast={currentScenarioIndex + 1 >= PHASE2_SCENARIOS}
          />
        </div>
      )}

      {/* Results */}
      {state.phase === "results" && (
        <div className="flex-1 px-6 py-8">
          <StatsSummary
            score={state.score}
            rounds={state.phase1Rounds}
            decisions={state.phase2Decisions}
            onReset={handleReset}
          />
        </div>
      )}
    </div>
  );
}
