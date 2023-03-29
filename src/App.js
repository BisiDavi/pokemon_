import "./App.css";
import Searchbar from "./Searchbar";
import { useState } from "react";
import PokemonView from "./PokemonView";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Searchbar search={search} setSearch={setSearch} />
      <PokemonView />
    </div>
  );
}

export default App;
