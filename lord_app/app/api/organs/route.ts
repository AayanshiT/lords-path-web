import { NextResponse } from "next/server";
import { fetchOrgans } from "@/app/lib/oddo";


export async function GET() {
  try {
    const organs = await fetchOrgans();

    return NextResponse.json({
      success: true,
      data: organs,
    });
  } catch (error) {
    console.error("API /organs error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch organs",
      },
      { status: 500 }
    );
  }
}
