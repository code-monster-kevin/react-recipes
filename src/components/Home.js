import React from 'react';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      favourites: [],
      currentRecipe: null,
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipes => {
        this.setState({ recipes });
      });
  }

  onRecipeClick = id => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({ currentRecipe: recipe });
      });
  };

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
    const { recipes, favourites, currentRecipe } = this.state;

    return (
      <div>
        <main className="px4 flex">
          <RecipeList
            recipes={recipes}
            favourites={favourites}
            style={{ flex: 3 }}
            onClick={this.onRecipeClick}
            onFavourited={this.toggleFavourite}
          />
          <RecipeDetail
            recipe={currentRecipe}
            className="ml4"
            style={{ flex: 5 }}
          />
        </main>
      </div>
    );
  }
}

export default Home;
