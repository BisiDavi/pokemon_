/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getSitePokemon } from "../utils/getPokemon";

export default function usePokemon() {
  const [pokemons, setPokemons] = useState([]);
  useQuery({
    queryKey: ["getPokemon"],
    queryFn: getSitePokemon,
    onSuccess: (data) => getAllPokemon(data),
  });

  function getAllPokemon(pokemonArray) {
    let requests = pokemonArray.results.map((pokemon) => fetch(pokemon.url));

    Promise.all(requests)
      .then((responses) => responses)
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((result) => setPokemons(result));
  }

  return {
    pokemons,
  };
}
