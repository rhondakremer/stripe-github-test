// MyStoreCheckout.js
import React, { useState } from 'react';
import { Elements } from 'react-stripe-elements';

import PaymentRequest from './PaymentRequest';
import PaymentElement from './PaymentElement'

const PaymentCard = () => {
  let [totalPrice, setTotalPrice] = useState(278.4)


  return (
    <div>
      <Elements>
        <PaymentElement />
      </Elements>
      <Elements>
        <PaymentRequest totalPrice={totalPrice} />
      </Elements>
      <button onClick={() => setTotalPrice(totalPrice++)}>Click me</button>
      <p>total price is there was a total price of {totalPrice}</p>
    </div>
  );

}

export default PaymentCard;