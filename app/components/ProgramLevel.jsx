"use client";
import Link from "next/link";
import { useState } from "react";
export default function WorkoutPlans({ type }) {
  let [level, setLevel] = useState("");
  console.log(level);
  function settLevel(e) {
    setLevel(e.target.innerText);
    console;
  }
  return (
    <div className="flex justify-between flex-row">
      <div className="border-2 w-40 h-48 rounded-xl ml-36  bg-white text-center text-black hover:bg-gray-200">
        <Link
          href={`/workoutProgram/${level}/${type}`}
          onMouseEnter={settLevel}
        >
          <h1 className="text-[20px] font-bold pt-2">Beginner</h1>
        </Link>

        <h2 className="pt-2 font-poppins">
          This displays four workouts including two compound exercies and two
          accessory movements.
        </h2>
      </div>

      <div className="border-2 w-40 h-48 rounded-xl ml-10 bg-white text-center text-black hover:bg-gray-200">
        <Link
          href={`/workoutProgram/${level}/${type}`}
          onMouseEnter={settLevel}
        >
          <h1 className="text-[20px] font-bold pt-2">Intermediate</h1>
        </Link>
        <h2 className="pt-2">
          This displays six workouts including three compound exercies and three
          accessory movements.
        </h2>
      </div>
      <div className="border-2 w-40 h-48 rounded-xl ml-10 mr-32 bg-white text-center text-black hover:bg-gray-200">
        <Link
          href={`/workoutProgram/${level}/${type}`}
          onMouseEnter={settLevel}
        >
          <h1 className="text-[20px] font-bold pt-2">Expert</h1>
        </Link>
        <h2 className="pt-2">
          This displays eight workouts including four compound exercies and four
          accessory movements.
        </h2>
      </div>
    </div>
  );
}
