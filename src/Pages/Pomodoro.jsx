import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar";
function Pomodoro() {
    const [timeLeft, setTimeLeft] = useState(1500);
    const [isRunning, setIsRunning] = useState(false);
    const [sessionCompleted, setSessionCompleted] = useState(0);
    const [mode, setMode] = useState("focus");
    const [focusTime, setFocusTime] = useState(25);
    const [longBreak, setLongBreak] = useState(15);
    const [shortBreak, setShortBreak] = useState(5);

    useEffect(() => {
        const savedSessions =
            JSON.parse(localStorage.getItem("sessionCompleted")) || 0;

        setSessionCompleted(savedSessions);
    }, []);
    useEffect(() => {
        localStorage.setItem("sessionCompleted", JSON.stringify(sessionCompleted));
    }, [sessionCompleted]);

    useEffect(() => {
        if (!isRunning) return;
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setIsRunning(false);
                    setSessionCompleted((count) => count + 1);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [isRunning]);

    const saveSettings = () => {

        localStorage.setItem(
            "pomodoroSettings",
            JSON.stringify({
                focusTime,
                shortBreak,
                longBreak,
            })
        );

        alert("Settings Saved ✅");

        if (mode === "focus")
            setTimeLeft(focusTime * 60);

        if (mode === "short")
            setTimeLeft(shortBreak * 60);

        if (mode === "long")
            setTimeLeft(longBreak * 60);
    };

    useEffect(() => {

        const savedSettings = JSON.parse(
            localStorage.getItem("pomodoroSettings")
        );

        if (savedSettings) {

            setFocusTime(savedSettings.focusTime);
            setShortBreak(savedSettings.shortBreak);
            setLongBreak(savedSettings.longBreak);

            setTimeLeft(savedSettings.focusTime * 60);
        }

    }, []);
    return (
    <>   
        <div className="min-h-screen bg-[#0F172A] text-[#E5E7EB] flex flex-col items-center pt-10 md:pt-20 px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-[#5BC0BE] mb-8 md:mb-12 text-center">
                Pomodoro Timer
            </h1>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <button
                    onClick={() => {
                        setMode("focus");
                        setTimeLeft(focusTime * 60);
                        setIsRunning(false);
                    }}
                    className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg ${mode === "focus"
                        ? "bg-[#5BC0BE] text-[#0F172A]"
                        : "border border-[#5BC0BE] text-[#5BC0BE]"
                        }`}
                >
                    Focus
                </button>
                <button
                    onClick={() => {
                        setMode("short");
                        setTimeLeft(shortBreak * 60);
                        setIsRunning(false);
                    }}
                    className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg ${mode === "short"
                        ? "bg-[#5BC0BE] text-[#0F172A]"
                        : "border border-[#5BC0BE] text-[#5BC0BE]"
                        }`}
                >
                    Short Break
                </button>

                <button
                    onClick={() => {
                        setMode("long");
                        setTimeLeft(longBreak * 60);
                        setIsRunning(false);
                    }}
                    className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg ${mode === "long"
                        ? "bg-[#5BC0BE] text-[#0F172A]"
                        : "border border-[#5BC0BE] text-[#5BC0BE]"
                        }`}
                >
                    Long Break
                </button>
            </div>
            <div className="w-full max-w-sm sm:max-w-md bg-[#1E293B] border border-[#5BC0BE]/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
                <div className="text-center">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#E5E7EB]">
                        {Math.floor(timeLeft / 60)
                            .toString()
                            .padStart(2, "0")}
                        :{(timeLeft % 60).toString().padStart(2, "0")}
                    </h2>
                </div>
                <p className="mt-4 sm:mt-6 text-center text-sm sm:text-base text-[#94A3B8]">
                    Sessions Completed: {sessionCompleted}
                </p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
                    <button
                        className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-[#5BC0BE] text-[#0F172A] rounded-lg sm:rounded-xl font-bold"
                        onClick={() => setIsRunning(true)}
                    >
                        Start
                    </button>
                    <button
                        className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base border border-[#5BC0BE] text-[#5BC0BE] rounded-lg sm:rounded-xl font-bold"
                        onClick={() => setIsRunning(false)}
                    >
                        Pause
                    </button>
                    <button
                        className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base border border-red-400 text-red-400 rounded-lg sm:rounded-xl font-bold"
                        onClick={() => {
                            setIsRunning(false);
                            if (mode === "focus")
                                setTimeLeft(focusTime * 60);

                            if (mode === "short")
                                setTimeLeft(shortBreak * 60);

                            if (mode === "long")
                                setTimeLeft(longBreak * 60);
                        }}
                    >
                        Reset
                    </button>
                </div>
            </div>
           <div className="w-full max-w-sm sm:max-w-md mt-8 bg-[#1E293B] border border-[#5BC0BE]/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#5BC0BE] mb-4 sm:mb-6">
                    Timer Settings
                </h3>

                <div className="space-y-3 sm:space-y-4">
                    <input
                        type="number"
                        value={focusTime}
                        onChange={(e) => setFocusTime(Number(e.target.value))}
                        placeholder="Focus Time"
                        className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg bg-[#0F172A] border border-[#5BC0BE]/20"
                    />

                    <input
                        type="number"
                        value={shortBreak}
                        onChange={(e) => setShortBreak(Number(e.target.value))}
                        placeholder="Short Break"
                        className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg bg-[#0F172A] border border-[#5BC0BE]/20"
                    />

                    <input
                        type="number"
                        value={longBreak}
                        onChange={(e) => setLongBreak(Number(e.target.value))}
                        placeholder="Long Break"
                        className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg bg-[#0F172A] border border-[#5BC0BE]/20"
                    />
                </div>
                <button
                    onClick={saveSettings}
                    className="w-full mt-4 sm:mt-5 py-2 sm:py-3 text-sm sm:text-base bg-[#5BC0BE] text-[#0F172A] rounded-lg sm:rounded-xl font-bold hover:scale-105 transition"
                >
                    Save Settings
                </button>
            </div>
        </div>
    </> 
    );
}

export default Pomodoro;
