import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import GlobalStyles from '../../styles/global';

import PageDefault from '../../components/PageDefault';
import Vertical from '../../components/Vertical/Index';

import * as S from './styles';

function Home() {
  return (
    <>
      <PageDefault>
        <S.HomeContainer>
          <Vertical slug="design">
            Design
          </Vertical>
          <Vertical slug="product">
            Produto
          </Vertical>
          <Vertical slug="back">
            Back-end
          </Vertical>
          <Vertical slug="front">
            Front-end
          </Vertical>
          <Vertical slug="data">
            Dados
          </Vertical>
          <Vertical slug="music">
            Música
          </Vertical>
        </S.HomeContainer>
      </PageDefault>
      <GlobalStyles />
    </>
  );
}

export default Home;
