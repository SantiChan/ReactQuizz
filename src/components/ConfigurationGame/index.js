import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import './style.css';

class ConfigurationGame extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            listPlayers : [],
            show: false,
            search: '',
        }
    }

    updateSearch = (event) =>{ 
        console.log(event)
        this.setState({search: event.target.value})
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
                <div className="gameSettings">
                    <p>Configuracion de la partida</p>
                    <div className="addPLayer">
                        <p>-Añade el numero de jugadores! (hasta 5 jugadores)</p>
                        <Modal show={this.state.show} handleClose={this.hideModal} handleClick={() => this.addPlayer()}>
                            <form>
                                <label>
                                    Name:
                                    <input type="text" value={this.state.search} onChange={this.updateSearch} name="name" />
                                </label>
                            </form>
                        </Modal>
                        <button type="button" onClick={ this.showModal }>
                            <FontAwesomeIcon icon="user-plus" size="6x" />
                        </button>
                        {this.state.listPlayers.map(player => 
                                (<div>
                                    <span>{this.state.search}</span>
                                    <FontAwesomeIcon icon="poo" color={player.color}/>
                                </div>)
                            )}
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

const Modal = ({ handleClose, handleClick, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <button
            onClick={handleClick}>
            Añadir
          </button>
          <button
            onClick={handleClose}>
            Cerrar
          </button>
        </section>
      </div>
    );
  };

export default ConfigurationGame;