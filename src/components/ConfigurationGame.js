import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import addPlayer from '../images/players.jpeg';
import playerIcon from '../images/download.jpeg';
import '../components.css';


class ConfigurationGame extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            listPlayers : []
        }
    }

    addPlayer(color = 'black') {
        const newPlayer = {
            color
        }

        if (this.state.listPlayers.length < 5) {
            // const initialArray = [1,2,3] 
            // const array = [...prevArray, 4]
            // sames as 
            // const array = [1,2,4];
            // array.push(4);

            this.setState(prevState => 
                ({ 
                    listPlayers: [...prevState.listPlayers, newPlayer] 
                })
            );
        }
    }

    render() {
        return(
            <div className="configurationGame">
                <div className="gameSettings">
                    <p>Configuracion de la partida</p>
                    <div className="addPLayer">
                        <p>-Añade el numero de jugadores! (hasta 5 jugadores)</p>
                        <button type="button" onClick={ () => this.addPlayer() }>
                            <img src={ addPlayer } className="addPL" alt="playerPics"></img>
                        </button>
                        <div>
                            { this.state.listPlayers.map(player => <img src={ playerIcon } alt='pl' className='plImg'/>) }
                        </div>
                    </div>
                    <div className='numRounds'>
                        <p>-Numero de rondas (minimo 5 maximo 10)</p>
                        <select id="rounds" onchange=""> 
                            <option value="">-- Rondas --</option> 
                            <option value="1">1</option> 
                            <option value="2">2</option> 
                            <option value="3">3</option>
                            <option value="4">4</option> 
                            <option value="5">5</option> 
                            <option value="6">6</option>
                            <option value="7">7</option> 
                            <option value="8">8</option> 
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select> 
                    </div>
                    <div className='answerTime'>
                        <p>-Tiempo de respuesta (minim0 15 seg. maximo 1 min.)</p>
                        <select id="time" onchange=""> 
                            <option value="">-- Tiempo --</option> 
                            <option value="15s">15 seg</option> 
                            <option value="20s">20 seg</option> 
                            <option value="30s">30 seg</option>
                            <option value="40s">40 seg</option> 
                            <option value="50s">50 seg</option> 
                            <option value="60s">60 seg</option>
                        </select> 
                    </div>
                    <div className='endConfiguration'>
                    <Link to="/themes">
                        <button type='button'>
                            Guardar configuration
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
            
        )
    }
};

export default ConfigurationGame;