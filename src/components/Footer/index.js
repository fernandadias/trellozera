import React from 'react';
import { FiHeart } from 'react-icons/fi';

import * as S from './style';

function Footer() {
  return (
    <S.FooterText>
      feito com muito
      {' '}
      <FiHeart />
      {' '}
      durante a
      {' '}
      <a href="https://www.alura.com.br/imersao-react/" target="_blank">imersão react da Alura</a>
    </S.FooterText>
  );
}

export default Footer;
