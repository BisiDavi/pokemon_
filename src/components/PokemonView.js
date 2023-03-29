/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchPokemonData, getSitePokemon } from "../utils/getPokemon";
import toSlug from "../utils/toSlug";

export default function PokemonView() {
  const [pokemons, setPokemons] = useState([]);
  const [fetchMore, setFetchMoreDetails] = useState(false);
  const { data, status } = useQuery({
    queryKey: ["getPokemon"],
    queryFn: getSitePokemon,
  });

  let pks = [];

  function getAllPokemon(pokemonArray) {
    return pokemonArray.results.forEach(async (pokemon) => {
      await fetchPokemonData(pokemon)
        .then((data) => {
          pks.push(data);
          setFetchMoreDetails(true);
          return pks;
        })
        .then((response) => setPokemons(response));
    });
  }

  useEffect(() => {
    if (status === "success") {
      getAllPokemon(data);
    }
  }, [status, fetchMore]);

  console.log("pokemons", pokemons);

  return (
    <div className="pokemon_group">
      {pokemons.length > 0 ? (
        pokemons.map((pokemon, index) => {
          const pokemonIndex = index + 1;
          const pokemonName = pokemon.name.toUpperCase();
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
                    #{pokemonIndex} - {pokemonName}
                  </h5>
                  <div className="detail">
                    <p>
                      {pokemon.height}m/{pokemon.weight}kg
                    </p>
                    -<p>HP:{pokemon.stats[0].base_stat}</p>
                  </div>
                  <div className="group">
                    {pokemon.types.map(({ type }, index) => {
                      const color = index % 2 === 0 ? "red" : "green";
                      const typeIndex = `${type.slot}-${index}`;

                      return (
                        <div key={typeIndex} className={`item ${color}`}>
                          {type.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
