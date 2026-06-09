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
        <div className="w-full max-w-2xl mx-auto mt-6 sm:mt-8 md:mt-10 bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#5BC0BE]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl shadow-[#5BC0BE]/10 hover:shadow-[#5BC0BE]/20 transition duration-500">
            <div className="flex flex-col gap-4 mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#5BC0BE]">
                        Today's Tasks
                    </h2>
                    <p className="text-xs sm:text-sm text-[#94A3B8]">
                        {tasks.filter(task => !task.completed).length} tasks remaining
                    </p>
                </div>
                <div className="flex gap-2 sm:gap-3">

                    <Link
                        to="/todo"
                        className="px-3 sm:px-4 md:px-6 py-2 md:py-3 text-xs sm:text-sm border border-[#5BC0BE] text-[#5BC0BE] rounded-lg font-semibold hover:bg-[#5BC0BE] hover:text-[#0F172A] transition duration-300 whitespace-nowrap"
                    >
                        See More
                    </Link>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="px-3 sm:px-4 md:px-6 py-2 md:py-3 text-xs sm:text-sm bg-[#5BC0BE] text-[#0F172A] rounded-lg font-bold hover:shadow-lg hover:shadow-[#5BC0BE]/40 hover:scale-105 transition duration-300 whitespace-nowrap"
                    >
                        + Add Task
                    </button>

                </div>
            </div>
            <div className="space-y-5">

                {tasks.map((tasks) => (

                    <div
                        key={tasks.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 bg-[#1E293B] px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-2xl hover:bg-slate-700 transition duration-300"
                    >

                        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">

                            <input
                                type="checkbox"
                                checked={tasks.completed}
                                onChange={() => toggleTask(tasks.id)}
                                readOnly
                                className="w-5 h-5 accent-[#5BC0BE] flex-shrink-0"
                            />

                            <p
                                className={`text-xs sm:text-sm md:text-base lg:text-xl ${tasks.completed
                                    ? "line-through text-[#94A3B8]"
                                    : "text-[#E5E7EB]"
                                    }`}
                            >
                                {tasks.text}
                            </p>

                        </div>

                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 ml-8 sm:ml-0">

                            <span className="text-xs sm:text-sm text-[#94A3B8]">
                                {tasks.time}
                            </span>

                            <button
                                onClick={() => deleteTask(tasks.id)}
                                className="text-red-400 hover:text-red-300 transition duration-300 flex-shrink-0"
                            >
                                🗑️
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