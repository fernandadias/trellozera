import React from 'react';
import GlobalStyles from '../../styles/global';

import PageDefault from '../../components/PageDefault';
import Vertical from '../../components/Vertical/Index';

import * as S from './styles';

function Home() {
  return (
    <>
      <PageDefault>
        <S.HomeContainer>
          <Vertical slug="front">Front-end</Vertical>
          <Vertical slug="data">Dados</Vertical>
          <Vertical slug="music">Música</Vertical>
          <Vertical slug="back">Back-end</Vertical>
          <Vertical slug="product">Produto</Vertical>
          <Vertical slug="design">Design</Vertical>
        </S.HomeContainer>
      </PageDefault>
      <GlobalStyles />
    </>
  );
}

export default Home;
