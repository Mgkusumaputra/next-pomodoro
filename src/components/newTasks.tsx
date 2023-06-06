"use client";

import { useState } from "react";
import useTasks from "@hooks/useTasks";
import { Close } from "./icons/close";

const NewTasks = () => {
  const [newTask, setNewTask] = useState("");
  const [showInput, setShowInput] = useState(false);
  const { tasks, addTask, deleteTask } = useTasks();

  const handleAddTask = () => {
    addTask({
      id: Date.now(),
      title: newTask,
    });
    setNewTask("");
    setShowInput(false);
  };

  const handleDeleteTask = (id: number) => {
    deleteTask(id);
  };

  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-2xl font-medium mb-3">Tasks</h2>
        <ul>
          {tasks.map((task) => (
            <li className="" key={task.id}>
              {task.title}
              <button onClick={() => handleDeleteTask(task.id)}>
                <Close />
              </button>
            </li>
          ))}
        </ul>
        {showInput ? (
          <div className="flex flex-col bg-gray-800">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="What are you working on?"
            />
            <button
              className="border border-slate-300 text-slate-300 px-3 py-1 rounded-xl hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
              onClick={handleAddTask}
            >
              Save
            </button>
          </div>
        ) : (
          <button
            className="border border-slate-300 text-slate-300 px-3 py-1 rounded-xl hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            onClick={() => setShowInput(true)}
          >
            Add Task
          </button>
        )}
      </div>
    </>
  );

  // return (
  //   <>
  //     <div className="flex justify-between items-center mb-4 ">
  //       <h2 className="text-2xl font-medium">Tasks</h2>
  //       <Link
  //         className="border border-slate-300 text-slate-300 px-3 py-1 rounded-xl hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
  //         href="/new"
  //       >
  //         Add Task
  //       </Link>
  //     </div>
  //     <ul className=""></ul>
  //   </>
  // );
};

export default NewTasks;
