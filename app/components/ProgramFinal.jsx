import GetProgramApi from "./GetProgramApi";

let getTopics = async (type) => {
  const res = await fetch(`http://localhost:3000/api/programs/${type}`, {
    cache: "no-store",
  });
  return res.json();
};
export default async function MuscleGroup({ type, level }) {
  let { options } = await getTopics(type);
  if (!type) {
    return <div>No 'type' selected.</div>;
  }

  // FILTERS TO FIND WORKOUTS THAT ARE LISTED AS COMPOUND
  let compEx = options.filter((word) => {
    return word.compound === "true";
  });

  function getRandomSortValue() {
    return Math.random() * 2 - 1;
  }

  // Randomize the order of compEx array
  compEx.sort((a, b) => getRandomSortValue());

  //  FILTER TO FIND WORKOUTS THAT ARE NON COMPOUND
  let nonCompex = options.filter((uno) => {
    return !uno.compound;
  });

  function getRandomSortValue() {
    return Math.random() * 2 - 1;
  }

  // Randomize the order of compEx array
  nonCompex.sort((a, b) => getRandomSortValue());

  // SPLICES COMPOUND EXERCISES BASED OFF OF LEVEL BEGINNER 2 - INTERMEDIATE 3 -EXPERT 4
  function compound(level) {
    if (level === "Beginner") {
      compEx.splice(2);
      return compEx;
    }
    if (level === "Intermediate") {
      compEx.splice(3);
      return compEx;
    } else if (level === "Expert") {
      compEx.splice(4);
      return compEx;
    }
  }

  compound(level);

  //  SPLICES NON COMPOUND EXERCISES BEGGIN. 2 - INTER. 3 - EXPERT 4
  function nonCompound(level) {
    if (level === "Beginner") {
      nonCompex.splice(2);
      return nonCompex;
    }

    if (level === "Intermediate") {
      nonCompex.splice(3);
      return nonCompex;
    } else if (level === "Expert") {
      nonCompex.splice(4);
      return nonCompex;
    }
  }
  nonCompound(level);

  // MERGES THE TWO BACK TOGETHER FOR DISPLAY
  let workout = [...compEx, ...nonCompex];

  return (
    <div>
      <GetProgramApi workout={workout} key={workout._id} />
    </div>
  );
}
