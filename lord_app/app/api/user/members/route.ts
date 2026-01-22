import { NextResponse } from "next/server";
import { odooCreateContact, odooFetchChildContacts } from "@/app/lib/oddo";

/* ADD MEMBER */
export async function POST(req: Request) {
  try {
    const { user_id, name, email, phone } = await req.json();

    if (!user_id || !name || !email || !phone) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const memberId = await odooCreateContact({
      parent_id: Number(user_id), // 👈 VERY IMPORTANT
      name,
      email,
      phone,
    });

    // 👇 frontend ko FULL object bhejo
    const member = {
      id: memberId,
      name,
      email,
      phone,
    };

    return NextResponse.json({ member });

    return NextResponse.json({ member });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

/* GET MEMBERS (ON REFRESH) */
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const user_id = url.searchParams.get("user_id");

    if (!user_id) return NextResponse.json({ members: [] });

    const members = await odooFetchChildContacts(Number(user_id));
    return NextResponse.json({ members });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ members: [] });
  }
}
