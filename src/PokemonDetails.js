import React from "react";
import { useLocation } from "react-router-dom";

export default function PokemonDetails() {
  const location = useLocation();
  const { pokemon } = location.state;
  console.log("pokemon", pokemon);
  const name = pokemon.name.toUpperCase();
  return (
    <div className="pokemonDetails">
      <div className="top">
        <img
          src={pokemon.sprites.other.home.front_default}
          alt={pokemon.name}
        />
        <div className="text_view">
          <h3>{name}</h3>
          <p>Height: {pokemon.height}m </p>
          <p>Weight: {pokemon.weight}kg </p>
        </div>
      </div>
    </div>
  );
}
