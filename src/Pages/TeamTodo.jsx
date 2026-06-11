import React, { useState, useEffect } from 'react'
import TeamTaskModal from "../Component/TeamTaskModal";

function TeamTodo() {
    const [members, setMembers] = useState(() => {

        const savedMembers =
            JSON.parse(localStorage.getItem("teamMembers"));

        return savedMembers || [
            "Uttkarsh",
            "Shivika",
            "Atul"
        ];

    });
    const [newMember, setNewMember] = useState("");
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("teamTasks");

        return savedTasks
            ? JSON.parse(savedTasks)
            : [];
    });

    const handleEdit = (task) => {
        setSelectedTask(task);
        setIsEditOpen(true);
    };

    const addTask = (taskText, assignedTo) => {

        const newTask = {
            id: Date.now(),
            text: taskText,
            assignedTo,
            status: "todo",
        };

        console.log(newTask);

        setTasks([...tasks, newTask]);
    };

    useEffect(() => {
        localStorage.setItem(
            "teamTasks",
            JSON.stringify(tasks)
        );
    }, [tasks]);

    useEffect(() => {
        const savedTasks =
            JSON.parse(localStorage.getItem("teamTasks")) || [];

        setTasks(savedTasks);
    }, []);

    const updateTaskStatus = (taskId, newStatus) => {
        setTasks(
            tasks.map(task =>
                task.id === taskId
                    ? { ...task, status: newStatus }
                    : task
            )
        );
    };

    const deleteTask = (taskId) => {

        setTasks(
            tasks.filter(task => task.id !== taskId)
        );
    };

    useEffect(() => {

        localStorage.setItem(
            "teamMembers",
            JSON.stringify(members)
        );

    }, [members]);
    const addMember = () => {
        if (!newMember.trim()) return;
        setMembers([
            ...members,
            newMember
        ]);
        setNewMember("");
    };
    const removeMember = (memberName) => {
        setMembers(
            members.filter(
                member => member !== memberName
            )
        );
    };
    return (
        <>

            <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-[#E5E7EB] p-4 sm:p-6 md:p-10 pb-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] bg-clip-text text-transparent mb-8 md:mb-10">
                    Team Todo
                </h1>

                <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl p-6 sm:p-8 mb-8 border border-[#5BC0BE]/30 shadow-lg shadow-[#5BC0BE]/20">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] bg-clip-text text-transparent mb-4">
                                Team Members - {members.length}
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {members.map((member) => (
                                    <div
                                        key={member}
                                        className="bg-[#0F172A] px-4 py-2.5 rounded-lg flex items-center gap-2 border border-[#5BC0BE]/30 hover:border-[#5BC0BE] transition duration-300 font-medium text-sm"
                                    >
                                        {member}
                                        <button
                                            onClick={() => removeMember(member)}
                                            className="text-red-400/70 hover:text-red-400 transition"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 justify-start">
                            <div className="flex gap-2 flex-col sm:flex-row">

                                <input
                                    type="text"
                                    value={newMember}
                                    onChange={(e) =>
                                        setNewMember(e.target.value)
                                    }
                                    placeholder="Member name..."
                                    className="px-4 py-2.5 rounded-lg bg-[#0F172A] border-2 border-[#5BC0BE]/30 text-[#E5E7EB] placeholder-[#5BC0BE]/40 outline-none focus:border-[#5BC0BE] focus:shadow-lg focus:shadow-[#5BC0BE]/20 transition duration-300 font-medium text-sm"
                                />

                                <button
                                    onClick={addMember}
                                    className="px-5 py-2.5 bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] text-[#0F172A] rounded-lg font-bold shadow-lg shadow-[#5BC0BE]/30 hover:shadow-xl hover:shadow-[#5BC0BE]/50 transition duration-300 text-sm whitespace-nowrap"
                                >
                                    Add Member
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 mb-8">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] text-[#0F172A] rounded-lg sm:rounded-xl font-bold shadow-lg shadow-[#5BC0BE]/30 hover:shadow-xl hover:shadow-[#5BC0BE]/50 text-sm sm:text-base transition duration-300">
                        + Add Task
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {members.map((member) => (
                        <div
                            key={member}
                            className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl p-6 sm:p-8 min-h-[300px] border border-[#5BC0BE]/30 shadow-lg shadow-[#5BC0BE]/10 hover:shadow-lg hover:shadow-[#5BC0BE]/20 transition duration-300"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] bg-clip-text text-transparent mb-6">
                                {member}
                            </h2>
                            <div className="space-y-3">
                                {tasks
                                    .filter(task => task.assignedTo === member)
                                    .map(task => (
                                        <div
                                            key={task.id}
                                            className="bg-[#0F172A] p-4 rounded-lg flex justify-between items-center gap-3 border border-[#5BC0BE]/20 hover:border-[#5BC0BE]/40 transition duration-200"
                                        >
                                            <div className="flex-1">
                                                <p className="text-[#E5E7EB] font-medium text-sm sm:text-base">{task.text}</p>
                                            </div>
                                            <select
                                                value={task.status}
                                                onChange={(e) =>
                                                    updateTaskStatus(task.id, e.target.value)
                                                }
                                                className={`px-2 py-1.5 min-w-fit rounded-lg text-xs sm:text-sm font-semibold border-none outline-none cursor-pointer
                                                    ${task.status === "completed"
                                                        ? "text-green-400 bg-green-400/20"
                                                        : task.status === "ongoing"
                                                            ? "text-yellow-400 bg-yellow-400/20"
                                                            : "text-gray-400 bg-gray-400/20"
                                                    }`}
                                            >
                                                <option value="todo">Todo</option>
                                                <option value="ongoing">Ongoing</option>
                                                <option value="completed">Completed</option>
                                            </select>
                                            <button
                                                onClick={() => deleteTask(task.id)}
                                                className="text-red-400/70 hover:text-red-400 transition text-lg"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    ))}
                </div>
                <TeamTaskModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    addTask={addTask}
                    members={members}
                />
            </div >
        </>
    )
}

export default TeamTodo;