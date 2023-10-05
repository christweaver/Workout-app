import connectToDb from "@/db/mongodb";
import Program from "@/app/models/programSchema";
import { NextResponse } from "next/server";

// export async function GET(req, { params }) {
//   let { type } = params;
//   await connectToDb();

//   let options = await Program.find({ type });

//   if (!options) {
//     return res.status(404).json({ error: "wtff" });
//   } else {
//     return NextResponse.json({ options }, { status: 200 });
//   }
// }

export async function GET(req, { params }) {
  let { type } = params;
  await connectToDb();

  const options = {
    maxTimeMS: 60000, // Increase the timeout as needed
  };

  let optionsData = await Program.find({ type }, null, options);

  return NextResponse.json({ options: optionsData }, { status: 200 });
}
