import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Searchpage from './SearchPage';
import './App.css';

function Profile({auth}) {

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    You are logged in as {auth && auth.nickname ? auth.nickname : null}
                </p>
                <img src={auth && auth.picture ? auth.picture : null} alt=""/>
                <a
                    className="App-link"
                    href={"/auth/logout"}
                >
                    Logout
                </a>
            </header>
        </div>
    );
}

export default Profile;
