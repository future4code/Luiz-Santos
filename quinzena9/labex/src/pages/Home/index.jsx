import React from 'react';
import { Link } from 'react-router-dom';
import {
  CustomLink,
  HomeContainer,
  HomeContent,
  HomeContentInfo,
} from './styles';

export default function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <HomeContentInfo>
          <h5>Então você já quer viajar para o</h5>
          <h1>Espaço</h1>
          <p>
            Vamos encarar. se você quiser ir para o espaço, você pode muito bem
            ir genuinamente para o espaço sideral e não pairar tipo de na borda
            dele. Bem, sente-se, e relaxe porque nós vamos dar-lhe uma
            verdadeira experiência fora deste mundo!
          </p>
        </HomeContentInfo>

        <CustomLink>
          <Link to='/list-trips'> Explore </Link>
        </CustomLink>
      </HomeContent>
    </HomeContainer>
  );
}
