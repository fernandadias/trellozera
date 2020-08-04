import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import ThemeTitle from './ThemeTitle';
import VideoCard from './VideoCard';

import * as S from './style';

function Vertical({ children, slug }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    api.get(`/${slug}?_sort=id&_order=desc`).then((response) => {
      setContent(response.data);
    });
  }, [slug]);

  function handleWatched(id) {
    const newContent = content.map((cont) => (cont.id === id ? { ...cont, watched: !cont.watched } : cont));
    setContent(newContent);
  }

  function updateWatchedStatus(video) {
    api.patch(`/${slug}/${video.id}`, {
      watched: !video.watched,
    }).then(() => {
      handleWatched(video.id);
    });
  }

  return (
    <S.VerticalContainer>
      <ThemeTitle title={children} videoCount={content.length} slug={slug} />
      <S.VerticalWrapper>
        {content.map((video) => (
          <VideoCard key={video.id} video={video} slug={slug} onClick={() => updateWatchedStatus(video)} />
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
