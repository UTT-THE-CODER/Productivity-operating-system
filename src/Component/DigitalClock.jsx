import React,{useEffect,useState} from 'react'

function DigitalClock() {
    const [time,setTime] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        },1000)
        return () => clearInterval(timer)
    },[])
  return (
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#5BC0BE]/20 rounded-xl sm:rounded-2xl py-6 sm:py-8 md:py-10 px-4 sm:px-8 md:px-12 text-center shadow-2xl shadow-[#5BC0BE]/10 hover:shadow-[#5BC0BE]/20 transition duration-500">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#5BC0BE] tracking-wider">
                {time.toLocaleTimeString()}
            </h1>
            <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-wide text-[#94A3B8]">
                {time.toDateString()}
            </p>
        </div>

  )
}

export default DigitalClock