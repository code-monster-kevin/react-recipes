import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({ style, favourites, recipes, ...props }) => (
  <ul className="list-reset">
    {recipes.map(recipe => (
      <RecipeListItem
        recipe={recipe}
        favourited={favourites.includes(recipe.id)}
        {...props}
      />
    ))}
  </ul>
);

RecipeList.propTypes = {
  recipes: PropTypes.array,
  favourites: PropTypes.array,
  style: PropTypes.object,
};

export default RecipeList;
