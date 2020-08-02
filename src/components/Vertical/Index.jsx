import React from 'react';

import ThemeTitle from './ThemeTitle';

import * as S from './style';

function Vertical({ children }) {
  return (
    <S.VerticalContainer>
      <ThemeTitle title="Front" videoCount={12} slug="music" />
    </S.VerticalContainer>
  );
}

export default Vertical;
