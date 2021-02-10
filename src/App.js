import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import './default.css';
import Home from "./Home";
import Profile from "./Profile";
import Loading from "./Loading";
import {BrowserRouter as Router, Link, Route, Switch, useParams} from "react-router-dom";
import Searchpage from "./SearchPage";
import Detail from "./Detail";

function App() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    axios.get('/auth/current-session').then(({data}) => {
      setAuth(data);
    })
  }, [])

  if (auth === null) {
    return <Loading/>
  }
  if (auth) {
    return (
        <div className="App">
        <header className="App-header">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/characters">Characters</Link>
                </li>
                <li>
                  <Link to="/series">Series</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/profile">
                <Profile auth={auth}/>
              </Route>
              <Route path="/characters">
                <Characters />
              </Route>
              <Route path="/series">
                <Series />
              </Route>
              <Route path="/detail/:subject/:id">
                <ShowDetails />
              </Route>
            </Switch>
          </div>
        </Router>
        </header>
        </div>
    )
  }
  return <Home/>

}

function Characters() {
  return <Searchpage marvel={"characters"}/>

}

function Series() {
  return <Searchpage marvel={"series"}/>
}

function ShowDetails() {
  let { id } = useParams();
  let { subject } = useParams();
  console.log(id);
  return <Detail
      id={id}
      subject={subject}
  />
}


export default App;
