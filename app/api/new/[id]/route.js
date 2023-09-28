import Workout from "@/app/models/schema";
import connectToDb from "@/db/mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  let { id } = params;
  await connectToDb();
  let list = await Workout.findOne({ _id: id });

  if (!list) {
    return res.status(404).json({ error: "wtff" });
  } else {
    return NextResponse.json({ list }, { status: 200 });
  }
}

export async function PATCH(req, { params }) {
  let { id } = params;
  let {
    newName: name,
    newReps: reps,
    newWeight: weight,
    newSets: sets,
  } = await req.json();
  await connectToDb();
  await Workout.findByIdAndUpdate(id, { name, reps, weight, sets });
  return NextResponse.json({ message: "topic updated" });
}

export async function DELETE(req, { params }) {
  let { id } = params;
  await connectToDb();
  await Workout.findByIdAndDelete(id);
  return NextResponse.json({ message: "deleted" });
}
