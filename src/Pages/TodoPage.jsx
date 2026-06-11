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
        <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-[#E5E7EB] p-4 sm:p-6 md:p-10 pb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] bg-clip-text text-transparent mb-8 md:mb-10">
                Todo Page
            </h1>
            <div className="mt-6 sm:mt-8">
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#1E293B] border-2 border-[#5BC0BE]/30 rounded-lg px-5 sm:px-6 py-3 sm:py-4 text-[#E5E7EB] placeholder-[#5BC0BE]/40 outline-none focus:border-[#5BC0BE] focus:shadow-lg focus:shadow-[#5BC0BE]/20 transition duration-300 font-medium"
                />
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
                <button
                    onClick={() => setFilter("all")}
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold transition duration-300 ${filter === "all"
                            ? "bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] text-[#0F172A] shadow-lg shadow-[#5BC0BE]/40"
                            : "border-2 border-[#5BC0BE]/50 text-[#5BC0BE] hover:border-[#5BC0BE] hover:bg-[#5BC0BE]/10"
                        }`}>
                    All
                </button>
                <button
                    onClick={() => setFilter("pending")}
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold transition duration-300 ${filter === "pending"
                            ? "bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] text-[#0F172A] shadow-lg shadow-[#5BC0BE]/40"
                            : "border-2 border-[#5BC0BE]/50 text-[#5BC0BE] hover:border-[#5BC0BE] hover:bg-[#5BC0BE]/10"
                        }`}>
                    Pending
                </button>
                <button
                    onClick={() => setFilter("completed")}
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold transition duration-300 ${filter === "completed"
                            ? "bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] text-[#0F172A] shadow-lg shadow-[#5BC0BE]/40"
                            : "border-2 border-[#5BC0BE]/50 text-[#5BC0BE] hover:border-[#5BC0BE] hover:bg-[#5BC0BE]/10"
                        }`}>
                    Completed
                </button>
            </div>
            <div className="mt-8 sm:mt-10 bg-[#1E293B]/40 rounded-2xl p-4 sm:p-6">
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] bg-clip-text text-transparent mb-6">
                    All Tasks
                </h2>
            </div>
            <div className="space-y-3 sm:space-y-4 mt-6">

                {filteredTasks.length === 0 && (
                    <div className="text-center py-12 sm:py-16">
                        <p className="text-lg sm:text-2xl text-[#5BC0BE]/60">
                            No tasks found 🚀
                        </p>
                    </div>
                )}

                {filteredTasks.map((task) => (
                    <div
                        key={task.id}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 bg-[#1E293B]/60 hover:bg-[#1E293B]/80 px-4 sm:px-6 py-4 sm:py-5 rounded-lg sm:rounded-xl border border-[#5BC0BE]/10 hover:border-[#5BC0BE]/30 transition duration-300"
                    >
                        <div className="flex items-center gap-3 sm:gap-4">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(task.id)
                                }
                                className="w-5 h-5 accent-[#5BC0BE] cursor-pointer"
                            />
                            <p
                                className={`text-sm sm:text-base md:text-lg font-medium ${task.completed
                                    ? "line-through text-[#5BC0BE]/50"
                                    : "text-[#E5E7EB]"
                                    }`}
                            >
                                {task.text}
                            </p>
                        </div>
                        <div className="flex items-center gap-3 sm:gap-4">

                            <span className="text-xs sm:text-sm text-[#5BC0BE]/70 font-medium whitespace-nowrap">
                                {task.time}
                            </span>

                            <button
                                onClick={() => deleteTask(task.id)}
                                className="text-red-400/70 hover:text-red-400 transition duration-300"
                            >
                                <Trash2 size={18} />
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default TodoPage;