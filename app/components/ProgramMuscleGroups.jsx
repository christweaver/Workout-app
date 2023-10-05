"use client";
import { useState } from "react";
import ProgramLevel from "./ProgramLevel";
export default function Login() {
  let [type, setType] = useState(null);

  function settType(e) {
    setType(e.target.innerText);
  }
  return (
    <div className="py-5">
      <h1 className="pb-6 text-white text-[30px] text-center font-bold">
        First, choose the muscles you would like to target
      </h1>
      <div className="flex justify-between flex-row pb-10 pl-5">
        <button
          onClick={settType}
          className="font-bold text-black text-[20px] border-2 w-40 h-40 rounded-xl ml-32 bg-white hover:bg-gray-200"
        >
          Chest and triceps
        </button>
        <button
          onClick={settType}
          className="font-bold text-[20px] border-2 w-40 h-40 rounded-xl ml-2 bg-white text-black hover:bg-gray-200"
        >
          Back and biceps
        </button>
        <button
          onClick={settType}
          className="font-bold text-[20px] border-2 w-40 h-40 rounded-xl bg-white text-black hover:bg-gray-200 mr-32"
        >
          Legs
        </button>
      </div>

      <h1 className="pb-6 text-center text-white text-[30px] font-bold">
        Next, choose your difficulty level
      </h1>
      <ProgramLevel type={type} />
    </div>
  );
}
