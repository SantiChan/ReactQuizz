import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import './style.scss';


const Modal = ({ handleClose, handleClick, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <button
            onClick={handleClick}>
            Añadir
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