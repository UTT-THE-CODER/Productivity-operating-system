import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import TodoPage from "./Pages/TodoPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;