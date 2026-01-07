import { NextResponse } from "next/server";
import { odooSearchRead } from "@/app/lib/oddo";

type CheckUserRequest = {
  phone?: string;
};

export async function POST(req: Request) {
  try {
    const body: CheckUserRequest = await req.json();
    const phone = body.phone;

    // 1️⃣ Validation
    if (!phone) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 }
      );
    }

    // 2️⃣ Search user in Odoo
    const users = await odooSearchRead(
      "res.partner",
      [["phone", "=", phone]],
      ["id", "name", "email", "phone"]
    );
    console.log("Odoo users found:", users);

    // 3️⃣ User exists
    if (users && users.length > 0) {
      return NextResponse.json({
        exists: true,
        user: users[0],
      });
    }

    // 4️⃣ User does not exist
    return NextResponse.json({
      exists: false,
    });
  } catch (error) {
    console.error("check-user error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
