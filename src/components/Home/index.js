import React, { Component } from 'react';
import logo from '../../images/svg/logo.svg';
import './style.css';

import Button from '../Button';

class Home extends Component {
    render(){
        return(
            <div className="container">
                <div className="title">
                    <img src={logo} />
                </div>
                <div className="button-container">
                    <div className="subtitle">
                        <span>¿Quieres crear tu propio juego de preguntas?</span>
                    </div>
                    <Button 
                        to="/configuration" 
                        onClick={(event)=> event.preventDefault()} 
                        large={true} 
                        gradiant={true}
                    >
                        Empezar!
                    </Button>
                </div>
            </div>
            
        )
    }
}

export default Home