export function fetchPokemonData(pokemon) {
  let url = pokemon.url;
  return fetch(url).then((response) => response.json());
}

export function getPokemon(allPokemonArray) {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((allPokemon) => allPokemonArray(allPokemon));
}

export function getSitePokemon() {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((allPokemon) => allPokemon);
}

export function getPokemonDetail(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) =>
    response.json()
  );
}
