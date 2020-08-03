import styled from 'styled-components';

export const Card = styled.div`
  background-color: var(--shapes);
  border-radius: 16px;
  padding: 40px;
  margin: 0 40px 20px;
  border: ${(props) => (props.watched ? `1px solid var(--${props.slug}Color)` : '1px solid var(--shapes)')};
  transition: all .2s ease-in-out;
  position: relative;
  

  &:hover{
    border: 1px solid ${(props) => (props.slug ? `var(--${props.slug}Color)` : 'var(--themeColor)')};
    box-shadow: 0px 0px 20px ${(props) => (props.slug ? `var(--${props.slug}ColorRGBA)` : 'var(--themeColorRGBA)')};
    transform: scale(1.02);
    z-index:3;
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
    z-index: 2;
  }

  &:hover{
    color: ${(props) => (props.slug ? `var(--${props.slug}Color)` : 'var(--shapes)')};
    cursor: pointer;
    span{
      opacity: 1;
    }
  }

  .watched, .watched:hover{
    color: ${(props) => (props.slug ? `var(--${props.slug}Color)` : 'var(--shapes)')};
  }


`;

export const VideoCheckHelper = styled.span`
  opacity: 0;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 10px;
  padding: 4px 30px 3px 10px;
  border-radius: 20px;
  background-color: var(--background);
`;
