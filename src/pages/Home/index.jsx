import React from 'react';
import GlobalStyles from '../../styles/global';

import fake_data from '../../data/fake_data.json';

import PageDefault from '../../components/PageDefault';
import Vertical from '../../components/Vertical/Index';

import * as S from './styles';

function Home() {
  return (
    <>
      <PageDefault>
        <S.HomeContainer>
          {fake_data.category.map((category) => (
            <Vertical category={category} key={category.slug} slug={category.slug}>{category.name}</Vertical>
          ))}
        </S.HomeContainer>
      </PageDefault>
      <GlobalStyles />
    </>
  );
}

export default Home;
