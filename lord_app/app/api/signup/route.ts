// import { NextResponse } from "next/server";
// import { odooCreateUsers } from "@/app/lib/oddo";

// export async function POST(req: Request) {
//   const body = await req.json();

//   const userId = await odooCreateUsers({
//     name: body.name,
//     phone: body.phone,
//     email: body.email,
//     login: body.email || `${body.phone}@nians.com`,
//     password: `Nians@${body.phone}`,
//   });

//   return NextResponse.json({ success: true, userId });
// }

// import { NextResponse } from "next/server";
// import { odooCreateUsers} from "@/app/lib/oddo";
// import { signToken } from "@/app/lib/jwt";

// export async function POST(req: Request) {
//   const payload = await req.json();

//   const userId = await odooCreateUsers(payload);

//   const token = signToken({
//     id: userId,
//     phone: payload.phone,
//   });

//   const res = NextResponse.json({ success: true });
//   res.headers.set("Authorization", `Bearer ${token}`);

//   return res;
// }

// import { NextResponse } from "next/server";
// import { odooCreateUsers} from "@/app/lib/oddo";

// interface SignupPayload {
//   name: string;
//   email: string;
//   phone: string;
//   gender?: string;
//   dob?: string;
// }

// export async function POST(req: Request) {
//   try {
//     const body: SignupPayload = await req.json();

//     const { name, email, phone, gender, dob } = body;

//     if (!name || !email || !phone) {
//       return NextResponse.json(
//         { success: false, message: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     const userId = await odooCreateUsers({
//     name: body.name,
//     phone: body.phone,
//     email: body.email,
//     login: body.email || `${body.phone}@nians.com`,
//     password: `Nians@${body.phone}`,
//   });
//    console.log("Created user with ID:", userId);
//     return NextResponse.json({
//       success: true,
//       userId,
//     });
//   } catch (error) {
//     console.error("Signup error:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to create user" },
//       { status: 500 }
//     );
//   }
// }


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
