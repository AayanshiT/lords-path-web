
//final version
// import { NextResponse } from "next/server";
// import { odooCreateUsers } from "@/app/lib/oddo";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
// console.log("Signup API payload:", body);
//     const userId = await odooCreateUsers({
//       name: body.name,
//       // login: body.email,
//       email: body.email,
//       phone: body.phone,
//     });
//     console.log("Created user with ID:", userId);

//     return NextResponse.json({
//       success: true,
//       userId,
//     });
//   } catch (error: any) {
//     console.error("Create user API error:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: error?.message || "User creation failed",
//       },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { odooCreateUsers } from "@/app/lib/oddo";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Signup API payload:", body);

    const { name, email, phone } = body;

    // ✅ Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and phone are required",
        },
        { status: 400 }
      );
    }

    // ✅ Create user in Odoo
    const userId = await odooCreateUsers({
      name,
      email,
      phone,
    });

    console.log("Created user with ID:", userId);

    return NextResponse.json({
      success: true,
      userId,
    });
  } catch (error: any) {
    console.error("Create user API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message || "User creation failed",
      },
      { status: 500 }
    );
  }
}
