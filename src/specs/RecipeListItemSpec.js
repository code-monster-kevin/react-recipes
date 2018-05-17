import React from 'react';
import renderer from 'react-test-renderer';
import RecipeListItem from '../components/RecipeListItem';

const mockRecipe = {
  id: 1,
  name: 'Mock Recipe',
  category: 'Mock Category',
};

describe('<RecipeListItem />', () => {
  test('No recipe props input', () => {
    const component = renderer.create(<RecipeListItem />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Valid recipe props input', () => {
    const component = renderer.create(<RecipeListItem recipe={mockRecipe} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Render favourite state', () => {
    const component = renderer.create(
      <RecipeListItem recipe={mockRecipe} favourited={true} />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
