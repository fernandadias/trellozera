import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

function PageDefault({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default PageDefault;
