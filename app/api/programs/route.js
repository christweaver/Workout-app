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

  const options = {
    maxTimeMS: 60000, // Increase the timeout as needed
  };

  let optionsData = await Program.find({}, null, options);

  return NextResponse.json({ options: optionsData });
}
