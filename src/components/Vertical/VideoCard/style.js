import styled from 'styled-components';

export const Card = styled.div`
  background-color: var(--shapes);
  border-radius: 16px;
  padding: 40px;
  margin: 0 40px 20px;
  border: 1px solid var(--shapes);
  transition: all .2s ease-in-out;

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
  background-image: url('https://img.youtube.com/vi/JtiK0DOeI4A/hqdefault.jpg');
  background-size: cover;
  background-position: center;
  width: 300px;
  height: 170px;
  border-radius: 16px;
`;
