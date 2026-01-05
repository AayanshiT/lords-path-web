import { fetchSurveyQuestions } from "@/app/lib/oddo";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const organId = Number(searchParams.get("organId"));

    if (!organId) {
      return NextResponse.json(
        { success: false, message: "Invalid organId" },
        { status: 400 }
      );
    }

    const questions = await fetchSurveyQuestions(organId);

    if (!Array.isArray(questions)) {
      throw new Error("Invalid response: questions should be an array");
    }

    const formattedQuestions = questions.map((q: any) => ({
      id: q.id,
      question: q.display_name || q.name, // safe
      options: [
        { id: "yes", label: "Yes" },
        { id: "no", label: "No" },
      ],
    }));

    return NextResponse.json({
      success: true,
      data: formattedQuestions,
    });
  } catch (error) {
    console.error("Survey API error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch questions" },
      { status: 500 }
    );
  }
}
