import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './paymentForm.module.css';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { selectCartItems } from '@/store/cart/cart.selector';
import { selectCurrentUser } from '@/store/user/user.selector';



export default function PaymentForm() {
    const cartItems = useSelector(selectCartItems);
    const currentUser = useSelector(selectCurrentUser);

    const stripe = useStripe();
    const elements = useElements();

    const [isProcessingPayment, setIsProcessingPayment] = useState(false); 

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const paymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        } 
        setIsProcessingPayment(true);
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({amount: total * 100})
        }).then(res => res.json());

        const {paymentIntent: {client_secret }, } = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                }
            }
        });
        setIsProcessingPayment(false);
        if(paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful');
            }
        }
    };
    return(
        <div className={styles.paymentFormContainer}>
            <form className={styles.formContainer} onSubmit={paymentHandler}>
                <CardElement />
                <button
                    className={`${styles.pay} ${isProcessingPayment ? styles.payDisabled : ''}`}
                    type="submit"
                >
                    {isProcessingPayment && <span className={styles.spinner}></span>}
                    {isProcessingPayment ? 'Processing...' : 'Pay Now'}
                </button>
            </form>
        </div>
    );

}