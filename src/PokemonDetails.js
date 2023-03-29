import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { getPokemonDetail } from "./utils/getPokemon";

export default function PokemonDetails() {
  const { id } = useParams();
  const { data: pokemon, status } = useQuery({
    queryKey: ["getPokemonDetail"],
    queryFn: () => getPokemonDetail(id),
    enabled: !!id,
  });

  const name = pokemon ? pokemon?.name.toUpperCase() : "";
  return (
    <div className="pokemonDetails">
      {status === "error" ? (
        <p>unable to fetch pokemon</p>
      ) : status === "loading" ? (
        <p>fetching pokemon</p>
      ) : (
        <>
          <Link to="/">
            <button>← Go back</button>
          </Link>
          <div className="top">
            <img
              src={pokemon.sprites.other.home.front_default}
              alt={pokemon.name}
            />
            <div className="detail_view">
              <div className="text_view">
                <h3>{name}</h3>
                <p>Height: {pokemon.height}m </p>
                <p>Weight: {pokemon.weight}kg </p>
              </div>
              <div className="group">
                {pokemon.types.map(({ type }, index) => {
                  const color = index % 2 === 0 ? "red" : "green";
                  const typeIndex = `${type.slot}-${index}`;
                  return (
                    <div className={`item ${color}`} key={typeIndex}>
                      {type.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
