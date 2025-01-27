import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetail from './components/pokemonDetail';
import AddPokemon from './pages/AddPokemon';
import About from './pages/About';
import './AppPages.css';

const AppPages = () => {
  const [pokemons, setPokemons] = useState([
    {
      name: "Pikachu",
      image: "/assets/pikachu.png",
    },
    {
      name: "Charmander",
      image: "/assets/charmander.png",
    },
    {
      name: "Squirtle",
      image: "/assets/squirtle.png",
    },
    {
      name: "Bulbasaur",
      image: "/assets/bulbasaur.png",
    },
    {
      name: "Ditto",
      image: "/assets/ditto.png",
    },
    {
      name: "Octillery",
      image: "/assets/octillery.png",
    },
    {
      name: "Eternatus",
      image: "/assets/eternatus.png",
    },
    {
      name: "Probopass",
      image: "/assets/probopass.png",
    },
  ]);

  const handleAddPokemon = async (newPokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${newPokemon.name.toLowerCase()}`);
    const data = await response.json();
    const pokemonWithDetails = {
      ...newPokemon,
      type: data.types.map(typeInfo => typeInfo.type.name).join(', '),
    };
    setPokemons([...pokemons, pokemonWithDetails]);
  };

  return (
    <Router>
      <div className='nav-bar'>
        <nav>
          <ul>
            <li><Link to='/' className='pokedex-button'>Home</Link></li>
            <li><Link to='/add' className='pokedex-button'>Add Pokémon</Link></li>
            <li><Link to='/about' className='pokedex-button'>About</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home pokemons={pokemons} />} />
          <Route path='/pokemon/:pokemonName' element={<PokemonDetail />} />
          <Route path='/add' element={<AddPokemon onAddPokemon={handleAddPokemon} />} />
          <Route path='/about' element={<About />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default AppPages;

