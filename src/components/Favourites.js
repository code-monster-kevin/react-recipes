import React from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';

const Favourites = ({ state, toggleFavourite }) => (
  <div className="px4">
    <h2 className="h2">Favourites</h2>
    <RecipeList
      recipes={state.recipes.filter(r => state.favourites.includes(r.id))}
      favourites={state.favourites}
      onFavourited={toggleFavourite}
    />
  </div>
);

Favourites.propTypes = {
  state: PropTypes.object,
  toggleFavourite: PropTypes.func,
};

export default Favourites;
