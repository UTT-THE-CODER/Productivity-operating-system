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
      <div className="min-h-screen bg-[#0F172A] text-[#E5E7EB] p-4 md:p-10">

        <h1 className="text-3xl md:text-5xl font-bold text-[#5BC0BE] mb-8">
          Study Room
        </h1>
        <div className="bg-[#1E293B] rounded p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#5BC0BE] mb-4">
            Participants
          </h2>

          <div className="flex flex-wrap gap-3">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-[#0F172A] px-4 py-3 rounded-xl border border-[#5BC0BE]/10 min-w-[160px]"
              >
                <p className="font-semibold text-[#E5E7EB]">
                  {user.name}
                </p>
                <p className="text-sm text-[#94A3B8] mt-1">
                  {user.status}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#1E293B] rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#5BC0BE] mb-6">
            Shared Study Timer
          </h2>
          <div className="flex flex-col items-center">
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
            <div className="w-full max-w-sm sm:max-w-3xl bg-[#1E293B] border border-[#5BC0BE]/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
              <div className="text-center">
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#E5E7EB]">
                  {Math.floor(timeLeft / 60)
                    .toString()
                    .padStart(2, "0")}
                  :{(timeLeft % 60).toString().padStart(2, "0")}
                </h2>
              </div>
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
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1E293B] rounded-2xl p-6 min-h-[250px] hover:shadow-lg hover:shadow-[#5BC0BE]/10 transition duration-300">
            <h2 className="text-xl font-bold text-green-400">
              Completed
            </h2>
            <div className="mt-4 space-y-3">
              <div className="bg-[#0F172A] p-3 rounded-lg border border-green-400/20">
                ✓ React Dashboard
              </div>
              <div className="bg-[#0F172A] p-3 rounded-lg border border-green-400/20">
                ✓ DSA Revision
              </div>
            </div>
          </div>
          <div className="bg-[#1E293B] rounded-2xl p-6 min-h-[250px] hover:shadow-lg hover:shadow-[#5BC0BE]/10 transition duration-300">
            <h2 className="text-xl font-bold text-yellow-400">
              Ongoing
            </h2>
            <div className="mt-4 space-y-3">
              <div className="bg-[#0F172A] p-3 rounded-lg border border-yellow-400/20">
                ⏳ Study Room UI
              </div>
            </div>
          </div>
          <div className="bg-[#1E293B] rounded-2xl p-6 min-h-[250px] hover:shadow-lg hover:shadow-[#5BC0BE]/10 transition duration-300">
            <h2 className="text-xl font-bold text-blue-400">
              Upcoming
            </h2>
            <div className="mt-4 space-y-3">
              <div className="bg-[#0F172A] p-3 rounded-lg border border-blue-400/20">
                📌 Team Todo
              </div>
              <div className="bg-[#0F172A] p-3 rounded-lg border border-blue-400/20">
                📌 Authentication
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudyWithMe;