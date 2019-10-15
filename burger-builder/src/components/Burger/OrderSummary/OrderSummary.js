import React, { useEffect } from 'react';
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

     useEffect(() => {
        console.log("[OrderSummary.js]\t Will Update.")
     })

    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey) => (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>
                    {igKey}: {props.ingredients[igKey]}
                </span>
            </li>
        ));

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;