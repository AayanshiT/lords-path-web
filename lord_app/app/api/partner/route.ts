
import { NextResponse } from "next/server";
import { odooCreatePartner } from "@/app/lib/oddo";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const partnerId = await odooCreatePartner({
      name: body.name,
      phone: body.phone,
      email: body.email,
    });

    return NextResponse.json({
      success: true,
      partnerId,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
