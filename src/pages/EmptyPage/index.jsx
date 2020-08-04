import React, { useEffect, useState } from 'react';
import { FiSmile } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import GlobalStyles from '../../styles/global';

import * as S from './style.';

import notFound01 from '../../assets/gifs/notfound-01.gif';
import notFound02 from '../../assets/gifs/notfound-02.gif';
import notFound03 from '../../assets/gifs/notfound-03.gif';
import notFound04 from '../../assets/gifs/notfound-04.gif';
import notFound05 from '../../assets/gifs/notfound-05.gif';
import notFound06 from '../../assets/gifs/notfound-06.gif';
import notFound07 from '../../assets/gifs/notfound-07.gif';
import notFound08 from '../../assets/gifs/notfound-08.gif';
import notFound09 from '../../assets/gifs/notfound-09.gif';
import notFound10 from '../../assets/gifs/notfound-10.gif';
import notFound11 from '../../assets/gifs/notfound-11.gif';
import notFound12 from '../../assets/gifs/notfound-12.gif';
import notFound13 from '../../assets/gifs/notfound-13.gif';
import notFound14 from '../../assets/gifs/notfound-14.gif';

function EmptyPage() {
  const Images = [
    notFound01,
    notFound02,
    notFound03,
    notFound04,
    notFound05,
    notFound06,
    notFound07,
    notFound08,
    notFound09,
    notFound10,
    notFound11,
    notFound12,
    notFound13,
    notFound14];

  const [bg, setBg] = useState();

  useEffect(() => {
    const rand = Math.floor(Math.random() * Images.length);
    setBg(rand);
  }, []);

  return (
    <>
      <S.ImageBackground>
        <div>
          <h1>Vish, deu ruim</h1>
          <p>
            Quer aproveitar e dar uma passada no meu
            {' '}
            <a href="https://github.com/fernandadias" target="_blank">Github</a>
            ?
            {' '}
            <FiSmile />
          </p>
          <Link to="/">Voltar para home</Link>
        </div>
        <img src={Images[bg]} />
      </S.ImageBackground>
      <GlobalStyles />
    </>
  );
}

export default EmptyPage;
