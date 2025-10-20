import { useState } from "react";
import { Task } from "../models/Task";

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (title: string) => {
        if (title.trim() === "") return;
        const newTask: Task = { id: Date.now().toString(), title: title.trim() };
        setTasks((prev) => [...prev, newTask]);
    };

    const deleteTask = (id: string) => {
        setTasks((prev) => prev.filter((t) => t.id !== id));
    };

    return { tasks, addTask, deleteTask };

}