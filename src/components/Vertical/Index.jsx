import React from 'react';

import ThemeTitle from './ThemeTitle';
import VideoCard from './VideoCard';

import * as S from './style';

function Vertical({ children }) {
  return (
    <S.VerticalContainer>
      <ThemeTitle title={children} videoCount={12} slug="music" />
      <S.VerticalWrapper>
        <VideoCard slug="music" />
      </S.VerticalWrapper>
    </S.VerticalContainer>
  );
}

export default Vertical;
