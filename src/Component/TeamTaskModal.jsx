import React, { useState } from 'react';

function TeamTaskModal({
    isOpen,
    setIsOpen,
    addTask,
    members
}) {

    const [taskText, setTaskText] = useState("");
    const [assignedTo, setAssignedTo] = useState(members[0] || "");

    if (!isOpen) return null;
    return (
        <>
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 sm:p-8 rounded-2xl sm:rounded-3xl w-full max-w-md border border-[#5BC0BE]/40 shadow-2xl shadow-[#5BC0BE]/40">
                    <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] bg-clip-text text-transparent mb-6 sm:mb-8">
                        Add Team Task
                    </h2>
                    <input
                        type="text"
                        placeholder="Task Name..."
                        value={taskText}
                        onChange={(e) => setTaskText(e.target.value)}
                        className="w-full p-3 sm:p-4 rounded-lg bg-[#0F172A] border-2 border-[#5BC0BE]/30 text-[#E5E7EB] placeholder-[#5BC0BE]/40 outline-none focus:border-[#5BC0BE] focus:shadow-lg focus:shadow-[#5BC0BE]/20 transition duration-300 font-medium mb-4 sm:mb-6 text-sm sm:text-base"
                    />
                    <select
                        value={assignedTo}
                        onChange={(e) => setAssignedTo(e.target.value)}
                        className="w-full p-3 sm:p-4 rounded-lg bg-[#0F172A] border-2 border-[#5BC0BE]/30 text-[#E5E7EB] outline-none focus:border-[#5BC0BE] focus:shadow-lg focus:shadow-[#5BC0BE]/20 transition duration-300 font-medium mb-6 sm:mb-8 text-sm sm:text-base cursor-pointer"
                    >
                        {members.map((member) => (
                            <option key={member} value={member} className="bg-[#0F172A]">
                                {member}
                            </option>
                        ))}
                    </select>
                    <div className="flex justify-end gap-3 sm:gap-4">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="px-4 sm:px-5 py-2.5 sm:py-3 border-2 border-red-400/50 text-red-400 rounded-lg hover:border-red-400 hover:bg-red-400/10 transition duration-300 font-semibold text-sm sm:text-base"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                if (!taskText.trim()) return;
                                addTask(taskText, assignedTo);
                                setTaskText("");
                                setAssignedTo(members[0] || "");
                                setIsOpen(false);
                            }}
                            className="px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] text-[#0F172A] rounded-lg font-bold shadow-lg shadow-[#5BC0BE]/30 hover:shadow-xl hover:shadow-[#5BC0BE]/50 transition duration-300 text-sm sm:text-base"
                        >
                            Add Task
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamTaskModal