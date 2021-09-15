import React from 'react';

import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

import minhaFoto from './img/user-luiz.jpg';
import fotoCafe from './img/cafe-planta.jpg';
import iconEmail from './img/envelop.png';
import iconAddress from './img/address-book.png';

import './App.css';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className='App'>
      <div className='page-section-container'>
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={minhaFoto}
          nome='Astrodev'
          descricao='Oi, eu sou o Luiz Gustavo. Sou estudante de Análise e Desenvolvimento de Sistemas e também estudo desenvolvimento front-end na Labenu.'
        />

        <ImagemButton
          imagem='https://image.flaticon.com/icons/png/512/117/117472.png'
          texto='Ver mais'
        />
      </div>

      <div className='page-section-container'>
        <CardPequeno
          image={iconEmail}
          textAlt='Icone Email'
          label='Email'
          content='luiz@mail.com'
        />
      </div>

      <div className='page-section-container'>
        <CardPequeno
          image={iconAddress}
          textAlt='Icone Endereço'
          label='Endereço'
          content='Rua Logo Ali'
        />
      </div>

      <div className='page-section-container'>
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={fotoCafe}
          nome='Autônomo'
          descricao='Colheita do café.'
        />

        <CardGrande
          imagem={fotoCafe}
          nome='Autônomo'
          descricao='Colheita do café.'
        />
      </div>

      <div className='page-section-container'>
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem='https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png'
          texto='Facebook'
        />

        <ImagemButton
          imagem='https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png'
          texto='Twitter'
        />
      </div>
    </div>
  );
}

export default App;
