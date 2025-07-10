import './App.css';
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/HomePage/index";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
