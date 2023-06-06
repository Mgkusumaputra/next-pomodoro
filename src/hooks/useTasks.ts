import { useEffect, useState } from "react";

type TodoItemProps = {
  id: number;
  title: string;
};

const useTasks = () => {
  const [tasks, setTask] = useState<TodoItemProps[]>([]);

  useEffect(() => {
    const storedTask = JSON.parse(
      localStorage.getItem("task") || "[]"
    ) as TodoItemProps[];
    setTask(storedTask);
  }, []);

  const addTask = (newTask: TodoItemProps) => {
    const updatedTask = [...tasks, newTask];
    setTask(updatedTask);
    localStorage.setItem("task", JSON.stringify(updatedTask));
  };

  const deleteTask = (id: number) => {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTask(updatedTask);
    localStorage.setItem('task', JSON.stringify(updatedTask));
  };

  return {
    tasks,
    addTask,
    deleteTask
  }
};

export default useTasks;
