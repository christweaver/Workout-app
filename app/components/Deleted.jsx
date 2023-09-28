"use client";
export default function Deleted({ id }) {
  let goodbye = async function () {
    const res = await fetch(`http://localhost:3000/api/new/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <button onClick={goodbye} className="text-[18px]">
      Delete
    </button>
  );
}
