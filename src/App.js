import { Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import PokemonDetails from "./PokemonDetails";
import "./App.css";

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
