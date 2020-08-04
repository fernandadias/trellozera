import React from 'react';
import PropTypes from 'prop-types';

import { FiCircle, FiCheckCircle } from 'react-icons/fi';

import * as S from './style';

function VideoCard({ video, slug, onClick }) {
  function getYouTubeId(youtubeURL) {
    return youtubeURL
      .replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7',
      );
  }

  const image = `https://img.youtube.com/vi/${getYouTubeId(video.url)}/hqdefault.jpg`;
  return (
    <S.Card watched={video.watched} slug={slug}>
      <S.VideoCheck slug={slug} onClick={() => onClick(video.id)}>
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
      <S.VideoLink href={video.url} target="_blank">
        <S.VideoThumb url={image} />
      </S.VideoLink>
    </S.Card>
  );
}

VideoCard.propTypes = {
  video: PropTypes.shape({
    watched: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  slug: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default VideoCard;
