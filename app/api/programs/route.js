import connectToDb from "@/db/mongodb";
import Program from "@/app/models/programSchema";
import { NextResponse } from "next/server";

// export async function GET() {
//   await connectToDb();
//   let options = await Program.find();

//   return NextResponse.json({ options });
// }

// import connectToDb from "@/db/mongodb";
// import Program from "@/app/models/programSchema";
// import { NextResponse } from "next/server";

export async function GET() {
  await connectToDb();

  const time = {
    maxTimeMS: 60000, // Increase the timeout as needed
  };

  let options = await Program.find({}, null, time);

  return NextResponse.json({ options });
}
