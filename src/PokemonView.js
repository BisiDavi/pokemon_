import { useEffect, useState } from "react";
import { getPokemon } from "./getPokemon";

export default function PokemonView() {
  const [pokemonArray, setPokemonArray] = useState(null);

  useEffect(() => {
    getPokemon(setPokemonArray);
  }, []);

  useEffect(() => {
    setPokemonArray()
  },[])

  console.log("pokemon", pokemonArray);

  return <div>PokemonView</div>;
}
