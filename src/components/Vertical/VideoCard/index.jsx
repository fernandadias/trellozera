import React from 'react';
import { FiClock } from 'react-icons/fi';

import * as S from './style';

function VideoCard({ slug }) {
  return (
    <S.Card slug={slug}>
      <S.Timestamp>
        <FiClock />
        <span>01/08/2020</span>
      </S.Timestamp>
      <S.VideoTitle>
        [CHALLENGE] Build and deploy (with DNS / SSL) a URL Shortener in 3133.7 seconds (52 minutes)
      </S.VideoTitle>
      <S.VideoLink href="/">
        <S.VideoThumb />
      </S.VideoLink>
    </S.Card>
  );
}

export default VideoCard;
