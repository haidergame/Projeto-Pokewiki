import React, { useState } from 'react';
import PokemonList from "../components/pokemonList";
import './Home.css';

const Home = ({ pokemons }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Home">
      <h1>PokeWiki</h1>
      <img src='./assets/pokebola.png' alt='pokebolaIcon' className='icon'></img>
      <input
        type="text"
        placeholder="Pesquise um Pokémon..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
}

export default Home;

