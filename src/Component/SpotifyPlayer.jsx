import React from 'react'

function SpotifyPlayer() {
    return (
        <div className="w-full max-w-2xl mx-auto mt-8 sm:mt-10 md:mt-12 mb-12 bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#5BC0BE]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-[#5BC0BE]/20 hover:shadow-[#5BC0BE]/30 hover:border-[#5BC0BE]/50 transition duration-500">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] bg-clip-text text-transparent mb-6 sm:mb-8">
                Study Music
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-[#E5E7EB] font-semibold">
                        Lofi Focus Mix
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5BC0BE] font-medium mt-1">
                        Spotify Playlist
                    </p>
                </div>
                <div className="flex gap-3 sm:gap-4 justify-start sm:justify-end">
                    <button className="bg-[#1E293B] hover:bg-[#0F172A] px-4 sm:px-5 py-2.5 sm:py-3 text-base sm:text-lg rounded-lg border-2 border-[#5BC0BE]/30 hover:border-[#5BC0BE] text-[#5BC0BE] transition duration-300 font-semibold">
                        ⏮
                    </button>
                    <button className="bg-gradient-to-r from-[#5BC0BE] to-[#06B6D4] text-[#0F172A] px-5 sm:px-7 py-2.5 sm:py-3 text-base sm:text-lg rounded-lg font-bold shadow-lg shadow-[#5BC0BE]/30 hover:shadow-xl hover:shadow-[#5BC0BE]/50 hover:scale-110 transition duration-300">
                        ▶
                    </button>
                    <button className="bg-[#1E293B] hover:bg-[#0F172A] px-4 sm:px-5 py-2.5 sm:py-3 text-base sm:text-lg rounded-lg border-2 border-[#5BC0BE]/30 hover:border-[#5BC0BE] text-[#5BC0BE] transition duration-300 font-semibold">
                        ⏭
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SpotifyPlayer;