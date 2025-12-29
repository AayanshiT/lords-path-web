import { NextResponse } from "next/server";
import { fetchCities } from "@/app/lib/oddo";

export async function GET() {
  try {
    const cities = await fetchCities();
// console.log("Fetched cities:", cities);

    return NextResponse.json({
      success: true,
      data: cities,
    });
  } catch (error) {
    console.error("City API error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch cities" },
      { status: 500 }
    );
  }
}
