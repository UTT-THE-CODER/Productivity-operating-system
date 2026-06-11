import React, { useState } from 'react';
import { Link } from "react-router-dom";
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="relative flex items-center justify-between px-4 sm:px-6 md:px-16 py-4 sm:py-5 md:py-6 border-b border-[#5BC0BE]/30 bg-gradient-to-r from-[#0F172A] via-[#0F172A] to-[#1E293B] backdrop-blur-md shadow-2xl shadow-[#5BC0BE]/10 sticky top-0 z-40">
            <Link to="/">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] bg-clip-text text-transparent tracking-widest select-none hover:scale-110 transition duration-300 cursor-pointer">
                    POS
                </h1>
            </Link>
            <button className="md:hidden text-3xl text-[#5BC0BE] hover:text-[#06B6D4] transition duration-300"
                onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            <ul className="hidden md:flex gap-8 lg:gap-14 text-sm lg:text-lg font-semibold text-[#E5E7EB]">
                <Link to="/Priority"
                    className="text-[#E5E7EB] hover:text-[#5BC0BE] transition duration-300 cursor-pointer relative group">
                    Priority
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] group-hover:w-full transition-all duration-400"></span>
                </Link>
                <Link
                    to="/Pomodoro"
                    className="text-[#E5E7EB] hover:text-[#5BC0BE] transition duration-300 cursor-pointer relative group">
                    Pomodoro
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] group-hover:w-full transition-all duration-400"></span>
                </Link>
                <Link 
                    to ="/StudyWithMe"
                    className="text-[#E5E7EB] hover:text-[#5BC0BE] transition duration-300 cursor-pointer relative group">
                    Study With Me
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] group-hover:w-full transition-all duration-400"></span>
                </Link>
                <Link
                    to ="/TeamTodo" 
                    className="text-[#E5E7EB] hover:text-[#5BC0BE] transition duration-300 cursor-pointer relative group">
                    Team Todo
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] group-hover:w-full transition-all duration-400"></span>
                </Link>
            </ul>
            <div className="hidden md:flex gap-2 lg:gap-4 text-sm lg:text-lg">
                <button className="px-4 lg:px-7 py-2 lg:py-2.5 border-2 border-[#5BC0BE]/50 text-[#5BC0BE] rounded-lg font-semibold hover:bg-[#5BC0BE]/10 hover:border-[#5BC0BE] transition duration-300">
                    Login
                </button>
                <button className="px-4 lg:px-7 py-2 lg:py-2.5 bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] text-[#0F172A] rounded-lg font-bold shadow-lg shadow-[#5BC0BE]/30 hover:shadow-2xl hover:shadow-[#5BC0BE]/50 hover:scale-105 transition duration-300">
                    Sign Up
                </button>
            </div>
            {
                menuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-b border-[#5BC0BE]/20 z-50 shadow-2xl shadow-[#5BC0BE]/10">
                        <Link
                            to="/Priority"
                            className="block px-4 py-3 text-[#E5E7EB] hover:bg-[#5BC0BE]/10 border-b border-[#5BC0BE]/10 transition duration-200 font-medium"
                        >
                            Priority
                        </Link>
                        <Link
                            to="/Pomodoro"
                            className="block px-4 py-3 text-[#E5E7EB] hover:bg-[#5BC0BE]/10 border-b border-[#5BC0BE]/10 transition duration-200 font-medium"
                        >
                            Pomodoro
                        </Link>
                        <Link
                            to="/StudyWithMe"
                            className="block px-4 py-3 text-[#E5E7EB] hover:bg-[#5BC0BE]/10 border-b border-[#5BC0BE]/10 transition duration-200 font-medium"
                        >
                            Study With Me
                        </Link>
                        <Link
                            to="/TeamTodo"
                            className="block px-4 py-3 text-[#E5E7EB] hover:bg-[#5BC0BE]/10 transition duration-200 font-medium"
                        >
                            Team Todo
                        </Link>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar