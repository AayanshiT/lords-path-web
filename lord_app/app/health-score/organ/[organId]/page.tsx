"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import HealthQuestion from "@/components/HealthOrgansTest/health-questions";
// import Question from "@/components/HealthOrgansTest/health-questions";

const OPTIONS = [
  { id: "yes" as const, label: "Yes" },
  { id: "no" as const, label: "No" },
];


type Question = {
  id: number;
  question: string;
  options: Array<{ id: string; label: string }>;
};

export default function OrganQuestionPage() {
  const params = useParams();
  const organId = Array.isArray(params.organId)
    ? params.organId[0]
    : params.organId;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  // const [answers, setAnswers] = useState<{ questionId: number; answers: "yes" | "no" }[]>([]);
  const [answers, setAnswers] = useState<{ questionId: number; answer: "yes" | "no" }[]>([]);

  const currentQuestion = questions[currentIndex];

  // ✅ HANDLE NEXT QUESTION
  const handleContinue = (answer: "yes" | "no") => {
    setAnswers((prev: any) => [
      ...prev,
      { questionId: currentQuestion.id, answer },
    ]);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      showResult(answer); // ✅ Pass the last answer
    }
  };

  // ✅ FINAL RESULT
  const showResult = (lastAnswer: "yes" | "no") => {
    // Include the last answer in the count
    const allAnswers = [...answers, { questionId: currentQuestion.id, answer: lastAnswer }];
    const yesCount = allAnswers.filter((a) => a.answer === "yes").length;
    alert(`You answered YES to ${yesCount} questions`); // ✅ Fixed template literal
  };

  // ✅ FETCH QUESTIONS
  useEffect(() => {
    if (!organId) return;

    async function fetchQuestions() {
      try {
        const res = await fetch(`/api/questions?organId=${organId}`); // ✅ Fixed template literal
        const json = await res.json();
        // console.log("Fetched Questions:", json);

        if (json.success && Array.isArray(json.data)) {
          setQuestions(json.data);
        } else {
          console.error("Invalid data format:", json);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, [organId]);


  if (loading) return <p>Loading...</p>;
  if (!questions.length) return <p>No questions found</p>;
  if (!currentQuestion) return <p>No more questions</p>;

  // ✅ RENDER
  return (
    <>
      {/* <OrganQuestionPage/> */}
      <HealthQuestion
        question={currentQuestion.question}
        options={OPTIONS}
        onSubmit={handleContinue}
        organId={organId}
      />
    </>

  );
}