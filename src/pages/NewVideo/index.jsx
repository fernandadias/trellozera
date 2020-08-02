import React from 'react';
import GlobalStyles from '../../styles/global';

import PageDefault from '../../components/PageDefault';

function NewVideo() {
  return (
    <>
      <PageDefault />
      <form>
        <label>
          <input type="text" name="nome" />
          <span>Título do vídeo</span>
        </label>
        <label>
          <input type="text" name="nome" />
          <span>URL</span>
        </label>
        <label>
          <input type="text" name="nome" />
          <span>Categori</span>
        </label>
      </form>
      <GlobalStyles />
    </>
  );
}

export default NewVideo;
