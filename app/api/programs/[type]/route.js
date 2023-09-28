import connectToDb from "@/db/mongodb";
import Program from "@/app/models/programSchema";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  let { type } = params;
  await connectToDb();

  let options = await Program.find({ type });

  if (!options) {
    return res.status(404).json({ error: "wtff" });
  } else {
    return NextResponse.json({ options }, { status: 200 });
  }
}
