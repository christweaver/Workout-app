import connectToDb from "@/db/mongodb";
import Program from "@/app/models/programSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, reps, weight, sets, username } = await req.json();
  console.log(req);
  await connectToDb();
  await Workout.create({ name, reps, weight, sets, username });
  return NextResponse.json({ message: "NICE" });
}

export async function GET() {
  await connectToDb();

  const time = {
    maxTimeMS: 60000,
  };

  let options = await Program.find({}, null, time);

  return NextResponse.json({ options });
}
