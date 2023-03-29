import { useState } from "react";
import Searchbar from "./components/Searchbar";
import PokemonView from "./components/PokemonView";
import "./App.css";

export default function HomePage() {
  const [search, setSearch] = useState("");
  return (
    <div className="home">
      <Searchbar search={search} setSearch={setSearch} />
      <PokemonView />
    </div>
  );
}
