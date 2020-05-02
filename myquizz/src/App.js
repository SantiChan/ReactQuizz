import React from 'react';
import { Route,  BrowserRouter } from 'react-router-dom';
import Configuration from './components/configurationGame';
import Home from './components/home';

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/configuration" component= {Configuration} />
        </BrowserRouter>
    );
}

export default App;
