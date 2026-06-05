import React from 'react'
import Navbar from "../Component/Navbar";
import DigitalClock from "../Component/DigitalClock";
import TodoPreview from "../Component/TodoPreview";
import SpotifyPlayer from "../Component/SpotifyPlayer";

function Dashboard() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#0F172A] via-[#0F172A] to-[#1E293B] pt-6 text-[#E5E7EB] font-sans">
      <Navbar />
      <div className="flex justify-center mt-12">
        <DigitalClock />
      </div>
      <div className="flex justify-center">
        <TodoPreview />
      </div>
      <SpotifyPlayer />
    </div>
  );
}

export default Dashboard;