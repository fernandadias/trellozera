import React from 'react';
import PropTypes from 'prop-types';

import ThemeTitle from './ThemeTitle';
import VideoCard from './VideoCard';

import * as S from './style';

function Vertical({ children, content, slug }) {
  return (
    <S.VerticalContainer>
      <ThemeTitle title={children} videoCount={content.length} slug={slug} />
      <S.VerticalWrapper>
        {content.map((video) => (
          <VideoCard key={video.id} video={video} slug={slug} />
        ))}
      </S.VerticalWrapper>
    </S.VerticalContainer>
  );
}

Vertical.propTypes = {
  content: PropTypes.objectOf(PropTypes.string || PropTypes.number).isRequired,
  children: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
export default Vertical;
