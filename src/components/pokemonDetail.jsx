import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './pokemonDetail.css';

const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    if (pokemonName) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        .then(response => response.json())
        .then(data => setPokemonData(data))
        .catch(error => console.error('Error fetching Pokémon data:', error));
    }
  }, [pokemonName]);

  if (!pokemonData) {
    return <div>Selecione um Pokemon para ver seus detalhes.</div>;
  }

  return (
    <div className='pokemon-detail'>
      <h2 className='pokemon-name'>{pokemonData.name}</h2>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} className='pokemon-image' />
      <p className='pokemon-type'>Tipo: {pokemonData.types.map(type => type.type.name).join(', ')}</p>
      <p>Altura: {pokemonData.height}</p>
      <p>Peso: {pokemonData.weight}</p>
    </div>
  );
};

export default PokemonDetail;
