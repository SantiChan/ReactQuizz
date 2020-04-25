import React from 'react';
import { Route,  BrowserRouter } from 'react-router-dom';
import Configuration from './components/configurationGame';
import Home from './components/home';

function App() {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} />
            <Route path="/configuration" component= {Configuration} />
        </BrowserRouter>
    );
}

export default App;
