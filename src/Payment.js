import React,{useEffect, useState} from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getCartTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import axios from "axios";


function Payment() {
    const [{ cart, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing,setProcessing] = useState("");
    const [succeeded,setSucceeded] =useState(false);
    const [clientSecret,setClientSecret] = useState(true);

    useEffect(() =>{
        //generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe expect total amount in base currencies like rupees to paise
                url: `/payments/create?total=${getCartTotal(cart)*100}`
            });
            setClientSecret(response.data.clientSecret)


        }

        getClientSecret();
    }, [cart])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        });
    }

    const handleChange = (event) => {
        setDisabled(event.empty);
    setError(event.error ? event.error.message : "");

    }

    return (
        <div className="payment">
            <div className="payment__container">
                {/*Delivery Address*/}
                <div className="payment__section">
                    <div className="payment__section">
                        <h3>Delivery Address:</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Flat No.301, Hiranandani</p>
                        <p>Andheri,India</p>
                    </div>

                </div>
                {/*Cart Review*/}
                <div className="payment__section">
                    <div className="payment__section">
                        <h3>Review your Item in Cart:</h3>
                    </div>
                    <div className="payment__item">
                        {cart.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />
                        ))}
                    </div>

                </div>
                {/*Payment Gateway*/}
                <div className="payment__section">
                    <div className="payment__section">
                        <h3>Payment Method:</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe Secret Code */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <p>Subtotal ({cart.length} items): <strong>{value}</strong></p>
                                            {/* <small className="subtotal__gift">
                                                <input type="checkbox" /> This is order contains a gift

                                            </small> */}
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled ={processing || disabled ||succeeded} >
                                    <span>{processing ? <p>Processing</p> :"Buy Now"}</span>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment
