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
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#5BC0BE]/30 rounded-2xl sm:rounded-3xl py-8 sm:py-10 md:py-12 px-6 sm:px-10 md:px-14 text-center shadow-2xl shadow-[#5BC0BE]/20 hover:shadow-[#5BC0BE]/30 hover:border-[#5BC0BE]/50 transition duration-500">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] bg-clip-text text-transparent tracking-wider drop-shadow-lg">
                {time.toLocaleTimeString()}
            </h1>
            <p className="mt-3 sm:mt-5 text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-widest text-[#5BC0BE]">
                {time.toDateString()}
            </p>
        </div>

  )
}

export default DigitalClock