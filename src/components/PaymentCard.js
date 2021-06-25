// MyStoreCheckout.js
import React, {useState} from 'react';
import {Elements} from 'react-stripe-elements';

import PaymentRequest from './PaymentRequest';
import PaymentElement from './PaymentElement'

const PaymentCard = () => {
  let [totalPrice, setTotalPrice] = useState(1)


    return (
      <div>
        <Elements>
          <PaymentElement />
        </Elements>
        <Elements>
          <PaymentRequest totalPrice={totalPrice}/>
        </Elements>
        <button onClick={setTotalPrice(totalPrice++)}>Click me</button>
      </div>
    );

}

export default PaymentCard;