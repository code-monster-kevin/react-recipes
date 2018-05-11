import React from 'react';

const RecipeList = (props) => (
    <div style={props.style}>
        <h2>Recipes</h2>
        <ul>
            <li>
                <span>Cupcakes</span>
                <span>Desert</span>
            </li>
            <li>
                <span>Coffee Cake</span>
                <span>Desert</span>
            </li>
            <li>
                <span>Brownies</span>
                <span>Desert</span>
            </li>
            <li>
                <span>Roast Chicken</span>
                <span>Meat</span>
            </li>
            <li>
                <span>Spagetti and meatballs</span>
                <span>Pasta</span>
            </li>
        </ul>
    </div>
);

export default RecipeList;