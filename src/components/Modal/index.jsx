import React from 'react';

import * as S from './style';

function Modal() {
  return (
    <>
      <S.Modal>
        <div className="md-content">
          <h3>Modal Dialog</h3>
          <div>
            <p>This is a modal window. You can do the following things with it:</p>
            <ul>
              <li>
                <strong>Read:</strong>
                {' '}
                Modal windows will probably tell you something important so don't forget to read what it says.
              </li>
              <li>
                <strong>Look:</strong>
                {' '}
                modal windows enjoy a certain kind of attention; just look at it and appreciate its presence.
              </li>
              <li>
                <strong>Close:</strong>
                {' '}
                click on the button below to close the modal.
              </li>
            </ul>
            <button className="md-close">Close me!</button>
          </div>
        </div>
      </S.Modal>

      ...

      <S.Overlay />
    </>
  );
}

export default Modal;
