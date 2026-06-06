import React, { useState, useEffect } from 'react'
function Pomodoro() {

    const [timeLeft, setTimeLeft] = useState(1500);
    const [isRunning, setIsRunning] = useState(false);
    const [sessionCompleted, setSessionCompleted] = useState(0);
    const [mode, setMode] = useState("focus");

    useEffect(() =>{
        const savedSessions = JSON.parse(
            localStorage.getItem("sessioncompleted")
        ) || 0;

        setSessionCompleted(savedSessions);
    },[]);
    useEffect(() => {
    localStorage.setItem(
        "sessionsCompleted",
        JSON.stringify(sessionCompleted)
    );
}, [sessionCompleted]);

    useEffect(() => {
        if (!isRunning) return;
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setIsRunning(false);
                    setSessionCompleted(
                        (count) => count + 1
                    );
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [isRunning]);
    return (
        <div className="min-h-screen bg-[#0F172A] text-[#E5E7EB] flex flex-col items-center pt-20">
            <h1 className="text-5xl font bold text-[#5BC0BE] mb-12">
                Pomodoro Timer
            </h1>
            <div>
                <button
                    onClick={() => {
                        setMode("focus");
                        setTimeLeft(1500);
                        setIsRunning(false);
                    }}
                    className={`px-4 py-2 rounded-lg ${mode === "focus"
                            ? "bg-[#5BC0BE] text-[#0F172A]"
                            : "border border-[#5BC0BE] text-[#5BC0BE]"
                        }`}
                >
                    Focus
                </button>
                <button
                    onClick={() => {
                        setMode("short");
                        setTimeLeft(300);
                        setIsRunning(false);
                    }}
                    className={`px-4 py-2 rounded-lg ${mode === "short"
                            ? "bg-[#5BC0BE] text-[#0F172A]"
                            : "border border-[#5BC0BE] text-[#5BC0BE]"
                        }`}
                >
                    Short Break
                </button>

                <button
                    onClick={() => {
                        setMode("long");
                        setTimeLeft(900);
                        setIsRunning(false);
                    }}
                    className={`px-4 py-2 rounded-lg ${mode === "long"
                            ? "bg-[#5BC0BE] text-[#0F172A]"
                            : "border border-[#5BC0BE] text-[#5BC0BE]"
                        }`}
                >
                    Long Break
                </button>
            </div>
            <div className="w-[500px] bg-[#1E293B] border border-[#5BC0BE]/20 rounded-3xl p-10 shadow-xl">
                <div className="text-center">
                    <h2 className="text-8xl font-bold text-[#E5E7EB]">
                        {Math.floor(timeLeft / 60)
                            .toString()
                            .padStart(2, "0")}
                        :
                        {(timeLeft % 60)
                            .toString()
                            .padStart(2, "0")}
                    </h2>
                </div>
                <p className="mt-6 text-center text-[#94A3B8]">
                    Sessions Completed: {sessionCompleted}
                </p>
                <div className=" flex justify-center gap-4 mt-10">
                    <button className="px-6 py-3 bg-[#5BC0BE] text-[#0F172A] rounded-xl font-bold"
                        onClick={() => setIsRunning(true)}>
                        Start
                    </button>
                    <button className="px-6 py-3 border border-[#5BC0BE] text-[#5BC0BE] rounded-xl font-bold"
                        onClick={() => setIsRunning(false)}>
                        Pause
                    </button>
                    <button className="px-6 py-3 border border-red-400 text-red-400 rounded-xl font-bold"
                        onClick={() => {
                            setIsRunning(false);
                            setTimeLeft(1500);
                        }}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pomodoro;
