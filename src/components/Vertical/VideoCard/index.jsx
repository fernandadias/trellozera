import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { FiCircle, FiCheckCircle } from 'react-icons/fi';

import Modal from '../../Modal';

import * as S from './style';

function VideoCard({
  video, slug, onClick, filter,
}) {
  function getYouTubeId(youtubeURL) {
    return youtubeURL
      .replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7',
      );
  }

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (
      (filter === 'watched' && video.watched)
      || (filter === 'non-watched' && !video.watched)
      || (filter === 'all')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [filter]);

  const image = `https://img.youtube.com/vi/${getYouTubeId(video.url)}/hqdefault.jpg`;
  return (
    <>
      <S.Card watched={video.watched} slug={slug} visible={visible}>
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
    </>
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
