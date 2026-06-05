import React from 'react'

function SpotifyPlayer() {
    return (
        <div className="w-[60%] mt-10 bg-linear-to-br from-[#1E293B] to-[#0F172A] border border-[#5BC0BE]/20 rounded-2xl p-6 shadow-xl shadow-[#5BC0BE]/10 ">
            <h2 className="text-3xl font-bold text-[#5BC0BE] mb-6">
                Study Music
            </h2>
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-xl text-[#E5E7EB] font-semibold">
                        Lofi focus Mix
                    </h3>
                    <p className="text-[#94A3B8]">
                        Spotify Playlist
                    </p>
                </div>
                <div className="flex gap-4">
                    <button className="bg-[#1E293B] px-4 py-2 rounded-lg border border-[#5BC0BE]/20 hover:border-[#5BC0BE] transition">
                        ⏮
                    </button>
                    <button className="bg-[#5BC0BE] text-[#0F172A] px-5 py-2 rounded-lg font-bold hover:scale-105 transition">
                        ▶
                    </button>
                    <button className="bg-[#1E293B] px-4 py-2 rounded-lg border border-[#5BC0BE]/20 hover:border-[#5BC0BE] transition">
                        ⏭
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SpotifyPlayer