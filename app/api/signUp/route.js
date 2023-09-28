import connectToDb from "@/db/mongodb";
import User from "@/app/models/userSchema";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { password, email } = await req.json();
  await connectToDb();
  await User.create({ password, email });
  return NextResponse.json({ mssg: "user logged in" });
}

// export async function POST(req, res) {
//     await connectToDb()
//     const {email} =  await req.json()

//       const user = await User.findOne({email})
//      console.log(user)
//       return NextResponse.json({user})
// }
