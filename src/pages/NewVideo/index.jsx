import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalStyles from '../../styles/global';

import PageDefault from '../../components/PageDefault';

import api from '../../services/api';

import * as S from './style';

function NewVideo() {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [slug, setSlug] = useState('design');
  const history = useHistory();

  function postVideo() {
    api.post(`/${slug}/`, {
      watched: false,
      title,
      url,
    }).then((response) => {
      history.push('/');
    });
  }

  return (
    <>
      <PageDefault />
      <S.NewVideoContainer>
        <form onSubmit={(form) => {
          form.preventDefault();
          postVideo();
        }}
        >
          <h1>Cadastrar um novo vídeo</h1>
          <div>
            <label>
              <S.Input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <span>Título do vídeo</span>
            </label>
            <label>
              <S.Input
                type="text"
                name="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <span>URL</span>
            </label>
            <h2>Qual o assunto dele?</h2>
            <select name="category" id="category" onChange={(e) => setSlug(e.target.value)}>
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
