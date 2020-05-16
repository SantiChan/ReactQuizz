import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './style.scss';

import Button from '../Button';

const rowOfCircles = 3;
const circlesPerRow = 4;

const getRowOfCircles = function() {
    let circles = [];

    for (let index = 0; index < circlesPerRow; index++) {
        circles.push(<div className="litle-circle"></div>);
    }
    
    return circles;
}

const getBunchOfCircles = function() {
    let rows = [], 
        iterator = 0;

    while (++iterator <= rowOfCircles) {
        const circles = getRowOfCircles([]);

        rows.push(
            <div className="row-of-circles">
                {circles}
            </div>    
        );
    }

    return rows;
}

class Home extends Component {

    render(){
        return(
            <div className="container">
                <div className="animations">
                    <div className="square"></div>
                    <div className="circle"></div>
                    <div className="bunch-of-circles">
                        {getBunchOfCircles()}
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

export default Home;