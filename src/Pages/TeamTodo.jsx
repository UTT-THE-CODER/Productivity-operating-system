import React, { useState }from 'react'

function TeamTodo() {
    const [members] = useState([
        "Uttkarsh",
        "Shivika",
        "Atul"
    ]);
  return (
    <>

    <div className = "min-h-screen bg-[#0F172A] text-[#E5E7EB] p-4 md:p-10">
        <h1 className = "text-3xl md:text-5xl font-bold text-[#5BC0BE] mb-8">
            Team Todo
        </h1>
    </div>
    
    </>
  )
}

export default TeamTodo;