import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ConfigurationGame extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            listPlayers : []
        }
    }

    addPlayer(color = 'red', name = `player ${this.state.listPlayers.length + 1}`) {
        const newPlayer = {
            color,
            name
        }

        if (this.state.listPlayers.length < 5) {
            this.setState(prevState => ({ listPlayers: [...prevState.listPlayers, newPlayer] }) );
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
                            <FontAwesomeIcon icon="user-plus" />
                        </button>
                        <div>
                            {this.state.listPlayers.map(player => 
                                (<div>
                                    <span>{player.name}</span>
                                    <FontAwesomeIcon icon="poo" color={player.color}/>
                                </div>)
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
};

export default ConfigurationGame;