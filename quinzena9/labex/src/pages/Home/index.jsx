import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import {
  CustomLink,
  HomeContainer,
  HomeContent,
  HomeContentInfo,
} from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <HomeContent>
          <HomeContentInfo>
            <h5>Então você já quer viajar para o</h5>
            <h1>Espaço</h1>
            <p>
              Vem com a gente! Nós vamos lhe dar uma verdadeira experiência fora
              deste mundo.
            </p>
          </HomeContentInfo>

          <CustomLink>
            <Link to='/list-trips'> Explore </Link>
          </CustomLink>
        </HomeContent>
      </HomeContainer>
    </>
  );
}
