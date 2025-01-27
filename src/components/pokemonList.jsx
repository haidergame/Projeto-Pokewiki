import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pokemonList.css';

const PokemonList = ({ pokemons }) => {
  const navigate = useNavigate();

  const handleSelectPokemon = (pokemonName) => {
    navigate(`/pokemon/${pokemonName}`);
  };

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon, index) => (
        <div key={index} className="pokemon-item" onClick={() => handleSelectPokemon(pokemon.name)}>
          <h2 className="pokemon-name">{pokemon.name}</h2>
          <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
