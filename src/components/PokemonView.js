/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { fetchPokemonData, getPokemon } from "../utils/getPokemon";

export default function PokemonView() {
  const [pokemonArray, setPokemonArray] = useState(null);
  const [pokemons, setPokemons] = useState([]);

  function getAllPokemon() {
    return pokemonArray.results.forEach(async (pokemon) => {
      await fetchPokemonData(pokemon)
        .then((data) => {
          pks.push(data);
          return pks;
        })
        .then((response) => setPokemons(response));
    });
  }

  useEffect(() => {
    getPokemon(setPokemonArray);
  }, []);

  let pks = [];
  useEffect(() => {
    if (pokemonArray !== null) {
      getAllPokemon();
    }
  }, [pokemonArray]);

  console.log("pokemons", pokemons);

  return (
    <div className="pokemon_group">
      {pokemons.length > 0 &&
        pokemons.map((pokemon, index) => {
          const pokemonIndex = index + 1;
          return (
            <div className="pokemon">
              <img
                src={pokemon.sprites.other.home.front_default}
                alt={pokemon.name}
                height="100px"
                width="100px"
              />
              <div className="text-view">
                <h5>
                  #{pokemonIndex} - {pokemon.name}
                </h5>
                <div className="detail">
                  <p>{pokemon.height}m</p>-
                  <p>HP:{pokemon.stats[0].base_stat}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
