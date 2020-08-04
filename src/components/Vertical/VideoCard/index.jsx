import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { FiCircle, FiCheckCircle } from 'react-icons/fi';
import api from '../../../services/api';

import * as S from './style';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function handleCardClick(id, slug, watched) {
  const changeWatched = !watched;
  api.patch(`/${slug}/${id}`, {
    watched: changeWatched,
  }).then((response) => {

  });
}

function VideoCard({ video, slug }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(video.url)}/hqdefault.jpg`;
  return (
    <S.Card watched={video.watched} slug={slug}>
      <S.VideoCheck slug={slug} onClick={() => handleCardClick(video.id, slug, video.watched)}>
        {video.watched ? (
          <FiCheckCircle className="watched" size={20} />
        ) : (
            <>
              <FiCircle className="notwatched" size={20} />
              <S.VideoCheckHelper>marcar como visto</S.VideoCheckHelper>
            </>
          )}
      </S.VideoCheck>
      <S.VideoTitle>
        {video.title}
      </S.VideoTitle>
      <S.VideoLink href="/">
        <S.VideoThumb url={image} />
      </S.VideoLink>
    </S.Card>
  );
}

VideoCard.propTypes = {
  video: PropTypes.objectOf(PropTypes.string || PropTypes.number).isRequired,
  slug: PropTypes.string.isRequired,
};

export default VideoCard;
