import React from 'react';
import './App.css';
import Home from './Components/Home';
import RoomPage from './Components/RoomPage';
import SingleRoom from './Components/SingleRoom';
import ErrorPage from './Components/ErrorPage';
import { Route,Switch} from 'react-router-dom';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div>
    <Navigation />
    <Switch>
      <Route exact path = '/' component={Home}/>
      <Route exact path = '/Room/' component={RoomPage}/>
      <Route exact path = '/Room/:slug' component={SingleRoom}/>
      <Route component={ErrorPage}/>
      </Switch>
    </div>
  );
}

export default App;
