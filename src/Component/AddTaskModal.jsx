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
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition duration-300 p-4 animate-fadeIn">
            <div className="w-full max-w-md bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#5BC0BE]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl shadow-[#5BC0BE]/40 transition duration-300">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] bg-clip-text text-transparent">
                        Add New Task
                    </h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-[#5BC0BE] hover:text-[#E5E7EB] text-2xl sm:text-3xl transition duration-300 hover:scale-125"
                    >
                        ✕
                    </button>
                </div>
                <div className="flex flex-col gap-4 sm:gap-6">
                    <input
                        type="text"
                        placeholder="Enter task..."
                        value = {taskText}
                        onChange ={
                            (e) => setTaskText(e.target.value)
                        }
                        className="w-full border-2 border-[#5BC0BE]/30 rounded-lg px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base bg-[#0F172A] text-[#E5E7EB] placeholder-[#5BC0BE]/40 outline-none transition duration-300 focus:border-[#5BC0BE] focus:bg-[#0F172A]/50 focus:shadow-lg focus:shadow-[#5BC0BE]/20 font-medium"
                    />
                    <input
                        type="time"
                        value={taskTime}
                        onChange={(e) => setTaskTime(e.target.value)}
                        className="w-full border-2 border-[#5BC0BE]/30 rounded-lg px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base bg-[#0F172A] text-[#E5E7EB] outline-none transition duration-300 focus:border-[#5BC0BE] focus:bg-[#0F172A]/50 focus:shadow-lg focus:shadow-[#5BC0BE]/20 font-medium"
                    />
                    <button onClick = {handleAddTask} 
                    className="bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] text-[#0F172A] py-3 sm:py-4 text-sm sm:text-base rounded-lg font-bold shadow-lg shadow-[#5BC0BE]/40 hover:shadow-xl hover:shadow-[#5BC0BE]/60 hover:scale-105 transition duration-300">
                        Add Task
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddTaskModal