import React from 'react';

import Header from '../Header';

function PageDefault({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default PageDefault;
