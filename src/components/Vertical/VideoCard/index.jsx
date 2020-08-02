import React from 'react';
import { FiCircle, FiCheckCircle } from 'react-icons/fi';

import * as S from './style';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({ video }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(video.url)}/hqdefault.jpg`;
  return (
    <S.Card>
      <S.VideoCheck>
        <FiCircle className="notwatched" size={20} />
        <FiCheckCircle className="watched" size={20} />
        <S.VideoCheckHelper>marcar como visto</S.VideoCheckHelper>
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

export default VideoCard;
