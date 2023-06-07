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
      <div className="flex flex-col space-y-3">
        <h2 className="text-2xl font-medium">Tasks</h2>
        <ul className="flex flex-col space-y-3 mb-3">
          {tasks.map((task) => (
            <li
              className="w-full p-3 flex items-center bg-slate-600 rounded-md text-lg"
              key={task.id}
            >
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="mr-1 flex items-center justify-center rounded-full bg-gray-800 w-7 h-7"
              >
                <Close />
              </button>
              <span className="text-xl inline-block align-text-middle">
                {task.title}
              </span>
            </li>
          ))}
        </ul>
        {showInput ? (
          <div className="flex flex-col p-3 rounded-md bg-slate-600 ">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="What are you working on?"
              className="mb-3 p-1 border-none bg-slate-600 text-xl focus:caret-slate-100 focus:outline-none placeholder:italic placeholder:text-xl"
              autoFocus

            />
            <button
              className="border-2 border-slate-300 text-slate-300 px-3 py-2 mt-3 rounded-md hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
              onClick={handleAddTask}
            >
              <p className="text-xl">Save</p>
            </button>
          </div>
        ) : (
          <button
            className="border-2 border-dashed border-slate-300 text-slate-300 px-3 py-2 mt-3 rounded-md hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            onClick={() => setShowInput(true)}
          >
            <p className="text-xl">Add Task</p>
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
