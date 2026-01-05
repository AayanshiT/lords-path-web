import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const organId = searchParams.get("organId");

  return NextResponse.json({
    success: true,
    data: [
      {
        id: 1,
        question: "Do you feel pain in this organ?",
        options: ["Yes", "No", "Sometimes"]
      }
    ]
  });
}
