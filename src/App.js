import React from 'react';
import { Route,  BrowserRouter } from 'react-router-dom';
import ConfigurationGame from './components/ConfigurationGame';
import Home from './components/Home';
import Themes from './components/Themes';

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/configuration" component= {ConfigurationGame} />
            <Route exact path="/themes" component= {Themes} />
        </BrowserRouter>
    );
}

export default App;
