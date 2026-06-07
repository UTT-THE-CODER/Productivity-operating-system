import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="flex items-center justify-between px-16 py-6 border-b border-[#5BC0BE]/20 bg-[#0F172A]/80 backdrop-blur-md shadow-lg shadow-[#5BC0BE]/5">
            <Link to="/">
                <h1 className="text-5xl font-extrabold text-[#5BC0BE] tracking-widest select-none hover:scale-105 transition duration-300">
                    POS
                </h1>
            </Link>
            <ul className="flex gap-14 text-lg font-medium text-[#E5E7EB]">
                <li className="hover:text-[#5BC0BE] transition duration-300 cursor-pointer relative group">
                    Priority
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5BC0BE] group-hover:w-full transition-all duration-300"></span>
                </li>
                <Link
                    to="/Pomodoro"
                    className="hover:text-[#5BC0BE] transition duration-300 cursor-pointer relative group">
                    Pomodoro
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5BC0BE] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <li className="hover:text-[#5BC0BE] transition duration-300 cursor-pointer relative group">
                    Study With Me
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5BC0BE] group-hover:w-full transition-all duration-300"></span>
                </li>
                <li className="hover:text-[#5BC0BE] transition duration-300 cursor-pointer relative group">
                    Team Todo
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5BC0BE] group-hover:w-full transition-all duration-300"></span>
                </li>
            </ul>
            <div className="flex gap-4 text-lg">
                <button className="px-7 py-2.5 border-2 border-[#5BC0BE]/70 rounded-lg text-[#5BC0BE] hover:bg-[#5BC0BE]/10 hover:border-[#5BC0BE] transition duration-300 font-semibold">
                    Login
                </button>
                <button className="px-7 py-2.5 bg-[#5BC0BE] text-[#0F172A] rounded-lg font-bold hover:shadow-lg hover:shadow-[#5BC0BE]/40 hover:scale-105 transition duration-300">
                    Sign Up
                </button>
            </div>
        </nav>
    )
}

export default Navbar