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
          <Vertical>Front-end</Vertical>
          <Vertical>Dados</Vertical>
          <Vertical>Música</Vertical>
          <Vertical>Back-end</Vertical>
          <Vertical>Back-end</Vertical>
          <Vertical>Back-end</Vertical>
          <Vertical>Back-end</Vertical>
          <Vertical>Back-end</Vertical>
          <Vertical>Back-end</Vertical>
        </S.HomeContainer>
      </PageDefault>
      <GlobalStyles />
    </>
  );
}

export default Home;
