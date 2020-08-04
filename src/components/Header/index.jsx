/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import {
  FiPlus, FiCircle, FiCheckCircle, FiChevronLeft,
} from 'react-icons/fi';
import LogoSrc from '../../assets/trellozera-logo.png';

import * as S from './style';

function Header({ setFilter, filter }) {
  const insideRoute = useRouteMatch({
    path: '/video/new',
    strict: true,
    sensitive: true,
  });

  return (
    <S.HeaderContainer>
      <Link to="/">
        <S.Logo className="Logo" src={LogoSrc} alt="Dois retângulos verdes com o texto 'Trellozera' " title="Trellozera | Meu repositório de videos maneiros" />
      </Link>
      {insideRoute ? (
        <S.Button to="/">
          <FiChevronLeft size={16} />
          <span>voltar</span>
        </S.Button>
      )
        : (
          <>
            <S.Filters>
              <span>filtrar por: </span>
              <a
                onClick={() => setFilter('all')}
                className={filter === 'all' ? 'active' : ''}
              >
                todos
              </a>
              <a
                onClick={() => setFilter('watched')}
                className={filter === 'watched' ? 'active' : ''}
              >
                <FiCheckCircle size={16} />
                <span>vistos</span>
              </a>
              <a
                onClick={() => setFilter('non-watched')}
                className={filter === 'non-watched' ? 'active' : ''}
              >
                <FiCircle size={16} />
                <span> não vistos</span>
              </a>
            </S.Filters>

            <S.Button to="/video/new">
              <FiPlus size={16} />
              <span>novo video</span>
            </S.Button>
          </>
        )}
    </S.HeaderContainer>
  );
}

export default Header;
