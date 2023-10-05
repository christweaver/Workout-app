import Navbar from "../components/Navbar";
import AllWorkouts from "../components/AllWorkouts";
let getTopics = async () => {
  const res = await fetch("/api/new", {
    cache: "no-store",
  });
  return res.json();
};

export default async function Login() {
  let { list } = await getTopics();
  return (
    <div className="flex-col w-full min-h-screen  bg-cover bg-fixed bg-top  bg-no-repeat second-image  ">
      <Navbar />
      <AllWorkouts data={list} />
    </div>
  );
}
