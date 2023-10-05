"use client";
export default function Deleted({ id }) {
  let goodbye = async function () {
    const res = await fetch(`/api/new/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <button onClick={goodbye} className="text-[18px]">
      Delete
    </button>
  );
}
