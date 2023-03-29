import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:_id" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
