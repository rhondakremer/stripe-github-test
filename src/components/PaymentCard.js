// MyStoreCheckout.js
import React from 'react';
import {Elements} from 'react-stripe-elements';

import PaymentRequest from './PaymentRequest';
import PaymentElement from './PaymentElement'

class PaymentCard extends React.Component {
  render() {
    return (
      <div>
        <Elements>
          <PaymentElement />
        </Elements>
        <Elements>
          <PaymentRequest />
        </Elements>
      </div>
    );
  }
}

export default PaymentCard;