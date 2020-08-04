import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={150}
    viewBox="0 0 400 150"
    backgroundColor="#1A1D27"
    foregroundColor="#212531"
  >
    <rect x="16" y="13" rx="16" ry="16" width="500" height="150" />
  </ContentLoader>
);

export default Loader;
