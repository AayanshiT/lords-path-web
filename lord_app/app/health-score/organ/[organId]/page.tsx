"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import QuestionsList from "@/components/HealthOrgansTest/health-questions";

export default function OrganQuestionPage() {
  const params = useParams();

  const organId = Array.isArray(params.organId)
    ? params.organId[0]
    : params.organId;

  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const currentQuestion = questions[currentIndex];

  const handleContinue = (answer: string) => {
    console.log("Answered:", answer);
    console.log("Question ID:", currentQuestion.id);
    console.log("Total questions 👉", questions.length);


    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      alert("All questions completed 🎉");
    }
  };

  useEffect(() => {
    if (!organId) return;

    async function fetchQuestions() {
      try {
        const res = await fetch(`/api/questions?organId=${organId}`);
        const json = await res.json();
        console.log("API Response:", json, res);

        if (json.success && Array.isArray(json.data)) {
          console.log("Fetched questions:", json.data);
          setQuestions(json.data);
          setCurrentIndex(0);
        }
      } catch (err) {
        console.error("Failed to fetch questions", err);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, [organId]);

  if (loading) return <p>Loading...</p>;
  if (!currentQuestion) return <p>No questions found</p>;

  return (
    <QuestionsList
      organId={organId}
      question={currentQuestion.question}
      options={currentQuestion.options}
      onSubmit={handleContinue}
    />
  );
}
