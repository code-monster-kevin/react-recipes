import React from 'react';

const RecipeDetail = (props) => (
    <div style={props.style}>
        <h2>Cupcakes</h2>
        <img src="https://is5-ssl.mzstatic.com/image/thumb/Purple127/v4/26/d8/e7/26d8e789-bc77-68e4-97e8-29cf08829334/mzl.xaytvzwt.jpg/246x0w.jpg" />
        <div>
            <span>Desert</span>
            <span>1200 cal</span>
        </div>
        <h3>Ingredients</h3>
        <ul>
            <li>1 packet cupcake mix</li>
            <li>1 cup of water</li>
            <li>3 eggs</li>
            <li>1/3 cup vegetable oil</li>
        </ul>
        <h3>Steps</h3>
        <ol>
            <li>Preheat Oven</li>
            <li>Combine cupcake mix, eggs, water and oil into a large bowl</li>
            <li>Mix well all the ingredients</li>
            <li>Pour batter into cupcakes cup</li>
            <li>Bake in oven for 18 to 20 minutes</li>
        </ol>
    </div>
);

export default RecipeDetail;