import React, { Component } from 'react';
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
                            { this.state.listPlayers.map(player => <img src={ playerIcon }/>) }
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
};

export default ConfigurationGame;