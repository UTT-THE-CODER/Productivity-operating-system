import React, { useState, useEffect } from "react";

function StudyWithMe() {
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("focus");

  const [focusTime] = useState(25);
  const [shortBreak] = useState(5);
  const [longBreak] = useState(15);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);
  const users = [
    {
      id: 1,
      name: "Uttkarsh",
      status: "🟢 Studying"
    },
    {
      id: 2,
      name: "Shivika",
      status: "🟢 Studying"
    },
    {
      id: 3,
      name: "Tanishk",
      status: "🔴 Break",
    },
  ]
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-[#E5E7EB] p-4 md:p-10 pb-12">

        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] bg-clip-text text-transparent mb-8">
          Study Room
        </h1>
        <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl p-6 sm:p-8 mb-8 border border-[#5BC0BE]/30 shadow-lg shadow-[#5BC0BE]/20">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] bg-clip-text text-transparent mb-6">
            Participants
          </h2>

          <div className="flex flex-wrap gap-4 sm:gap-5">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-[#0F172A] px-5 sm:px-6 py-4 sm:py-5 rounded-xl border-2 border-[#5BC0BE]/40 hover:border-[#5BC0BE] transition duration-300 shadow-md"
              >
                <p className="font-semibold text-[#E5E7EB] text-sm sm:text-base">
                  {user.name}
                </p>
                <p className="text-xs sm:text-sm text-[#5BC0BE] mt-2 font-medium">
                  {user.status}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 mb-8 border border-[#5BC0BE]/30 shadow-lg shadow-[#5BC0BE]/20">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] bg-clip-text text-transparent mb-8">
            Shared Study Timer
          </h2>
          <div className="flex flex-col items-center">
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
            <div className="w-full max-w-sm sm:max-w-md bg-gradient-to-br from-[#0F172A] to-[#0F172A] border-2 border-[#5BC0BE]/40 rounded-3xl sm:rounded-4xl p-8 sm:p-10 md:p-12 shadow-xl shadow-[#5BC0BE]/30">
              <div className="text-center">
                <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] bg-clip-text text-transparent">
                  {Math.floor(timeLeft / 60)
                    .toString()
                    .padStart(2, "0")}
                  :{(timeLeft % 60).toString().padStart(2, "0")}
                </h2>
              </div>
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
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl p-6 sm:p-8 min-h-[250px] border-2 border-green-400/40 hover:border-green-400/60 transition duration-300 shadow-lg shadow-green-400/10">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Completed
            </h2>
            <div className="mt-6 space-y-4">
              <div className="bg-[#0F172A] p-4 rounded-lg border-2 border-green-400/30 hover:border-green-400/50 transition duration-200">
                <p className="text-[#E5E7EB] font-medium">✓ React Dashboard</p>
              </div>
              <div className="bg-[#0F172A] p-4 rounded-lg border-2 border-green-400/30 hover:border-green-400/50 transition duration-200">
                <p className="text-[#E5E7EB] font-medium">✓ DSA Revision</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl p-6 sm:p-8 min-h-[250px] border-2 border-yellow-400/40 hover:border-yellow-400/60 transition duration-300 shadow-lg shadow-yellow-400/10">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Ongoing
            </h2>
            <div className="mt-6 space-y-4">
              <div className="bg-[#0F172A] p-4 rounded-lg border-2 border-yellow-400/30 hover:border-yellow-400/50 transition duration-200">
                <p className="text-[#E5E7EB] font-medium">⏳ Study Room UI</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl p-6 sm:p-8 min-h-[250px] border-2 border-blue-400/40 hover:border-blue-400/60 transition duration-300 shadow-lg shadow-blue-400/10">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Upcoming
            </h2>
            <div className="mt-6 space-y-4">
              <div className="bg-[#0F172A] p-4 rounded-lg border-2 border-blue-400/30 hover:border-blue-400/50 transition duration-200">
                <p className="text-[#E5E7EB] font-medium">📌 Team Todo</p>
              </div>
              <div className="bg-[#0F172A] p-4 rounded-lg border-2 border-blue-400/30 hover:border-blue-400/50 transition duration-200">
                <p className="text-[#E5E7EB] font-medium">📌 Authentication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudyWithMe;