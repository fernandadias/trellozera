import React from 'react';
import { Link } from 'react-router-dom';

import { FiPlus, FiCircle, FiCheckCircle } from 'react-icons/fi';
import LogoSrc from '../../assets/trellozera-logo.png';

import * as S from './style';

function Header() {
  return (
    <S.HeaderContainer>
      <S.Logo className="Logo" src={LogoSrc} alt="Dois retângulos verdes com o texto 'Trellozera' " title="Trellozera | Meu repositório de videos maneiros" />
      <S.Filters>
        <span>filtrar por: </span>
        <a href="$" className="active">todos</a>
        <a href="$">
          <FiCircle size={16} />
          <span>vistos</span>
        </a>
        <a href="$">
          <FiCheckCircle size={16} />
          <span> não vistos</span>
        </a>
      </S.Filters>
      <S.Button>
        <FiPlus size={16} />
        <span>Novo video</span>
      </S.Button>
    </S.HeaderContainer>
  );
}

export default Header;
