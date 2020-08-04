import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import ThemeTitle from './ThemeTitle';
import VideoCard from './VideoCard';

import * as S from './style';

function Vertical({ children, slug }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    api.get(`/${slug}`).then((response) => {
      setContent(response.data);
    });
  }, []);

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
  children: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
export default Vertical;
