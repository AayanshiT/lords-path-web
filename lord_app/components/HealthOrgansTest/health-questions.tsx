"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CheckCircle, XCircle, Trophy, RotateCcw } from "lucide-react";


type Question = {
  id: number;
  question: string;
  options: Array<{ id: "yes" | "no"; label: string }>;
};

/* ---------- QUESTION SCREEN ---------- */
type QuestionScreenProps = {
  question: string;
  currentIndex: number;
  total: number;
  onAnswer: (answer: "yes" | "no") => void;
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
        {/* Title */}
        <h1 className="text-4xl md:text-3xl font-bold text-center text-gray-800 mb-4">
          Assessment Complete!
        </h1>

        {/* Score Display */}
        <div className="bg-[#00368C] rounded-2xl p-4 mb-6">
          <div className="text-center">
            <p className="text-white text-lg mb-2">Your Score</p>
            <div className="text-6xl md:text-7xl font-bold text-white mb-2">
              {/* {score}<span className="text-4xl">/{total}</span> */}
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
        <div className="grid grid-cols-2 gap-1">
          <button
          onClick={onRestart}
          className="w-full bg-[#00368C] text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
        >
          <RotateCcw className="w-5 h-5" />
          Take Assessment Again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="w-full bg-[#FF3B3B] text-white py-4 rounded-xl font-semibold text-lg hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
        >
          <RotateCcw className="w-5 h-5" />
          Back to Home
        </button>
        </div>

        {/* Action Button */}
        

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
            <span className="text-sm font-medium text-[#FF3B3B]">
              {Math.round(((currentIndex + 1) / total) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-[#00368C] h-full transition-all duration-500 ease-out rounded-full"
              style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center leading-tight">
            {question}
          </h2>
        </div>

        {/* Answer Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <button
            onClick={() => onAnswer("yes")}
            className="group relative bg-gradient-to-br from-green-500 to-green-600
      hover:from-green-600 hover:to-green-700
      text-white py-4 px-4 rounded-lg
      font-medium text-xl
      transition-all duration-200 shadow hover:shadow-md"
          >
            <CheckCircle className="w-4 h-4 inline-block mr-1.5" />
            Yes
          </button>

          <button
            onClick={() => onAnswer("no")}
            className="group relative bg-[#FF3B3B] hover:bg-red-600
      text-white py-4 px-4 rounded-lg
      font-medium text-xl
      transition-all duration-200 shadow hover:shadow-md"
          >
            <XCircle className="w-4 h-4 inline-block mr-1.5" />
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