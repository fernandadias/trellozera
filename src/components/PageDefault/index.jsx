import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

function PageDefault({ children, setFilter, filter }) {
  return (
    <>
      <Header setFilter={setFilter} filter={filter} />
      {children}
      <Footer />
    </>
  );
}

export default PageDefault;
