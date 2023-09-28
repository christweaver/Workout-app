import connectToDb from "@/db/mongodb";
import Workout from "@/app/models/schema";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, reps, weight, sets, username } = await req.json();
  console.log(req);
  await connectToDb();
  await Workout.create({ name, reps, weight, sets, username });
  return NextResponse.json({ message: "NICE" });
}

export async function GET(req, res) {
  await connectToDb();
  let list = await Workout.find();

  return NextResponse.json({ list });
}
