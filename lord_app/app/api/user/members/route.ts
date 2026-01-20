import { NextResponse } from "next/server";
import { odooCreateContact , odooFetchChildContacts} from "@/app/lib/oddo";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { user_id, name, email, phone } = body;

    if (!user_id || !name || !email || !phone) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const member = await odooCreateContact({
      parent_id: user_id,
      name,
      email,
      phone,
    });

    return NextResponse.json({ member });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

// export async function GET(req: Request) {
//   try {
//     const url = new URL(req.url);
//     const user_id = url.searchParams.get("user_id");

//     if (!user_id) return NextResponse.json({ members: [] });

//     const members = await odooFetchChildContacts(user_id); // implement in your odoo lib
//     return NextResponse.json({ members });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ members: [] });
//   }
// }
