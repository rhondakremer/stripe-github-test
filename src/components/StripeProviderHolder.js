import React from 'react'
import { StripeProvider } from 'react-stripe-elements';
import PaymentCard from './PaymentCard';

class StripeProviderHolder extends React.Component {
    render() {
        return (
            <StripeProvider apiKey="pk_test_51IlHEuDwnViOHl4M4992ZPFENwM7cSjR9R2b8WJm1zFHjjwsAU5xX5sfSE9BHouSIP8a7VXhSByzHDdBiXitaj3600zwIV4p22">
                <PaymentCard />
            </StripeProvider>
        );
    }
}
export default StripeProviderHolder;
