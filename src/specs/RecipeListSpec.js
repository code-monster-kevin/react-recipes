import React from 'react';
import renderer from 'react-test-renderer';
import RecipeList from '../components/RecipeList';

const mockRecipes = [
  {
    id: 1,
    name: 'Mock Recipe 1',
    category: 'Mock Category 1',
  },
  {
    id: 2,
    name: 'Mock Recipe 2',
    category: 'Mock Category 2',
  },
  {
    id: 3,
    name: 'Mock Recipe 3',
    category: 'Mock Category 3',
  },
  {
    id: 4,
    name: 'Mock Recipe 4',
    category: 'Mock Category 4',
  },
];

describe('<RecipeList />', () => {
  test('No recipes props input', () => {
    const component = renderer.create(<RecipeList />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Valid recipes props input', () => {
    const component = renderer.create(<RecipeList recipes={mockRecipes} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Render favourite state', () => {
    const component = renderer.create(
      <RecipeList recipes={mockRecipes} favourites={[1, 4]} />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
