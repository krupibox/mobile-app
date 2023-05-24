import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import './index.css';
import App from './App';
import Login from './routes/Login';
import Dashboard from "./routes/Dashboard";

import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route path='' element={<Login/>}/>
                    <Route path='/app/dashboard' element={<Dashboard/>}/>
                    <Route path='*' element={<main>
                        <p>404</p>
                        <Link to="/">Back home</Link>
                    </main>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
