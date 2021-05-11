import React from 'react';
import { PaymentRequestButtonElement } from 'react-stripe-elements';
import { injectStripe } from 'react-stripe-elements';

class PaymentRequestForm extends React.Component {
    constructor(props) {
        super(props);

        // For full documentation of the available paymentRequest options, see:
        // https://stripe.com/docs/stripe.js#the-payment-request-object
        const paymentRequest = props.stripe.paymentRequest({
            country: 'US',
            currency: 'usd',
            total: {
                label: 'Demo total',
                amount: 1,
            },
        });

        paymentRequest.on('token', ({ complete, token, ...data }) => {
            console.log('Received Stripe token: ', token);
            console.log('Received customer information: ', data);
            complete(this.handleComplete(token))
        });

        paymentRequest.canMakePayment().then((result) => {
            this.setState({ canMakePayment: !!result });
        });

        this.state = {
            canMakePayment: false,
            paymentRequest,
        };
    }

            
    handleComplete = (token) => {
        console.log("hey hey we're the token", token)
    }

    render() {
        return this.state.canMakePayment ? (
            <div>
                <PaymentRequestButtonElement
                    paymentRequest={this.state.paymentRequest}
                    className="PaymentRequestButton"
                    style={{
                        // For more details on how to style the Payment Request Button, see:
                        // https://stripe.com/docs/elements/payment-request-button#styling-the-element
                        paymentRequestButton: {
                            theme: 'dark',
                            height: '40px',
                        },
                    }}
                />
            </div>
        ) : (
            <p>
                Either your browser does not support the Payment Request
                API or you do not have a saved payment method. To try out the Payment
                Request Button, switch to one of <a href="https://stripe.com/docs/stripe-js/elements/payment-request-button#testing">the supported browsers</a>, and make sure you have a saved payment method.
            </p>
        );
    }
}
export default injectStripe(PaymentRequestForm);