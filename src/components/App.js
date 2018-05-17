import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Favourites from './Favourites';
import NotFound from './NotFound';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      favourites: [],
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipes => {
        this.setState({ recipes });
      });
  }

  toggleFavourite = id => {
    this.setState(({ favourites, ...state }) => {
      const idx = favourites.indexOf(id);

      if (idx !== -1) {
        return { ...state, favourites: favourites.filter(f => f !== id) };
      }
      return { ...state, favourites: [...favourites, id] };
    });
  };

  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <Switch>
            <Redirect from="/home" to="/" />
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  state={this.state}
                  toggleFavourite={this.toggleFavourite}
                />
              )}
            />
            <Route
              path="/favourites"
              render={() => (
                <Favourites
                  state={this.state}
                  toggleFavourite={this.toggleFavourite}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
