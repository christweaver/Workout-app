import connectToDb from "@/db/mongodb";
import Program from "@/app/models/programSchema";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDb();
  let options = await Program.find();

  return NextResponse.json({ options });
}
