import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST() {
  const order = await razorpay.orders.create({
    amount: 50000, // ₹500 (amount * 100)
    currency: "INR",
    receipt: "order_rcptid_11",
  });

  return NextResponse.json(order);
}
