import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import TodoPage from "./Pages/TodoPage";
import Pomodoro from "./Pages/Pomodoro";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/Pomodoro" element={<Pomodoro />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;