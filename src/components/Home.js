import React from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRecipe: null,
    };
  }

  onRecipeClick = id => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({ currentRecipe: recipe });
      });
  };

  render() {
    const { recipes, favourites } = this.props.state;
    const { currentRecipe } = this.state;

    return (
      <div>
        <main className="px4 flex">
          <div style={{ flex: 3 }}>
            <h2 className="h2">Recipes</h2>
            <RecipeList
              recipes={recipes}
              favourites={favourites}
              onClick={this.onRecipeClick}
              onFavourited={this.props.toggleFavourite}
            />
          </div>
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

Home.propTypes = {
  state: PropTypes.object,
  toggleFavourite: PropTypes.func,
};

export default Home;
