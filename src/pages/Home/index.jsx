import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import GlobalStyles from '../../styles/global';

import PageDefault from '../../components/PageDefault';
import Vertical from '../../components/Vertical/Index';

import * as S from './styles';

function Home() {
  const [designContent, setDesignContent] = useState([]);
  const [productContent, setProductContent] = useState([]);
  const [backContent, setBackContent] = useState([]);
  const [frontContent, setFrontContent] = useState([]);
  const [dataContent, setDataContent] = useState([]);
  const [musicContent, setMusicContent] = useState([]);

  useEffect(() => {
    api.get('/design').then((response) => {
      setDesignContent(response.data);
    });
    api.get('/product').then((response) => {
      setProductContent(response.data);
    });
    api.get('/back').then((response) => {
      setBackContent(response.data);
    });
    api.get('/front').then((response) => {
      setFrontContent(response.data);
    });
    api.get('/data').then((response) => {
      setDataContent(response.data);
    });
    api.get('/music').then((response) => {
      setMusicContent(response.data);
    });
  }, []);

  return (
    <>
      <PageDefault>
        <S.HomeContainer>
          <Vertical content={designContent} slug="design">
            Design
          </Vertical>
          <Vertical content={productContent} slug="product">
            Produto
          </Vertical>
          <Vertical content={backContent} slug="back">
            Back-end
          </Vertical>
          <Vertical content={frontContent} slug="front">
            Front-end
          </Vertical>
          <Vertical content={dataContent} slug="data">
            Dados
          </Vertical>
          <Vertical content={musicContent} slug="music">
            Música
          </Vertical>
        </S.HomeContainer>
      </PageDefault>
      <GlobalStyles />
    </>
  );
}

export default Home;
