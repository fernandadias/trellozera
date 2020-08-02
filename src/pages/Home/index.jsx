import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import GlobalStyles from '../../styles/global';

import PageDefault from '../../components/PageDefault';
import Vertical from '../../components/Vertical/Index';

import * as S from './styles';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get().then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <>
      <PageDefault>
        <S.HomeContainer>
          {categories.map((category) => (
            <Vertical
              category={category}
              key={category.slug}
              slug={category.slug}
            >
              {category.name}
            </Vertical>
          ))}
        </S.HomeContainer>
      </PageDefault>
      <GlobalStyles />
    </>
  );
}

export default Home;
