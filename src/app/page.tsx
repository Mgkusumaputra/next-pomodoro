"use client";

import NewTasks from "@/components/newTasks";
import Timer from "@components/timer";

export default function Home() {

  return (
    <>
      <div className="">
        <Timer />
        <NewTasks />
      </div>
    </>
  );
}
