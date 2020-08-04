import styled, { css } from 'styled-components';

export const Modal = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	width: 50%;
	max-width: 630px;
	min-width: 320px;
	height: auto;
	z-index: 2000;
	visibility: hidden;
	backface-visibility: hidden;
	transform: translateX(-50%) translateY(-50%);
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;

export const Overlay = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	visibility: hidden;
	top: 0;
	left: 0;
	z-index: 1000;
	opacity: 0;
	background: rgba(143,27,15,0.8);
	transition: all 0.3s;
  ${(props) => props.visible && css`
    ~ .md-overlay {
      opacity: 1;
      visibility: visible;
    }
  `}
`;
