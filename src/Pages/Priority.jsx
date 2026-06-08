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
            <div className="min-h-screen bg-[#0F172A] text-[#E5E7EB] p-4 md:p-10">
                <h1 className="text-3xl md:text-5xl font-bold text-[#5BC0BE] mb-8">
                    Priority Matrix
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#1E293B] rounded-2xl p-6 border border-red-400/20 min-h-[250px]">
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="text-2xl font-bold text-red-400 mb-3">
                                Do First
                            </h2>
                            <button
                                onClick={() => {
                                    setSelectedQuadrant("doFirst");
                                    setIsOpen(true);
                                }}
                                className="px-3 py-1 text-sm bg-red-400/20 text-red-400 rounded-lg hover:bg-red-400/30 transition">
                                +Add
                            </button>
                        </div>
                        <div className="mt-4 space-y-2">
                            {doFirstTasks.map((task) => (
                                <div
                                    key={task.id}
                                    className="bg-[#0F172A] p-3 rounded-lg flex justify-between items-center"
                                >
                                    <span>{task.text}</span>

                                    <button
                                        onClick={() =>
                                            deleteTask("doFirst", task.id)
                                        }
                                        className="text-red-400"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-[#1E293B] rounded-2xl p-6 border border-yellow-400/20 min-h-[250px]">
                        <div className="flex items-center justify-between mb-3">
                            <h2 className=" text-2xl font-bold text-yellow-400 mb-3">
                                Schedule
                            </h2>
                            <button
                                onClick={() => {
                                    setSelectedQuadrant("schedule");
                                    setIsOpen(true);
                                }}
                                className="px-3 py-1 text-sm bg-yellow-400/20 text-yellow-400 rounded-lg hover:bg-yellow-400/30 transition">
                                +Add
                            </button>
                        </div>
                        <div className="mt-4 space-y-2">
                            {scheduleTasks.map((task) => (
                                <div
                                    key={task.id}
                                    className="bg-[#0F172A] p-3 rounded-lg flex justify-between items-center"
                                >
                                    <span>{task.text}</span>

                                    <button
                                        onClick={() =>
                                            deleteTask("schedule", task.id)
                                        }
                                        className="text-red-400"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-[#1E293B] rounded-2xl p-6 border border-blue-400/20 min-h-[250px]">
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="text-2xl font-bold text-blue-400  mb-3">
                                Delegate
                            </h2>
                            <button
                                onClick={() => {
                                    setSelectedQuadrant("delegate");
                                    setIsOpen(true);
                                }}
                                className="px-3 py-1 text-sm bg-blue-400/20 text-blue-400 rounded-lg hover:bg-blue-400/30 transition">
                                +Add
                            </button>
                        </div>
                        <div className="mt-4 space-y-2">
                            {delegateTasks.map((task) => (
                                <div
                                    key={task.id}
                                    className="bg-[#0F172A] p-3 rounded-lg flex justify-between items-center"
                                >
                                    <span>{task.text}</span>

                                    <button
                                        onClick={() =>
                                            deleteTask("delegate", task.id)
                                        }
                                        className="text-red-400"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-[#1E293B] rounded-2xl p-6 border border-gray-400/20 min-h-[250px]">
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="text-2xl font-bold text-gray-400  mb-3">
                                Eliminate
                            </h2>
                            <button
                                onClick={() => {
                                    setSelectedQuadrant("eliminate");
                                    setIsOpen(true);
                                }}
                                className="px-3 py-1 text-sm bg-gray-400/20 text-gray-400 rounded-lg hover:bg-gray-400/30 transition">
                                +Add
                            </button>
                        </div>
                        <div className="mt-4 space-y-2">
                            {eliminateTasks.map((task) => (
                                <div
                                    key={task.id}
                                    className="bg-[#0F172A] p-3 rounded-lg flex justify-between items-center"
                                >
                                    <span>{task.text}</span>

                                    <button
                                        onClick={() =>
                                            deleteTask("eliminate", task.id)
                                        }
                                        className="text-red-400"
                                    >
                                        🗑️
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