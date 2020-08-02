import React from 'react';

import ThemeTitle from './ThemeTitle';
import VideoCard from './VideoCard';

import * as S from './style';

function Vertical({ category }) {
  return (
    <S.VerticalContainer>
      <ThemeTitle title={category.name} videoCount={2} slug={category.slug} />
      <S.VerticalWrapper>
        {category.videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </S.VerticalWrapper>
    </S.VerticalContainer>
  );
}

export default Vertical;
