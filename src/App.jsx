import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import TodoPage from "./Pages/TodoPage";
import Pomodoro from "./Pages/Pomodoro";
import Navbar from "./Component/Navbar";
import Priority from "./Pages/Priority";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/Pomodoro" element={<Pomodoro />} />
        <Route path="/Priority" element={<Priority />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;