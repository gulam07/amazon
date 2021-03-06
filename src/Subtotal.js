import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';
import { getCartTotal } from './reducer';
import { useStateValue } from './StateProvider';
import "./Subtotal.css";


function Subtotal() {
    const history = useHistory();
    const [{ cart }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({cart.length} items): <strong>{value}</strong></p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This is order contains a gift

                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button onClick={e=> history.push('/payment')} >Proceed to Buy</button>

        </div>
    );
}

export default Subtotal
