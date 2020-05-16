import React from 'react';
import { Route,  BrowserRouter } from 'react-router-dom';
import './style.scss';

import ConfigurationGame from '../ConfigurationGame';
import Home from '../Home';
import Themes from '../Themes';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPoo, faUserPlus } from '@fortawesome/free-solid-svg-icons'

function App() {
    library.add(faPoo, faUserPlus);

    return (
        <BrowserRouter>
            <div className="screen">
                <Route exact path="/" component={Home} />
                <Route exact path="/configuration" component={ConfigurationGame} />
                <Route exact path="/themes" component={Themes} />
            </div>
        </BrowserRouter>
    );
}

export default App;
