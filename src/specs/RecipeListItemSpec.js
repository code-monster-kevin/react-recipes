import React from 'react';
import { mount } from 'enzyme';
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

  test('Call onClick function', () => {
    const onClick = jest.fn();

    const component = mount(
      <RecipeListItem recipe={mockRecipe} onClick={onClick} />,
    );

    component.simulate('click');

    expect(onClick.mock.calls.length).toBe(1);
  });

  test('Call onFavourited function', () => {
    const onFavourited = jest.fn();

    const component = mount(
      <RecipeListItem recipe={mockRecipe} onFavourited={onFavourited} />,
    );

    component
      .find('span')
      .first()
      .simulate('click');

    expect(onFavourited.mock.calls.length).toBe(1);
  });

  test('onFavourited function does not call onClick', () => {
    const onClick = jest.fn();
    const onFavourited = jest.fn();

    const component = mount(
      <RecipeListItem
        recipe={mockRecipe}
        onClick={onClick}
        onFavourited={onFavourited}
      />,
    );

    component
      .find('span')
      .first()
      .simulate('click');

    expect(onClick.mock.calls.length).toBe(0);
    expect(onFavourited.mock.calls.length).toBe(1);
  });
});
