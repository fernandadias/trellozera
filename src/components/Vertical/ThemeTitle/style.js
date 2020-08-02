import styled from 'styled-components';

export const ThemeTitleContainer = styled.div`
  display: flex;
`;

export const ThemeIcon = styled.span`
  width: 40px;
  height: 40px;
  margin-right: 16px;
  border-radius: 8px;
  background: ${(props) => (props.slug ? `var(--${props.slug}Color)` : 'var(--themeColor)')};
  box-shadow: ${(props) => (props.slug ? `0px 0px 40px var(--${props.slug}ColorRGBA)` : '0px 0px 40px var(--themeRGBA)')};
  display: flex;

  svg {
    height: 40px;
    width: 24px;
    margin: 0 auto;
  }

`;

export const ThemeInfos = styled.div``;

export const ThemeTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
`;

export const VideoCount = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: var(--infos);
`;
