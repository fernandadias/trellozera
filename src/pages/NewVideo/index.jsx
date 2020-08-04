import React from 'react';
import GlobalStyles from '../../styles/global';

import PageDefault from '../../components/PageDefault';

import * as S from './style';

function NewVideo() {
  return (
    <>
      <PageDefault />
      <S.NewVideoContainer>
        <form>
          <h1>Cadastrar um novo vídeo</h1>
          <div>
            <label>
              <input type="text" name="title" />
              <span>Título do vídeo</span>
            </label>
            <label>
              <input type="text" name="url" />
              <span>URL</span>
            </label>
            <h2>Qual o assunto dele?</h2>
            <select name="category">
              <option value="design">Design</option>
              <option value="product">Product</option>
              <option value="back">Back-end</option>
              <option value="front">Front-end</option>
              <option value="data">Dados</option>
              <option value="music">Música</option>
            </select>
          </div>
          <button type="submit">cadastrar</button>
        </form>
      </S.NewVideoContainer>
      <GlobalStyles />
    </>
  );
}

export default NewVideo;
