import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>Sobre a PokeWiki</h1>
      <p>A PokeWiki foi criada com o intuito de testar os conhecimentos que adquiri no módulo intermediário do curso de desenvolvimento fullstack.
      </p>
      <p>Funcionalidades principais:</p>
      <ul>
        <li>Pesquisar Pokémon: Encontre informações detalhadas sobre qualquer Pokémon.</li>
        <li>Adicionar Pokémon: Crie sua própria lista personalizada de Pokémon.</li>
        <li>Detalhes do Pokémon: Veja informações detalhadas como, incluindo tipos, altura e peso de cada Pokémon.(Haverá mais adições no futuro.)</li>
      </ul>
      <p>Criado por Francisco Gabriel da turma FST2 de Desenvolvimento FullStack CAPACITA BRASIL.</p>
    </div>
  );
};

export default About;
