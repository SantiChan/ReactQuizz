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
            availableColors: ['red', 'blue', 'green', 'pink', 'orange']
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
                <div className="configuration-game__content">
                    <img className="configuration-game__logo" src={logo}/>
                    <p className="configuration-name__title">Configuracion de la partida</p>
                    <div className="configuration-game__players">
                        <div className="configuration-game__players-main">
                            {this.state.listPlayers.map(player => 
                                (<div className={`configuration-game__player ${player.color}`}>
                                    <FontAwesomeIcon icon="poo" color="#ffffffcf" size="2x"/>
                                    <span className="configuration-game__player-name">{player.name}</span>
                                </div>)
                            )}
                            {this.state.listPlayers.length < 5 ? 
                            <div>
                                {this.state.listPlayers.length < 1 &&  <div className="add-player__animation"></div> }
                                <div className="configuration-game__player configuration-game__add-player" type="button" onClick={ this.showModal }>
                                    <FontAwesomeIcon icon="user-plus" color ="#939393" size="3x"/>
                                </div> 
                            </div>
                                : null
                            }
                        </div>
                    </div>
                    <div className='numRounds'>
                        <p>-Numero de rondas (minimo 5 maximo 10)</p>
                        <select id="rounds" onchange=""> 
                            <option value="">-- Rondas --</option> 
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
                </div>
                <div className='configuration-game__button'>
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