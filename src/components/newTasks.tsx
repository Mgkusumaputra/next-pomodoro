import Link from "next/link";

export default function NewTasks() {
  return (
    <>
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-2xl font-medium">Tasks</h2>
        <Link
          className="border border-slate-300 text-slate-300 px-3 py-1 rounded-xl hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          Add Task
        </Link>
      </div>
      <ul className=""></ul>
    </>
  );
}
