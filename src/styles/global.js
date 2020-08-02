import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;

    --background: #15191F;
    --shapes: #1A1D27;
    --titles: #F2EBEB;
    --subTitles: #5A5E63;
    --infos: #42454F;

    --musicColor: #B4FE56;
    --designColor: #FE5688;
    --productColor: #FEED56;
    --frontColor: #FE9C56;
    --dataColor: #56EAFE;
    --backColor: #56FEB7;

    background-color: var(--background);

  }

  body, input, button{
    font-family: 'Montserrat', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 700;
    color: var(--titles);
  }

  button{
    cursor: pointer;
  }
  
`;
