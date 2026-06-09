import React, { useState } from "react";
function PriorityModal({ isOpen, setIsOpen, addTask, selectedQuadrant }) {
    const [taskText, setTaskText] = useState("");
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50">
            <div className="bg-[#1E293B] p-6 rounded-xl sm:rounded-2xl w-full max-w-md">
                <h2 className="text-xl sm:text-2xl text-[#5BC0BE] font-bold mb-4">
                    Add Priority Task
                </h2>
                <input
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Enter Task..."
                    className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg bg-white border border-[#5BC0BE]/20"
                />
                <div className="flex justify-end gap-2 sm:gap-3 mt-4 sm:mt-5">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="px-3 sm:px-4 py-2 text-sm border border-red-400 text-red-400 rounded-lg"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            if (!taskText.trim()) return;

                            addTask(selectedQuadrant, taskText);

                            setTaskText("");
                            setIsOpen(false);
                        }}
                        className="px-3 sm:px-4 py-2 text-sm bg-[#5BC0BE] text-[#0F172A] rounded-lg font-bold"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PriorityModal;