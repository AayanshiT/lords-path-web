"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CheckCircle, XCircle, Trophy, RotateCcw } from "lucide-react";


type Question = {
  id: number;
  question: string;
  options: Array<{ id: "yes" | "no"; label: string }>;
};

// ✅ RESULTS SCREEN COMPONENT
function ResultsScreen({
  score,
  total,
  onRestart
}: {
  score: number;
  total: number;
  onRestart: () => void;
}) {
  const percentage = Math.round((score / total) * 100);

  let message = "";
  let emoji = "";

  if (percentage >= 70) {
    message = "High Risk - Please consult a healthcare professional";
    emoji = "⚠️";
  } else if (percentage >= 40) {
    message = "Moderate Concerns - Consider lifestyle improvements";
    emoji = "⚡";
  } else {
    message = "Looking Good - Keep up the healthy habits!";
    emoji = "✨";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        {/* Trophy Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-full">
            <Trophy className="w-16 h-16 text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Assessment Complete!
        </h1>

        {/* Score Display */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 mb-6">
          <div className="text-center">
            <p className="text-white text-lg mb-2">Your Score</p>
            <div className="text-6xl md:text-7xl font-bold text-white mb-2">
              {score}<span className="text-4xl">/{total}</span>
            </div>
            <div className="text-2xl font-semibold text-white">
              {percentage}%
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="text-center">
            <div className="text-5xl mb-3">{emoji}</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {message}
            </h2>
            <p className="text-gray-600">
              You answered "Yes" to {score} out of {total} questions
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-3xl font-bold text-green-700">{total - score}</p>
            <p className="text-sm text-gray-600">Negative</p>
          </div>
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <XCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <p className="text-3xl font-bold text-red-700">{score}</p>
            <p className="text-sm text-gray-600">Positive</p>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onRestart}
          className="w-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
        >
          <RotateCcw className="w-5 h-5" />
          Take Assessment Again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="w-1/2 bg-[#4B5563] text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
        >
          <RotateCcw className="w-5 h-5" />
           Back to Home
        </button>

      </div>
    </div>
  );
}

// ✅ QUESTION SCREEN COMPONENT
function QuestionScreen({
  question,
  currentIndex,
  total,
  onAnswer,
}: {
  question: string;
  currentIndex: number;
  total: number;
  onAnswer: (answer: "yes" | "no") => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {currentIndex + 1} of {total}
            </span>
            <span className="text-sm font-medium text-blue-600">
              {Math.round(((currentIndex + 1) / total) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-full transition-all duration-500 ease-out rounded-full"
              style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center leading-tight">
            {question}
          </h2>
        </div>

        {/* Answer Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => onAnswer("yes")}
            className="group relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-6 px-8 rounded-2xl font-semibold text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <CheckCircle className="w-6 h-6 inline-block mr-2 group-hover:scale-110 transition-transform" />
            Yes
          </button>
          <button
            onClick={() => onAnswer("no")}
            className="group relative bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-6 px-8 rounded-2xl font-semibold text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <XCircle className="w-6 h-6 inline-block mr-2 group-hover:scale-110 transition-transform" />
            No
          </button>
        </div>
      </div>
    </div>
  );
}

// ✅ MAIN COMPONENT
export default function OrganQuestionPage() {
  const params = useParams();
  const organId = Array.isArray(params.organId)
    ? params.organId[0]
    : params.organId;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<
    { questionId: number; answer: "yes" | "no" }[]
  >([]);

  const currentQuestion = questions[currentIndex];

  // Handle answer
  const handleAnswer = (answer: "yes" | "no") => {
    const newAnswers = [
      ...answers,
      { questionId: currentQuestion.id, answer },
    ];
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  // Restart quiz
  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers([]);
    setShowResults(false);
  };

  // Fetch questions
  useEffect(() => {
    if (!organId) return;

    async function fetchQuestions() {
      try {
        const res = await fetch(`/api/questions?organId=${organId}`);
        const json = await res.json();

        if (json.success && Array.isArray(json.data)) {
          setQuestions(json.data);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, [organId]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-gray-700">Loading questions...</p>
        </div>
      </div>
    );
  }

  // No questions
  if (!questions.length || !currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-700">No questions found</p>
        </div>
      </div>
    );
  }

  // Show results
  if (showResults) {
    const yesCount = answers.filter((a) => a.answer === "yes").length;
    return (
      <ResultsScreen
        score={yesCount}
        total={questions.length}
        onRestart={handleRestart}
      />
    );
  }

  // Show question
  return (
    <QuestionScreen
      question={currentQuestion.question}
      currentIndex={currentIndex}
      total={questions.length}
      onAnswer={handleAnswer}
    />
  );
}