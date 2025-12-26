import { NextResponse } from "next/server";
import { fetchLabTestsPaginated } from "../../lib/oddo"; // your odoo file

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const offset = Number(searchParams.get("offset") || 0);
    const limit = Number(searchParams.get("limit") || 20);

    const tests = await fetchLabTestsPaginated(offset, limit);

    return NextResponse.json({
      success: true,
      data: tests,
    });
  } catch (error) {
    console.error("Lab test API error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch lab tests" },
      { status: 500 }
    );
  }
}
