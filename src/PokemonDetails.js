import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PokemonDetails() {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  const name = pokemon ? pokemon?.name.toUpperCase() : "";
  return (
    <div className="pokemonDetails">
      {pokemon !== null ? (
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
