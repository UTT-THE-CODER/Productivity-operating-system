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
        <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-[#E5E7EB] flex flex-col items-center pt-10 md:pt-16 px-4 pb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] bg-clip-text text-transparent mb-8 md:mb-12 text-center">
                Pomodoro Timer
            </h1>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                <button
                    onClick={() => {
                        setMode("focus");
                        setTimeLeft(focusTime * 60);
                        setIsRunning(false);
                    }}
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold transition duration-300 ${mode === "focus"
                        ? "bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] text-[#0F172A] shadow-lg shadow-[#5BC0BE]/40"
                        : "border-2 border-[#5BC0BE]/50 text-[#5BC0BE] hover:border-[#5BC0BE] hover:bg-[#5BC0BE]/10"
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
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold transition duration-300 ${mode === "short"
                        ? "bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] text-[#0F172A] shadow-lg shadow-[#5BC0BE]/40"
                        : "border-2 border-[#5BC0BE]/50 text-[#5BC0BE] hover:border-[#5BC0BE] hover:bg-[#5BC0BE]/10"
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
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold transition duration-300 ${mode === "long"
                        ? "bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] text-[#0F172A] shadow-lg shadow-[#5BC0BE]/40"
                        : "border-2 border-[#5BC0BE]/50 text-[#5BC0BE] hover:border-[#5BC0BE] hover:bg-[#5BC0BE]/10"
                        }`}
                >
                    Long Break
                </button>
            </div>
            <div className="w-full max-w-sm sm:max-w-md bg-gradient-to-br from-[#1E293B] to-[#0F172A] border-2 border-[#5BC0BE]/40 rounded-3xl sm:rounded-4xl p-8 sm:p-10 md:p-12 shadow-2xl shadow-[#5BC0BE]/30">
                <div className="text-center">
                    <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] bg-clip-text text-transparent">
                        {Math.floor(timeLeft / 60)
                            .toString()
                            .padStart(2, "0")}
                        :{(timeLeft % 60).toString().padStart(2, "0")}
                    </h2>
                </div>
                <p className="mt-6 sm:mt-8 text-center text-sm sm:text-base text-[#5BC0BE] font-semibold">
                    Sessions Completed: {sessionCompleted}
                </p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
                    <button
                        className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] text-[#0F172A] rounded-lg sm:rounded-xl font-bold shadow-lg shadow-[#5BC0BE]/40 hover:shadow-xl hover:shadow-[#5BC0BE]/60 hover:scale-105 transition duration-300"
                        onClick={() => setIsRunning(true)}
                    >
                        Start
                    </button>
                    <button
                        className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base border-2 border-[#5BC0BE]/50 text-[#5BC0BE] rounded-lg sm:rounded-xl font-bold hover:border-[#5BC0BE] hover:bg-[#5BC0BE]/10 transition duration-300"
                        onClick={() => setIsRunning(false)}
                    >
                        Pause
                    </button>
                    <button
                        className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base border-2 border-red-400/50 text-red-400 rounded-lg sm:rounded-xl font-bold hover:border-red-400 hover:bg-red-400/10 transition duration-300"
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
           <div className="w-full max-w-sm sm:max-w-md mt-10 sm:mt-12 bg-gradient-to-br from-[#1E293B] to-[#0F172A] border-2 border-[#5BC0BE]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-[#5BC0BE]/20">
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] bg-clip-text text-transparent mb-6 sm:mb-8">
                    Timer Settings
                </h3>

                <div className="space-y-4 sm:space-y-5">
                    <input
                        type="number"
                        value={focusTime}
                        onChange={(e) => setFocusTime(Number(e.target.value))}
                        placeholder="Focus Time"
                        className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-lg bg-[#0F172A] border-2 border-[#5BC0BE]/30 text-[#E5E7EB] placeholder-[#5BC0BE]/40 outline-none focus:border-[#5BC0BE] focus:shadow-lg focus:shadow-[#5BC0BE]/20 transition duration-300 font-medium"
                    />

                    <input
                        type="number"
                        value={shortBreak}
                        onChange={(e) => setShortBreak(Number(e.target.value))}
                        placeholder="Short Break"
                        className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-lg bg-[#0F172A] border-2 border-[#5BC0BE]/30 text-[#E5E7EB] placeholder-[#5BC0BE]/40 outline-none focus:border-[#5BC0BE] focus:shadow-lg focus:shadow-[#5BC0BE]/20 transition duration-300 font-medium"
                    />

                    <input
                        type="number"
                        value={longBreak}
                        onChange={(e) => setLongBreak(Number(e.target.value))}
                        placeholder="Long Break"
                        className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-lg bg-[#0F172A] border-2 border-[#5BC0BE]/30 text-[#E5E7EB] placeholder-[#5BC0BE]/40 outline-none focus:border-[#5BC0BE] focus:shadow-lg focus:shadow-[#5BC0BE]/20 transition duration-300 font-medium"
                    />
                </div>
                <button
                    onClick={saveSettings}
                    className="w-full mt-6 sm:mt-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] text-[#0F172A] rounded-lg sm:rounded-xl font-bold shadow-lg shadow-[#5BC0BE]/40 hover:shadow-xl hover:shadow-[#5BC0BE]/60 hover:scale-105 transition duration-300"
                >
                    Save Settings
                </button>
            </div>
        </div>
    </> 
    );
}

export default Pomodoro;
