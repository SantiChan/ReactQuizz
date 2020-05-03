import React from 'react';
import { Route,  BrowserRouter } from 'react-router-dom';
import ConfigurationGame from './components/ConfigurationGame';
import Home from './components/Home';

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/configuration" component= {ConfigurationGame} />
        </BrowserRouter>
    );
}

export default App;
