import React from 'react'
import {CardElement, injectStripe, ReactStripeElements} from 'react-stripe-elements'

export class PaymentElement extends React.Component {
    render() {
        return (
            <CardElement />
        )
    }
}

export default injectStripe(PaymentElement);