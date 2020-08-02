import React from 'react';
import PropTypes from 'prop-types';

import Icons from './Icons';

import * as S from './style';

function ThemeTitle({ title, videoCount, slug }) {
  return (
    <S.ThemeTitleContainer>
      <S.ThemeIcon slug={slug}>
        <Icons.front size={18} />
      </S.ThemeIcon>
      <S.ThemeInfos>
        <S.ThemeTitle>{title}</S.ThemeTitle>
        <S.VideoCount>
          {videoCount}
          {' '}
          videos
        </S.VideoCount>
      </S.ThemeInfos>
    </S.ThemeTitleContainer>
  );
}

export default ThemeTitle;

ThemeTitle.propTypes = {
  title: PropTypes.string.isRequired,
  videoCount: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};
