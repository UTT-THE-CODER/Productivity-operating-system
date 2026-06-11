import React, { useState, useEffect } from 'react';
import PriorityModal from "../Component/PriorityModal";
function Priority() {
    const [doFirstTasks, setDoFirstTasks] = useState([]);
    const [scheduleTasks, setScheduleTasks] = useState([]);
    const [delegateTasks, setDelegateTasks] = useState([]);
    const [eliminateTasks, setEliminateTasks] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedQuadrant, setSelectedQuadrant] = useState("");
    const [loaded, setLoaded] = useState(false);

    const addTask = (quadrant, taskText) => {

        const newTask = {
            id: Date.now(),
            text: taskText,
        };

        if (quadrant === "doFirst") {
            setDoFirstTasks([...doFirstTasks, newTask]);
        }

        if (quadrant === "schedule") {
            setScheduleTasks([...scheduleTasks, newTask]);
        }

        if (quadrant === "delegate") {
            setDelegateTasks([...delegateTasks, newTask]);
        }

        if (quadrant === "eliminate") {
            setEliminateTasks([...eliminateTasks, newTask]);
        }
    };

    useEffect(() => {
        const savedData = JSON.parse(
            localStorage.getItem("priorityTasks")
        );

        if (savedData) {
            setDoFirstTasks(savedData.doFirst || []);
            setScheduleTasks(savedData.schedule || []);
            setDelegateTasks(savedData.delegate || []);
            setEliminateTasks(savedData.eliminate || []);
        }

        setLoaded(true);

    }, []);

    useEffect(() => {

        if (!loaded) return;

        localStorage.setItem(
            "priorityTasks",
            JSON.stringify({
                doFirst: doFirstTasks,
                schedule: scheduleTasks,
                delegate: delegateTasks,
                eliminate: eliminateTasks,
            })
        );

    }, [
        loaded,
        doFirstTasks,
        scheduleTasks,
        delegateTasks,
        eliminateTasks,
    ]);

    const deleteTask = (quadrant, id) => {

        if (quadrant === "doFirst") {
            setDoFirstTasks(
                doFirstTasks.filter(task => task.id !== id)
            );
        }

        if (quadrant === "schedule") {
            setScheduleTasks(
                scheduleTasks.filter(task => task.id !== id)
            );
        }

        if (quadrant === "delegate") {
            setDelegateTasks(
                delegateTasks.filter(task => task.id !== id)
            );
        }

        if (quadrant === "eliminate") {
            setEliminateTasks(
                eliminateTasks.filter(task => task.id !== id)
            );
        }
    };
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-[#E5E7EB] p-4 sm:p-6 md:p-10 pb-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] bg-clip-text text-transparent mb-8 md:mb-12">
                    Priority Matrix
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl p-6 sm:p-7 border-2 border-red-400/40 min-h-[250px] hover:border-red-400/60 transition duration-300 shadow-lg shadow-red-400/10">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:mb-4">
                            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
                                Do First
                            </h2>
                            <button
                                onClick={() => {
                                    setSelectedQuadrant("doFirst");
                                    setIsOpen(true);
                                }}
                                className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm bg-red-400/20 text-red-400 rounded-lg hover:bg-red-400/30 transition font-semibold w-fit">
                                + Add
                            </button>
                        </div>
                        <div className="mt-4 sm:mt-6 space-y-2">
                            {doFirstTasks.map((task) => (
                                <div
                                    key={task.id}
                                    className="bg-[#0F172A] p-3 sm:p-4 rounded-lg flex justify-between items-center text-sm sm:text-base border border-red-400/20 hover:border-red-400/40 transition duration-200 group"
                                >
                                    <span className="text-[#E5E7EB] group-hover:text-red-300 transition">{task.text}</span>

                                    <button
                                        onClick={() =>
                                            deleteTask("doFirst", task.id)
                                        }
                                        className="text-red-400/60 hover:text-red-400 transition"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl p-6 sm:p-7 border-2 border-yellow-400/40 min-h-[250px] hover:border-yellow-400/60 transition duration-300 shadow-lg shadow-yellow-400/10">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:mb-4">
                            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                                Schedule
                            </h2>
                            <button
                                onClick={() => {
                                    setSelectedQuadrant("schedule");
                                    setIsOpen(true);
                                }}
                                className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm bg-yellow-400/20 text-yellow-400 rounded-lg hover:bg-yellow-400/30 transition font-semibold w-fit">
                                + Add
                            </button>
                        </div>
                        <div className="mt-4 sm:mt-6 space-y-2">
                            {scheduleTasks.map((task) => (
                                <div
                                    key={task.id}
                                    className="bg-[#0F172A] p-3 sm:p-4 rounded-lg flex justify-between items-center text-sm sm:text-base border border-yellow-400/20 hover:border-yellow-400/40 transition duration-200 group"
                                >
                                    <span className="text-[#E5E7EB] group-hover:text-yellow-300 transition">{task.text}</span>

                                    <button
                                        onClick={() =>
                                            deleteTask("schedule", task.id)
                                        }
                                        className="text-red-400/60 hover:text-red-400 transition"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl p-6 sm:p-7 border-2 border-blue-400/40 min-h-[250px] hover:border-blue-400/60 transition duration-300 shadow-lg shadow-blue-400/10">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:mb-4">
                            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                                Delegate
                            </h2>
                            <button
                                onClick={() => {
                                    setSelectedQuadrant("delegate");
                                    setIsOpen(true);
                                }}
                                className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm bg-blue-400/20 text-blue-400 rounded-lg hover:bg-blue-400/30 transition font-semibold w-fit">
                                + Add
                            </button>
                        </div>
                        <div className="mt-4 sm:mt-6 space-y-2">
                            {delegateTasks.map((task) => (
                                <div
                                    key={task.id}
                                    className="bg-[#0F172A] p-3 sm:p-4 rounded-lg flex justify-between items-center text-sm sm:text-base border border-blue-400/20 hover:border-blue-400/40 transition duration-200 group"
                                >
                                    <span className="text-[#E5E7EB] group-hover:text-blue-300 transition">{task.text}</span>

                                    <button
                                        onClick={() =>
                                            deleteTask("delegate", task.id)
                                        }
                                        className="text-blue-400/60 hover:text-blue-400 transition"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl p-6 sm:p-7 border-2 border-gray-400/40 min-h-[250px] hover:border-gray-400/60 transition duration-300 shadow-lg shadow-gray-400/10">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:mb-4">
                            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
                                Eliminate
                            </h2>
                            <button
                                onClick={() => {
                                    setSelectedQuadrant("eliminate");
                                    setIsOpen(true);
                                }}
                                className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm bg-gray-400/20 text-gray-400 rounded-lg hover:bg-gray-400/30 transition font-semibold w-fit">
                                + Add
                            </button>
                        </div>
                        <div className="mt-4 sm:mt-6 space-y-2">
                            {eliminateTasks.map((task) => (
                                <div
                                    key={task.id}
                                    className="bg-[#0F172A] p-3 sm:p-4 rounded-lg flex justify-between items-center text-sm sm:text-base border border-gray-400/20 hover:border-gray-400/40 transition duration-200 group"
                                >
                                    <span className="text-[#E5E7EB] group-hover:text-gray-300 transition">{task.text}</span>

                                    <button
                                        onClick={() =>
                                            deleteTask("eliminate", task.id)
                                        }
                                        className="text-gray-400/60 hover:text-gray-400 transition"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <PriorityModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                addTask={addTask}
                selectedQuadrant={selectedQuadrant}
            />
        </>
    )
}

export default Priority;