import React from 'react';
import './style.scss';

const Modal = ({ handleClose, handleClick, show, children }) => {
    const showHideClassName = show ? 'show' : 'hide';
    return (
      <div className={`modal ${showHideClassName}`}>
        <section className='modal-main'>
          {children}
          <button
            onClick={handleClick}>
            Continuar
          </button>
          <button
            onClick={handleClose}>
            Cerrar
          </button>
        </section>
      </div>
    );
  };

export default Modal;