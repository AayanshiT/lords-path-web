// import { NextResponse } from "next/server";
// import { odooSearchRead } from "@/app/lib/oddo";

// export async function POST(req: Request) {
//   const { phone } = await req.json();

//   if (!phone) {
//     return NextResponse.json(
//       { success: false, message: "Phone required" },
//       { status: 400 }
//     );
//   }

//   const users = await odooSearchRead(
//     "res.partner",
//     [["phone", "=", phone]],
//     ["id", "name", "email", "phone"]
//   );

//   const otp = Math.floor(100000 + Math.random() * 900000).toString();

// //   globalThis.OTP_STORE = globalThis.OTP_STORE || {};
// //   globalThis.OTP_STORE[phone] = otp;

//   console.log("OTP:", otp); // dev only

//   return NextResponse.json({
//     success: true,
//     isNewUser: users.length === 0,
//     user: users[0] || null,
//   });
// }
// import { NextResponse } from "next/server";
// import { signToken } from "@/app/lib/jwt";

// export async function POST(req: Request) {
//   const { user } = await req.json();

//   const token = signToken({
//     id: user.id,
//     phone: user.phone,
//   });

//   const res = NextResponse.json({ success: true });

//   res.headers.set("Authorization", `Bearer ${token}`);

//   return res;
// }
