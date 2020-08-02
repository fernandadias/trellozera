import React from 'react';
import { Link } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';
import LogoSrc from '../../assets/trellozera-logo.png';

import * as S from './style';

function Header() {
  return (
    <S.HeaderContainer>
      <S.Logo className="Logo" src={LogoSrc} alt="Dois retângulos verdes com o texto 'Trellozera' " title="Trellozera | Meu repositório de videos maneiros" />
      <S.Button>
        <FiPlus size={16} />
        <span>Adicionar video</span>
      </S.Button>
    </S.HeaderContainer>
  );
}

export default Header;
