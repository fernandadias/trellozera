import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: var(--shapes);
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 150px;
  height: 30px;
`;

export const Button = styled.button`
  border: 0;
  height: 36px;
  padding: 8px;
  background-color: var(--backColor);
  border-radius: 4px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: var(--shape);
  display: flex;

  svg {
    margin-right: 8px;
  }
`;
