/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchPokemonData, getPokemon } from "../utils/getPokemon";
import toSlug from "../utils/toSlug";

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
          const pokemonElementIdx = `${pokemon.name}-${pokemonIndex}`;
          const pokemonSlug = toSlug(pokemon.name);
          return (
            <Link
              key={pokemonElementIdx}
              to={`/pokemon/${pokemonSlug}`}
              state={{ pokemon }}
            >
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
                    <p>
                      {pokemon.height}m/{pokemon.weight}kg
                    </p>
                    -<p>HP:{pokemon.stats[0].base_stat}</p>
                  </div>
                  <div className="group">
                    {pokemon.types.map((type, index) => {
                      const color = index % 2 === 0 ? "red" : "green";
                      return (
                        <div className={`item ${color}`} key={type.slot}>
                          {type.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
