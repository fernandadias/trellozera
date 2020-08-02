import React from 'react';
import { FiCircle, FiCheckCircle } from 'react-icons/fi';

import * as S from './style';

function VideoCard({ video }) {
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
        <S.VideoThumb />
      </S.VideoLink>
    </S.Card>
  );
}

export default VideoCard;
