import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Favourites from './Favourites';

const App = () => (
  <BrowserRouter>
    <main>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/favourites" component={Favourites} />
    </main>
  </BrowserRouter>
);

export default App;
