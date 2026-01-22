import { NextResponse } from "next/server";
import { odooExecuteCreateAppointment } from "@/app/lib/oddo";

export async function POST(req: Request) {
  const body = await req.json();

  const appointmentId = await odooExecuteCreateAppointment({
    customer_id: body.customer_id,
    street: body.address.street,
    street2: body.address.street2,
    city: body.address.city,
    state: body.address.state,
    zip: body.address.zip,
    country: body.address.country,
    appointment_date: body.address.date,
    appointment_time: body.address.time,
  });

  return NextResponse.json({ success: true, appointmentId });
}
