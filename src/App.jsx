import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import TodoPage from "./Pages/TodoPage";
import Pomodoro from "./Pages/Pomodoro";
import Navbar from "./Component/Navbar";
import Priority from "./Pages/Priority";
import StudyWithMe from "./Pages/StudyWithMe";
import TeamTodo from "./Pages/TeamTodo";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/Pomodoro" element={<Pomodoro />} />
        <Route path="/Priority" element={<Priority />}/>
        <Route path ="/StudyWithMe" element={<StudyWithMe />}/>
        <Route path = "/TeamTodo" element={<TeamTodo />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;