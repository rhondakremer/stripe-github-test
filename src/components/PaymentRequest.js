import React, { useEffect, useCallback, useState } from 'react';
import { PaymentRequestButtonElement } from 'react-stripe-elements';
import { injectStripe } from 'react-stripe-elements';

const PaymentRequestForm = ({ stripe, totalPrice }) => {
    const [canMakePayment, setCanMakePayment] = useState(false)
    const [paymentRequest, setPaymentRequest] = useState(null)

    const isPriceValid = (price) => {
        const priceArray = price.toString().split('.')
        if (!priceArray[1]) return false
        const centValidLength = priceArray[1].length < 3
        return !(centValidLength && parseInt(priceArray[1]) <= 99)
    }

    const formPaymentRequest = () => {
        const newPaymentRequest = stripe.paymentRequest({
            country: 'US',
            currency: 'usd',
            requestPayerEmail: true,
            requestPayerName: true,
            total: {
                label: 'hey test',
                amount: Math.round(totalPrice*100),
            },
        })
        setPaymentRequest(newPaymentRequest)
        newPaymentRequest.on('token', handleComplete)
        newPaymentRequest.canMakePayment().then(result => {
            setCanMakePayment(!!result)
        })
    }

    const updatePaymentRequest = useCallback(() => {
        paymentRequest.update({
            currency: 'usd',
            total: {
                label: 'hey test',
                amount: Math.round(totalPrice*100),
            },
        })
    }, [totalPrice, paymentRequest])

    useEffect(() => {
        if (!paymentRequest) {
            formPaymentRequest()
        }
    })

    const handleComplete = (token) => {
        console.log("hey hey we're the token", token)
    }

    if (!canMakePayment || !isPriceValid(totalPrice)) {
        return null
    }
    else {
        return canMakePayment ? (
        <div>
            <PaymentRequestButtonElement
                paymentRequest={paymentRequest}
                className="PaymentRequestButton"
                style={{
                    // For more details on how to style the Payment Request Button, see:
                    // https://stripe.com/docs/elements/payment-request-button#styling-the-element
                    paymentRequestButton: {
                        theme: 'dark',
                        height: '40px',
                    },
                }}
                onClick={updatePaymentRequest}
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