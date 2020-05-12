import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './style.css';

import Button from '../Button';

class Home extends Component {
    render(){
        return(
            <div className="container">
                <div className="animations">
                    <div className="square"></div>
                    <div className="circle"></div>
                    <div className="bunch-of-circles">
                        <div className="row-of-circles">
                            <div className="litle-circle"></div>
                            <div className="litle-circle"></div>
                            <div className="litle-circle"></div>
                            <div className="litle-circle"></div>
                        </div>
                        <div className="row-of-circles">
                            <div className="litle-circle"></div>
                            <div className="litle-circle"></div>
                            <div className="litle-circle"></div>
                            <div className="litle-circle"></div>
                        </div>                        
                        <div className="row-of-circles">
                            <div className="litle-circle"></div>
                            <div className="litle-circle"></div>
                            <div className="litle-circle"></div>
                            <div className="litle-circle"></div>
                        </div>
                    </div>
                    <div className="triangle"></div>
                </div>
                <div className="content">
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
            </div>
        );
    }
}

export default Home