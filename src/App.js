import React from 'react';
import { Route,  BrowserRouter } from 'react-router-dom';
import ConfigurationGame from './components/ConfigurationGame';
import Home from './components/Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPoo, faUserPlus } from '@fortawesome/free-solid-svg-icons'

function App() {
    library.add(faPoo, faUserPlus);

    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/configuration" component= {ConfigurationGame} />
        </BrowserRouter>
    );
}

export default App;
