import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/svg/logo.svg';
import './style.css';

class Home extends Component {
    render(){
    return(
        <div className="homeContainer">
            <div className="homeTitle">
                <img src={logo} />
            </div>
            <div className="question">
                <span>¿Quieres crear tu propia juego de preguntas?</span>
            </div>
            <Link to="/configuration">
                <button type="button">
                    Empieza!
                </button>
            </Link>
        </div>
        
    )}
}

export default Home