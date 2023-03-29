import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Home";
import PokemonDetails from "./PokemonDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </div>
  );
}

export default App;
