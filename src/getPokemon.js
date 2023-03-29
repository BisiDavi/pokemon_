async function fetchPokemonData(pokemon) {
  let url = pokemon.url;
  return fetch(url).then((response) => response.json());
}

export function getPokemon(allPokemonArray) {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((allPokemon) => allPokemonArray(allPokemon));
  //   return allPokemon.results.forEach(async (pokemon) => {
  //     const pokes = await fetchPokemonData(pokemon);
  //     console.log("pokes,pokes", pokes);
  //     allPokemonArray([...pokes]);
  //   });
  // });
}
