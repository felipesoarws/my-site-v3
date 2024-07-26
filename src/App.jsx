import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.scss";

import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projetos" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
