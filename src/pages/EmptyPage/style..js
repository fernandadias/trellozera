import styled from 'styled-components';

export const ImageBackground = styled.div`
overflow: hidden;

  div{
    position: absolute;
    width: 100%;
    z-index: 99;
    margin: 0 auto;
    text-align: center;
    top: 20%;

    > a{
      padding: 16px 24px;
      background-color: var(--themeColor);
      border-radius: 4px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      color: var(--shape);
      letter-spacing: 0.08em;
      text-decoration: none;
      display: inline-block;
      margin-top: 20px;
      transition: all .2s ease-in-out;

      &:hover{
        box-shadow: 0px 0px 40px rgba(11, 191, 148, 0.4);
        opacity: .9;
      }
    }
  }

  img{
    height: 100%;
    width: auto;
    position: fixed;
    top: 0px;
    left: 0px;
    min-width: 100%;
    min-height: 100%;
    opacity: 0.3;
  }

  h1, p{
    color: var(--titles);
  }

  a{
    color: var(--themeColor)
  }

`;

export const ImageBackgrounds = styled.div`
 
`;
