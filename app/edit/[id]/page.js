import EditForm from "@/app/components/Editform";

let getTopics = async (id) => {
  const res = await fetch(`/api/new/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log("thre is an error");
  } else return res.json();
};

export default async function Edit({ params }) {
  console.log(params);
  let { id } = params;
  let { list } = await getTopics(id);
  const { name, weight, reps, sets } = list;

  return (
    <EditForm name={name} weight={weight} reps={reps} sets={sets} id={id} />
  );
}
