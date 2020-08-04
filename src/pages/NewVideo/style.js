import styled, { css } from 'styled-components';

export const NewVideoContainer = styled.div`
   
    height: 95vh;
    padding: 120px 0 20px;

    form{
      width: 80vw;
      max-width: 900px;
      margin: 20px auto;
    }

    div{
      display: flex;
      flex-direction: column;
    }

    h1{
      text-align: center;
      margin-bottom: 40px;
    }

    label{
      position: relative;
    }

    span{
      color: #E5E5E5;
      height: 57px;
      position: absolute; 
      top: 0;
      left: 16px;
      
      display: flex;
      align-items: center;
      
      transform-origin: 0% 0%;
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      
      transition: .1s ease-in-out;
    }

    button{
      border: 0;
      padding: 16px 24px;
      background-color: var(--themeColor);
      border-radius: 4px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      color: var(--shape);
      display: flex;
      letter-spacing: 0.08em;
      transition: all .2s ease-in-out;
      text-decoration: none;

      &:hover{
        box-shadow: 0px 0px 40px rgba(11, 191, 148, 0.4);
        opacity: .9;
      }

      svg {
        margin-right: 8px;
      }
    }
    
    h2{
      font-size: 16px;
      margin-bottom: 16px;
    }

    select{
      width: 100%;
      height: 57px;
      font-size: 18px;
      color: var(--titles);

      outline: 0;
      border: 0;
      border-top: 4px solid transparent;
      border-bottom: 2px solid var(--shapes);
      background-color: var(--input);
      
      padding: 16px 16px;
      margin-bottom: 45px;
      
      resize: none;
      border-radius: 4px;
      transition: border-color .3s;

      &:focus {
        border-bottom-color: var(--themeColor);
      }
      &:focus + span {
        transform: scale(.6) translateY(-10px);
        color: var(--subTitles)
      }
    }
`;

export const Input = styled.input`
  width: 100%;
  height: 57px;
  font-size: 18px;
  color: var(--titles);

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 2px solid var(--shapes);
  background-color: var(--input);

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--themeColor);
  }
  &:focus + span {
    transform: scale(.6) translateY(-10px);
    color: var(--subTitles)
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        + span {
        transform: scale(.6) translateY(-10px);
        color: var(--themeColor);
      }
    `;
  }
  }
`;
