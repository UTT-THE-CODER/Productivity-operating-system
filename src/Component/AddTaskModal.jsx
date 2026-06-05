import React, { useState } from 'react'

function AddTaskModal({ isOpen, setIsOpen, addTask }) {

    const [taskText, setTaskText] = useState("")
    const [taskTime, setTaskTime] = useState("")

    const handleAddTask = () => {

        if (!taskText || !taskTime) return

        addTask({
            id: Date.now(),
            text: taskText,
            time: taskTime,
            completed: false,
        })

        setTaskText("")
        setTaskTime("")
        setIsOpen(false)
    }

    if (!isOpen) return null
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 transition duration-300">
            <div className="w-125 bg-linear-to-br from-[#1E293B] to-[#0F172A] border border-[#5BC0BE]/20 rounded-2xl p-8 shadow-2xl shadow-[#5BC0BE]/20 transition duration-300">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-[#5BC0BE]">
                        Add New Task
                    </h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-[#94A3B8] hover:text-[#E7D8C9] text-2xl transition duration-300 hover:scale-110"
                    >
                        ✕
                    </button>
                </div>
                <div className="flex flex-col gap-5">
                    <input
                        type="text"
                        placeholder="Enter task..."
                        value = {taskText}
                        onChange ={
                            (e) => setTaskText(e.target.value)
                        }
                        className="w-full border border-[#5BC0BE]/20 rounded-lg px-5 py-3 bg-[#1E293B]/50 text-[#E5E7EB] outline-none transition duration-300 focus:border-[#5BC0BE] focus:bg-[#1E293B]/70 focus:shadow-[#5BC0BE]/20 focus:shadow-lg"
                    />
                    <input
                        type="time"
                        value={taskTime}
                        onChange={(e) => setTaskTime(e.target.value)}
                        className="w-full border border-[#5BC0BE]/20 rounded-lg px-5 py-3 bg-[#1E293B]/50 text-[#E5E7EB] outline-none transition duration-300 focus:border-[#5BC0BE] focus:bg-[#1E293B]/70 focus:shadow-[#5BC0BE]/20 focus:shadow-lg"
                    />
                    <button onClick = {handleAddTask} 
                    className="bg-[#5BC0BE] text-[#0F172A] py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-[#5BC0BE]/40 hover:scale-105 transition duration-300">
                        Add Task
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddTaskModal