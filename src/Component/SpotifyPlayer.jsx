import React from 'react'

function SpotifyPlayer() {
    return (
        <div className="w-full max-w-2xl mx-auto mt-6 sm:mt-8 md:mt-10 bg-linear-to-br from-[#1E293B] to-[#0F172A] border border-[#5BC0BE]/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl shadow-[#5BC0BE]/10 ">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#5BC0BE] mb-4 sm:mb-6">
                Study Music
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h3 className="text-base sm:text-lg md:text-xl text-[#E5E7EB] font-semibold">
                        Lofi focus Mix
                    </h3>
                    <p className="text-xs sm:text-sm text-[#94A3B8]">
                        Spotify Playlist
                    </p>
                </div>
                <div className="flex gap-2 sm:gap-4 justify-center">
                    <button className="bg-[#1E293B] px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-[#5BC0BE]/20 hover:border-[#5BC0BE] transition">
                        ⏮
                    </button>
                    <button className="bg-[#5BC0BE] text-[#0F172A] px-4 sm:px-5 py-2 text-sm sm:text-base rounded-lg font-bold hover:scale-105 transition">
                        ▶
                    </button>
                    <button className="bg-[#1E293B] px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-[#5BC0BE]/20 hover:border-[#5BC0BE] transition">
                        ⏭
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SpotifyPlayer;