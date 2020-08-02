import React from 'react';
import PropTypes from 'prop-types';

import ThemeTitle from './ThemeTitle';
import VideoCard from './VideoCard';

import * as S from './style';

function Vertical({ category }) {
  return (
    <S.VerticalContainer>
      <ThemeTitle title={category.name} videoCount={2} slug={category.slug} />
      <S.VerticalWrapper>
        {category.videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </S.VerticalWrapper>
    </S.VerticalContainer>
  );
}

Vertical.propTypes = {
  category: PropTypes.objectOf(PropTypes.string || PropTypes.number).isRequired,
};
export default Vertical;
