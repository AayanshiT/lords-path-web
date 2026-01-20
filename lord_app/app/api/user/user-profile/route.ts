import { NextResponse } from "next/server";
import { odooExecuteUpdateUsers } from "@/app/lib/oddo"; // path ok rakho

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    console.log("Incoming body:", body);

    const result = await odooExecuteUpdateUsers(body.user_id, {
      name: body.name,
      street: body.street,
      street2: body.street2,
      city: body.city,
      state_id: body.state,
      zip: body.zip,
      country_id: body.country,
    });

    console.log("Odoo update result:", result);

    return Response.json({ success: true });
  } catch (error: any) {
    console.error("USER PROFILE UPDATE ERROR:", error);

    return Response.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
