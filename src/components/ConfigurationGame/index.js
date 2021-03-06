import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../images/logo.svg';
import './style.scss';

import Button from '../Button';
import Modal from '../Modal';

class ConfigurationGame extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            listPlayers : [],
            show: false,
            inputName: '',
            availableColors: ['red', 'blue', 'green', 'pink', 'orange'],
            roundsNumber: [5, 6, 7, 8, 9, 10],
            roundsTime: ['15 seg', '20 seg', '30 seg', '40 seg', '50 seg', '60 seg']
        }
    }

    updateSearch = (event) =>{ 
        this.setState({inputName: event.target.value})
    }

    showModal = () => {
        this.setState({ show: true });
    };
    
    hideModal = () => {
        this.setState({ show: false });
    };

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
            <div className="configuration-game">
                <div className="configuration-game--content">
                    <img className="configuration-game--logo" src={logo}/>
                    <p className="configuration-name--title">Configuracion de la partida</p>
                    <div className="configuration-game--players">
                        <div className="configuration-game--players-main">
                            {this.state.listPlayers.map(player => 
                                (<div className={`configuration-game--player ${player.color}`}>
                                    <FontAwesomeIcon icon="poo" color="#ffffffcf" size="2x"/>
                                    <span className="configuration-game--player-name">{player.name}</span>
                                </div>)
                            )}
                            {this.state.listPlayers.length < 5 ? 
                                <div className="configuration-game--add-player" type="button" onClick={ this.showModal }>
                                    <FontAwesomeIcon icon="user-plus" color ="#939393" size="3x"/>
                                </div> 
                                : null
                            }
                        </div>
                        {this.state.listPlayers.length < 1 ? <span>Añade jugadores!</span> : null}
                    </div>
                    <div className='numRounds'>
                        <p>-Numero de rondas (minimo 5 maximo 10)</p>
                        <select id="rounds" onchange=""> 
                            {this.state.roundsNumber.map(rounds => (
                                <option key={rounds} value={rounds} >{rounds}</option>
                            ))}
                        </select> 
                    </div>
                    <div className='answerTime'>
                        <p>-Tiempo de respuesta (minim0 15 seg. maximo 1 min.)</p>
                        <select id="time" onchange=""> 
                            {this.state.roundsTime.map(times => (
                                <option key={times} value={times} >{times}</option>
                            ))}
                        </select> 
                    </div>
                </div>
                <div className='configuration-game--button'>
                    <Button 
                        to="/themes" 
                        onClick={(event)=> event.preventDefault()} 
                        large={true} 
                        gradiant={true}>
                        Vamos allá!
                    </Button>
                </div>
                <Modal 
                    show={this.state.show} 
                    handleClose={this.hideModal} 
                    handleClick={
                        () => this.addPlayer(this.state.availableColors[this.state.listPlayers.length], this.state.inputName)
                    }
                >
                    <form>
                        <label>
                            Name:
                            <input type="text" value={this.state.inputName} onChange={this.updateSearch} name="name"/>
                        </label>
                    </form>
                </Modal>
            </div>
        )
    }
};

export default ConfigurationGame;