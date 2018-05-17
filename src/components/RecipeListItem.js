import React from 'react';
import PropTypes from 'prop-types';

const RecipeListItem = ({ recipe, favourited, onClick, onFavourited }) => (
  <li
    key={recipe.id}
    className="py2 border-bottom border-bottom-dashed pointer"
    onClick={() => onClick(recipe.id)}
  >
    <span
      className="mr1"
      role="img"
      aria-label="Favourite"
      onClick={e => {
        e.stopPropagation();
        onFavourited(recipe.id);
      }}
    >
      {favourited ? '❤️' : '🖤'}
    </span>
    <span>{recipe.name}</span>
    <span>{recipe.category}</span>
  </li>
);

RecipeListItem.propTypes = {
  recipe: PropTypes.object,
  favourited: PropTypes.bool,
  onClick: PropTypes.func,
  onFavourited: PropTypes.func,
};

export default RecipeListItem;
