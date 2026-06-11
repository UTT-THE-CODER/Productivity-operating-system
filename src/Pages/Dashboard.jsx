import React from 'react'
import Navbar from "../Component/Navbar";
import DigitalClock from "../Component/DigitalClock";
import TodoPreview from "../Component/TodoPreview";
import SpotifyPlayer from "../Component/SpotifyPlayer";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] pt-6 pb-12 text-[#E5E7EB] font-sans">
      <div className="flex justify-center mt-8 md:mt-12 px-4">
        <DigitalClock />
      </div>
      <div className="flex justify-center px-4">
        <TodoPreview />
      </div>
      <SpotifyPlayer />
    </div>
  );
}

export default Dashboard;