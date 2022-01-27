import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,price,image}) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart =() => {
        // remove item from cart
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProductImage" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <bold>₹</bold>
                    <strong>{price}</strong>
                </p>
                <button onClick={ removeFromCart }>Remove From Cart</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct

