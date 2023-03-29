import FuzzySearch from "fuzzy-search";
import { Link } from "react-router-dom";

import usePokemon from "../hooks/usePokemon";
import toSlug from "../utils/toSlug";

export default function PokemonView({ search }) {
  const { pokemons } = usePokemon();
  const searcher = new FuzzySearch(
    pokemons,
    ["name", "height", "weight", "types.name"],
    {
      caseSensitive: false,
    }
  );
  const result = searcher.search(search);
  const pokemonArray = search.length > 2 ? result : pokemons;

  console.log("pokemonArray", pokemonArray);

  return (
    <div className="pokemon_group">
      {pokemonArray.length > 0 ? (
        pokemonArray.map((pokemon, index) => {
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
