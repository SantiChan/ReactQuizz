import React, { Component } from 'react';
import addPl from '../images/players.jpeg';
import newPlayer from '../images/download.jpeg';
import '../components.css';

class ConfigurationGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPlayer: false
        }
        // this.handleChange = this.handleChange.bind(this);
    }
addPlayer(){
    this.setState({
        showPlayer: true
    })
}
    render(){
    return(
        <div className="configurationGame">
            <div className="gameSettings">
                <p>Configuracion de la partida</p>
                <div className="addPLayer">
                    <p>-Añade el numero de jugadores! (hasta 5 jugadores)</p>
                    <button type="button" onClick={() => this.addPlayer()}>
                        <img src={addPl} className="addPL" alt="playerPics"></img>
                    </button>
                    {
                    this.state.showPlayer?
                    <div>
                        <img src={newPlayer}></img>
                    </div>
                    :null
                }
                </div>
            </div>
        </div>
        
    )}
}

export default ConfigurationGame