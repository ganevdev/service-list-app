import './App.css';

import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import List from '../List';
import ProductPage from '../ProductPage';

const App = () => {
  return (
    <Router>
      <main className="App">
        <Link to={`/`}>
          <h1>Лист Услуг App</h1>
        </Link>
        <Route exact path="/">
          <List />
        </Route>
        <Route path="/:id/details" component={ProductPage} />
      </main>
    </Router>
  );
};

export default App;
