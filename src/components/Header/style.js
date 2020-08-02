import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: var(--shapes);
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  position: fixed;
  top: 0;
  z-index: 2;
`;

export const Logo = styled.img`
  width: 150px;
  height: 30px;
`;

export const Filters = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: var(--subTitles);
  font-variant: small-caps;
  display: flex;
  line-height: 32px;

  > span{
    margin-right: 16px;
  }

  a{
    font-weight: 700;
    color: var(--subTitles);
    margin: 0 8px;
    text-decoration: none;
    line-height: 32px;
    display: flex;
    transition: color .2s ease-in-out;

    svg{
      height: 32px;
      margin-right: 4px;
    }

    
    &.active, &:hover{
      color: var(--themeColor);
    }
  }
`;

export const Button = styled.button`
  border: 0;
  height: 36px;
  padding: 8px 16px;
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

  &:hover{
    box-shadow: 0px 0px 40px rgba(11, 191, 148, 0.4);
    opacity: .9;
  }

  svg {
    margin-right: 8px;
  }
`;
