import React from 'react';
import './App.css';
import Card from './components/Card';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Info from './components/Info';
import './style.css'

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <body>
        <nav>
          <h1><a href="/">Pokemon List</a></h1>
        </nav>
        <Switch>
          <main>
            <Route exact path="/">
              <Card />
            </Route>
            <Route path="/pokemon/:id">
              <Info />
            </Route>            
          </main>
        </Switch>        
      </body>
    </BrowserRouter>
  );
}

export default App;