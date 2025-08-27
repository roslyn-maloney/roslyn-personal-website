import './App.css';
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/HomePage/index";
import ProjectPage from './Components/ProjectPage/ProjectPage';


function App() {
  console.log("Rendering ProjectPage");

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Project/:pid" element={<ProjectPage />} />

        </Routes>
      </div>
    </HashRouter>

  );
}

export default App;
