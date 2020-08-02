import styled from 'styled-components';

export const Card = styled.div`
  background-color: var(--shapes);
  border-radius: 16px;
  padding: 40px;
  margin: 0 40px 20px;
  border: 1px solid var(--shapes);
  transition: all .2s ease-in-out;
  position: relative;

  &:hover{
    box-shadow: ${(props) => (props.slug ? `0px 0px 40px var(--${props.slug}ColorRGBA)` : '0px 0px 40px var(--themeRGBA)')};
    border: 1px solid ${(props) => (props.slug ? `var(--${props.slug}Color)` : 'var(--themeColor)')};;
  }
`;

export const Timestamp = styled.div`
  display: flex;
  margin-bottom: 20px;

  span{
    font-weight: 600;
    font-size: 12px;
    line-height: 26px;
    color: var(--infos);
  }

  svg{
    color: var(--infos);
    height: 24px;
    margin-right: 4px;
  }
`;

export const VideoTitle = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 20px;
`;

export const VideoLink = styled.a`

  div{
    transition: opacity .2s ease-in-out;
  }

  &:hover div{
    opacity: .8;
  }
`;

export const VideoThumb = styled.div`
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  height: 170px;
  border-radius: 16px;
`;

export const VideoCheck = styled.a`
  color: var(--infos);
  transition: all .2s ease-in-out;

  svg{
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .watched{
    display: none;
  }

  &:hover{
    color: var(--themeColor);
    cursor: pointer;
    span{
      visibility: visible;
      opacity: 1;
    }
  }

`;

export const VideoCheckHelper = styled.span`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 20px;
  right: 50px;
  font-size: 10px;
`;
