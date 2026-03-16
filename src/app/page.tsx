"use client";

import { useState, useCallback } from "react";
import {
  quizQuestions,
  getShuffledQuestions,
  type QuizQuestion,
} from "@/data/quizQuestions";

export default function QuizPage() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [showTip, setShowTip] = useState(false);

  const startQuiz = useCallback(() => {
    setQuestions(getShuffledQuestions());
    setCurrentIndex(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setStarted(true);
    setShowFinalResult(false);
    setShowTip(false);
  }, []);

  const goToStart = useCallback(() => {
    setQuestions([]);
    setCurrentIndex(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setStarted(false);
    setShowFinalResult(false);
    setShowTip(false);
  }, []);

  const current = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

  const handleAnswer = (answer: string) => {
    if (showResult) return;
    setSelected(answer);
    setShowResult(true);
    if (answer === current.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (!isLast) {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setShowResult(false);
      setShowTip(false);
    } else {
      setShowFinalResult(true);
    }
  };

  if (showFinalResult && questions.length > 0) {
    const percent = Math.round((score / questions.length) * 100);
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[var(--bg)]">
        <div className="max-w-lg w-full rounded-2xl bg-[var(--card)] border border-white/10 p-8 shadow-xl text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Resultat</h1>
          <p className="text-4xl font-bold text-[var(--accent)] mb-2">
            {score} / {questions.length}
          </p>
          <p className="text-[var(--text-muted)] mb-8">{percent} % rätt</p>
          <button
            type="button"
            onClick={startQuiz}
            className="w-full py-4 px-6 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold transition"
          >
            Kör igen (nya frågor)
          </button>
          <button
            type="button"
            onClick={goToStart}
            className="mt-3 w-full py-3 px-6 rounded-xl border border-white/20 text-[var(--text-muted)] hover:text-white hover:border-white/40 transition"
          >
            Starta om
          </button>
        </div>
      </main>
    );
  }

  if (!started) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[var(--bg)]">
        <div className="max-w-lg w-full rounded-2xl bg-[var(--card)] border border-white/10 p-8 shadow-xl text-center">
          <h1 className="text-2xl font-bold text-white mb-2">
            Industriella revolutionen
          </h1>
          <p className="text-[var(--text-muted)] mb-6">
            Instuderingsquiz • Sol Nova 8, s. 67–108
          </p>
          <p className="text-sm text-[var(--text-muted)] mb-8">
            Frågorna och svarsalternativen roteras varje gång du startar – så du
            tränar i olika ordning.
          </p>
          <button
            type="button"
            onClick={startQuiz}
            className="w-full py-4 px-6 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold transition"
          >
            Starta quiz
          </button>
        </div>
      </main>
    );
  }

  if (questions.length === 0) return null;

  return (
    <main className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8 bg-[var(--bg)]">
      <div className="max-w-2xl w-full mx-auto flex-1 flex flex-col">
        {/* Starta om */}
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={goToStart}
            className="text-sm text-[var(--text-muted)] hover:text-white underline transition"
          >
            Starta om
          </button>
        </div>
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-[var(--text-muted)] mb-2">
            <span>Fråga {currentIndex + 1} av {questions.length}</span>
            <span>Poäng: {score}</span>
          </div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-[var(--accent)] transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="flex-1 rounded-2xl bg-[var(--card)] border border-white/10 p-6 sm:p-8 shadow-xl mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-6 leading-snug">
            {current.question}
          </h2>
          {current.tip && (
            <div className="mb-6">
              {!showTip ? (
                <button
                  type="button"
                  onClick={() => setShowTip(true)}
                  className="text-sm text-[var(--accent)] hover:underline"
                >
                  Visa tips
                </button>
              ) : (
                <p className="text-sm text-[var(--text-muted)] italic border-l-2 border-[var(--accent)] pl-3 py-1">
                  {current.tip}
                </p>
              )}
            </div>
          )}
          <ul className="space-y-3">
            {current.options.map((option) => {
              const isChosen = selected === option;
              const isCorrect = option === current.correctAnswer;
              const showCorrect = showResult && isCorrect;
              const showWrong = showResult && isChosen && !isCorrect;

              return (
                <li key={option}>
                  <button
                    type="button"
                    onClick={() => handleAnswer(option)}
                    disabled={showResult}
                    className={`w-full text-left py-4 px-4 rounded-xl border-2 transition ${
                      showCorrect
                        ? "border-[var(--correct)] bg-green-500/10 text-green-200"
                        : showWrong
                          ? "border-[var(--wrong)] bg-red-500/10 text-red-200"
                          : isChosen
                            ? "border-[var(--accent)] bg-blue-500/10"
                            : "border-white/20 hover:border-white/40 hover:bg-white/5"
                    }`}
                  >
                    {option}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Next / Avsluta */}
        {showResult && (
          <button
            type="button"
            onClick={handleNext}
            className="w-full py-4 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold transition"
          >
            {isLast ? "Se resultat" : "Nästa fråga"}
          </button>
        )}
      </div>
    </main>
  );
}
