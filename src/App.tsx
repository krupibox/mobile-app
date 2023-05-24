import React from 'react';
import {Outlet} from 'react-router-dom';

import './App.css';

function App() {
    return (
        <div style={{margin: '1rem'}}>
            <h1>Authorization</h1>
            <Outlet/>
        </div>
    );
}

export default App;
