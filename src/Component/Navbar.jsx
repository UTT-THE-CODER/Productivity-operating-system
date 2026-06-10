import React, { useState } from 'react';
import { Link } from "react-router-dom";
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="relative flex items-center justify-between px-3 sm:px-6 md:px-16 py-3 sm:py-4 md:py-6 border-b border-[#5BC0BE]/20 bg-[#0F172A]/80 backdrop-blur-md shadow-lg shadow-[#5BC0BE]/5 sticky top-0 z-40">
            <Link to="/">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#5BC0BE] tracking-widest select-none hover:scale-105 transition duration-300">
                    POS
                </h1>
            </Link>
            <button className="md:hidden text-3xl text-[#5BC0BE]"
                onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            <ul className="hidden md:flex gap-8 lg:gap-14 text-sm lg:text-lg font-medium text-[#E5E7EB]">
                <Link to="/Priority"
                    className="hover:text-[#5BC0BE] transition duration-300 cursor-pointer relative group">
                    Priority
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5BC0BE] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                    to="/Pomodoro"
                    className="hover:text-[#5BC0BE] transition duration-300 cursor-pointer relative group">
                    Pomodoro
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5BC0BE] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link 
                    to ="/StudyWithMe"
                    className="hover:text-[#5BC0BE] transition duration-300 cursor-pointer relative group">
                    Study With Me
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5BC0BE] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <li className="hover:text-[#5BC0BE] transition duration-300 cursor-pointer relative group">
                    Team Todo
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5BC0BE] group-hover:w-full transition-all duration-300"></span>
                </li>
            </ul>
            <div className="hidden md:flex gap-2 lg:gap-4 text-sm lg:text-lg">
                <button className="px-4 lg:px-7 py-2 lg:py-2.5 border-2 border-[#5BC0BE]/70 rounded-lg text-[#5BC0BE] hover:bg-[#5BC0BE]/10 hover:border-[#5BC0BE] transition duration-300 font-semibold">
                    Login
                </button>
                <button className="px-4 lg:px-7 py-2 lg:py-2.5 bg-[#5BC0BE] text-[#0F172A] rounded-lg font-bold hover:shadow-lg hover:shadow-[#5BC0BE]/40 hover:scale-105 transition duration-300">
                    Sign Up
                </button>
            </div>
            {
                menuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-[#1E293B] z-50">

                        <Link
                            to="/priority"
                            className="block p-4 text-amber-50"
                        >
                            Priority
                        </Link>

                        <Link
                            to="/pomodoro"
                            className="block p-4 text-amber-50"
                        >
                            Pomodoro
                        </Link>

                        <Link
                            to="/studywithme"
                            className="block p-4 text-amber-50"
                        >
                            Study With Me
                        </Link>
                        <Link
                            to="/teamTodo"
                            className="block p-4 text-amber-50"
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