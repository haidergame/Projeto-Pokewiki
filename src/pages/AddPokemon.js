import React, { useState } from 'react';
import './AddPokemon.css';

const AddPokemon = ({ onAddPokemon }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && image) {
      onAddPokemon({ name, image });
      setName('');
      setImage('');
    }
  };

  return (
    <div className="add-pokemon">
      <h2>Adicione um novo Pokemon</h2>
      <p>Aviso: Nem todos os Pokemon que forem adicionados estão no banco de dados!</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>URL da Imagem:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <button type="submit">Adicionar Pokemon</button>
      </form>
    </div>
  );
};

export default AddPokemon;
