import './App.css';
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/HomePage/index";
import MedVault from './Components/ProjectPage/Medvault';
import Cornish from './Components/ProjectPage/Cornish';
import Eventura from './Components/ProjectPage/Eventura';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Medvault" element={<MedVault />} />
          <Route path="/Cornish" element={<Cornish />} />
          <Route path="/Eventura" element={<Eventura />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
