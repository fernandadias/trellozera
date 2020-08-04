import React, { useState } from 'react';

import GlobalStyles from '../../styles/global';

import PageDefault from '../../components/PageDefault';
import Vertical from '../../components/Vertical/Index';

import * as S from './styles';

function Home() {
  const [filter, setFilter] = useState('all');

  return (
    <>
      <PageDefault setFilter={setFilter} filter={filter}>
        <S.HomeContainer>
          <Vertical filter={filter} slug="design">
            Design
          </Vertical>
          <Vertical filter={filter} slug="product">
            Produto
          </Vertical>
          <Vertical filter={filter} slug="back">
            Back-end
          </Vertical>
          <Vertical filter={filter} slug="front">
            Front-end
          </Vertical>
          <Vertical filter={filter} slug="data">
            Dados
          </Vertical>
          <Vertical filter={filter} slug="music">
            Música
          </Vertical>
        </S.HomeContainer>
      </PageDefault>
      <GlobalStyles />
    </>
  );
}

export default Home;
