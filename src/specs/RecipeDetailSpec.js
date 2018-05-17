import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import RecipeDetail from '../components/RecipeDetail';

describe('<RecipeDetail />', () => {
  let mockRecipe;

  beforeEach(() => {
    mockRecipe = {
      id: 1,
      name: 'Mock Recipe',
      category: 'Mock Category',
      ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
      steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
    };
  });

  test('No props or state input', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Valid recipes props input', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={mockRecipe} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Valid classnames props input', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={mockRecipe} className="classname-test" />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('No ingredients data in recipe', () => {
    delete mockRecipe.ingredients;

    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={mockRecipe} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('No steps data in recipe', () => {
    delete mockRecipe.steps;

    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={mockRecipe} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
