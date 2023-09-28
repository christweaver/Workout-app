import Navbar from "@/app/components/Navbar";
import ProgramFinal from "../../../components/ProgramFinal";

export default function workoutProgram({ params }) {
  let { type } = params;
  let { level } = params;

  function test(level) {
    if (level === "Beginner") {
      return "You have selected the beginner program.";
    }

    if (level === "Intermediate") {
      return "You have selected the intermediate program.";
    } else if (level === "Expert") {
      return "You have selected the expert program.";
    }
  }

  let display = test(level);

  return (
    <div className="min-h-screen w-full  bg-discount-gradient">
      <Navbar />
      <ProgramFinal type={type} level={level} />
    </div>
  );
}
