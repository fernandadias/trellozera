import React from 'react';

import ThemeTitle from './ThemeTitle';
import VideoCard from './VideoCard';

import * as S from './style';

function Vertical({ children, slug }) {
  return (
    <S.VerticalContainer>
      <ThemeTitle title={children} videoCount={12} slug={slug} />
      <S.VerticalWrapper>
        <VideoCard slug="music" />
      </S.VerticalWrapper>
    </S.VerticalContainer>
  );
}

export default Vertical;
