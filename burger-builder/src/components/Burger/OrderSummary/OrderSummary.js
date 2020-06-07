import React, { Component } from 'react';
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentDidUpdate() {
        console.log("[OrderSummary.js]\tDid Update.")
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map((igKey) => (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>
                    {igKey}: {this.props.ingredients[igKey]}
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
                <p><strong>Total price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
};

export default OrderSummary;