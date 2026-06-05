import React, { useState, useEffect } from "react";
import { Trash2 } from "lucide-react"

function TodoPage() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const savedTasks = JSON.parse(
            localStorage.getItem("tasks")
        ) || [];

        setTasks(savedTasks);
    }, []);
    const toggleTask = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id
                ? { ...task, completed: !task.completed }
                : task
        );
        setTasks(updatedTasks);
        localStorage.setItem(
            "tasks",
            JSON.stringify(updatedTasks)
        );
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(
            (task) => task.id !== id
        );
        setTasks(updatedTasks);
        localStorage.setItem(
            "tasks",
            JSON.stringify(updatedTasks)
        );
    };

    const [searchTerm, setSearchTerm] = useState("")
    const [filter, setFilter] = useState("all")
    const filteredTasks = tasks.filter((task) => {
        const matchesSearch =
            task.text.toLowerCase().includes(
                searchTerm.toLowerCase()
            )
        if (filter === "pending")
            return matchesSearch && !task.completed
        if (filter === "completed")
            return matchesSearch && task.completed
        return matchesSearch
    })

    return (
        <div className="min-h-screen bg-[#0F172A] text-[#E5E7EB] p-10">
            <h1 className="text-5xl font-bold text-[#5BC0BE]">
                Todo Page
            </h1>
            <div className=" mt-8">
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#1E293B] border border-[#5BC0BE]/20 rounded-xl px-5 py-4 text-[#E5E7EB] outline-none focus:border-[#5BC0BE]"
                />
            </div>
            <div className="flex gap-4 mt-6">
                <button
                    onClick={() => setFilter("all")}
                    className={`px-5 py-2 rounded-lg ${filter === "all"
                            ? "bg-[#5BC0BE] text-[#0F172A]"
                            : "border border-[#5BC0BE] text-[#5BC0BE]"
                        }`}>
                    All
                </button>
                <button
                    onClick={() => setFilter("pending")}
                    className={`px-5 py-2 rounded-lg ${filter === "pending"
                            ? "bg-[#5BC0BE] text-[#0F172A]"
                            : "border border-[#5BC0BE] text-[#5BC0BE]"
                        }`}>
                    Pending
                </button>
                <button
                    onClick={() => setFilter("completed")}
                    className={`px-5 py-2 rounded-lg ${filter === "completed"
                            ? "bg-[#5BC0BE] text-[#0F172A]"
                            : "border border-[#5BC0BE] text-[#5BC0BE]"
                        }`}>
                    Completed
                </button>
            </div>
            <div className="mt-8 bg-[#1E293B] rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-[#5BC0BE] mb-5">
                    All Tasks
                </h2>
            </div>
            <div className="space-y-4 mt-6">

                {filteredTasks.length === 0 && (
                    <div className="text-center py-10">
                        <p className="text-xl text-[#94A3B8]">
                            No tasks found 🚀
                        </p>
                    </div>
                )}

                {filteredTasks.map((task) => (
                    <div
                        key={task.id}
                        className="flex items-center justify-between bg-[#1E293B] px-6 py-5 rounded-xl"
                    >
                        <div className="flex items-center gap-4">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(task.id)
                                }
                                className="w-5 h-5 accent-[#5BC0BE]"
                            />
                            <p
                                className={`text-lg ${task.completed
                                    ? "line-through text-[#94A3B8]"
                                    : "text-[#E5E7EB]"
                                    }`}
                            >
                                {task.text}
                            </p>
                        </div>
                        <div className="flex items-center gap-4">

                            <span className="text-[#94A3B8]">
                                {task.time}
                            </span>

                            <button
                                onClick={() => deleteTask(task.id)}
                                className="text-red-400 hover:text-red-500 transition"
                            >
                                <Trash2 size={20} />
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default TodoPage;