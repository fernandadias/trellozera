import React from 'react';
import PropTypes from 'prop-types';

import Icons from './Icons';

import * as S from './style';

function ThemeTitle({ title, videoCount, slug }) {
  let ThisIcon;
  switch (slug) {
    case 'design': ThisIcon = Icons.design;
      break;
    case 'product': ThisIcon = Icons.product;
      break;
    case 'front': ThisIcon = Icons.front;
      break;
    case 'data': ThisIcon = Icons.data;
      break;
    case 'music': ThisIcon = Icons.music;
      break;
    case 'back': ThisIcon = Icons.back;
      break;
    default: ThisIcon = Icons.design;
      break;
  }

  return (
    <S.ThemeTitleContainer>
      <S.ThemeIcon slug={slug}>
        <ThisIcon size={18} />
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
