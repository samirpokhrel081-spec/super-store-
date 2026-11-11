import { NextResponse } from "next/server";
// Payment gateway integration must be implemented with the official provider SDK/API.
// Never trust a client-side "success" redirect as proof of payment.
export async function POST() {
  return NextResponse.json(
    { error: "Payment provider is not configured. Add merchant credentials and implement server-side initiation and verification." },
    { status: 501 }
  );
}