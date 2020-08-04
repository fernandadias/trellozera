import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useSound from 'use-sound';

import Loader from '../Loader';

import watchedfx from '../../sounds/watched.mp3';

import api from '../../services/api';

import ThemeTitle from './ThemeTitle';
import VideoCard from './VideoCard';

import * as S from './style';

function Vertical({ children, slug, filter }) {
  const [content, setContent] = useState([]);
  const [watchedPlay] = useSound(watchedfx);

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
    if (!video.watched) watchedPlay();
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
        {content.length ? (
          content.map((video) => (
            <VideoCard filter={filter} key={video.id} video={video} slug={slug} onClick={() => updateWatchedStatus(video)} />
          ))

        ) : (
            <>
              <Loader />
              <Loader />
              <Loader />
              <Loader />
            </>
          )}
      </S.VerticalWrapper>
    </S.VerticalContainer>
  );
}

Vertical.propTypes = {
  children: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
export default Vertical;
