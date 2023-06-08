"use client";

import NewTasks from "@/components/newTasks";
import Timer from "@components/timer";
import Navbar from "@components/navbar";

export default function Home() {

  return (
    <>
      <div className="max-w-lg w-full mx-auto">
        <Navbar />
        <Timer />
        <NewTasks />
      </div>
    </>
  );
}
