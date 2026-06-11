import React, { useState, useEffect } from 'react'
import AddTaskModal from './AddTaskModal'
import { Link } from "react-router-dom"
function TodoPreview() {
    const [isOpen, setIsOpen] = useState(false);
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks")
        return savedTasks
            ? JSON.parse(savedTasks)
            : [
                {
                    id: 1,
                    text: "Complete React Dashboard",
                    time: "11:00 PM",
                    completed: false,
                },
                {
                    id: 2,
                    text: "Study DSA",
                    time: "9:00 PM",
                    completed: false,
                },
            ]
    })
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const addTask = (newTask) => {
        setTasks([...tasks, newTask])
    }

    const deleteTask = (id) => {
        setTasks(
            tasks.filter((tasks) => tasks.id != id)
        )
    }

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        )
    }

    return (
        <div className="w-full max-w-2xl mx-auto mt-8 sm:mt-10 md:mt-12 bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#5BC0BE]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-[#5BC0BE]/20 hover:shadow-[#5BC0BE]/30 hover:border-[#5BC0BE]/50 transition duration-500">
            <div className="flex flex-col gap-6 mb-8 sm:mb-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] bg-clip-text text-transparent">
                        Today's Tasks
                    </h2>
                    <p className="text-xs sm:text-sm text-[#5BC0BE] font-semibold">
                        {tasks.filter(task => !task.completed).length} tasks remaining
                    </p>
                </div>
                <div className="flex gap-3 sm:gap-4 flex-wrap">

                    <Link
                        to="/todo"
                        className="px-4 sm:px-6 md:px-8 py-2.5 md:py-3 text-xs sm:text-sm font-semibold border-2 border-[#5BC0BE] text-[#5BC0BE] rounded-lg hover:bg-[#5BC0BE]/10 hover:border-[#06B6D4] transition duration-300 whitespace-nowrap"
                    >
                        See More
                    </Link>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="px-4 sm:px-6 md:px-8 py-2.5 md:py-3 text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] text-[#0F172A] rounded-lg shadow-lg shadow-[#5BC0BE]/30 hover:shadow-xl hover:shadow-[#5BC0BE]/50 hover:scale-105 transition duration-300 whitespace-nowrap"
                    >
                        + Add Task
                    </button>

                </div>
            </div>
            <div className="space-y-3 sm:space-y-4">

                {tasks.map((tasks) => (

                    <div
                        key={tasks.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 bg-[#1E293B]/60 hover:bg-[#1E293B]/80 px-4 sm:px-6 md:px-7 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl border border-[#5BC0BE]/10 hover:border-[#5BC0BE]/30 transition duration-300"
                    >

                        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">

                            <input
                                type="checkbox"
                                checked={tasks.completed}
                                onChange={() => toggleTask(tasks.id)}
                                readOnly
                                className="w-5 h-5 accent-[#5BC0BE] cursor-pointer flex-shrink-0"
                            />

                            <p
                                className={`text-xs sm:text-sm md:text-base lg:text-lg font-medium ${tasks.completed
                                    ? "line-through text-[#5BC0BE]/50"
                                    : "text-[#E5E7EB]"
                                    }`}
                            >
                                {tasks.text}
                            </p>

                        </div>

                        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 ml-8 sm:ml-0">

                            <span className="text-xs sm:text-sm text-[#5BC0BE]/70 font-medium whitespace-nowrap">
                                {tasks.time}
                            </span>

                            <button
                                onClick={() => deleteTask(tasks.id)}
                                className="text-red-400/70 hover:text-red-400 transition duration-300 flex-shrink-0 text-lg"
                            >
                                ✕
                            </button>

                        </div>
                    </div>

                ))}

            </div>
            <AddTaskModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                addTask={addTask}
            />
        </div>

    )
}

export default TodoPreview;