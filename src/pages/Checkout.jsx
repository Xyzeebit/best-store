import { Layout } from "../components/core";
import CheckoutPanel from "../components/cart/CheckoutPanel";
import { useEffect } from 'react';

const Checkout = () => {
    useEffect(() => {
        document.title = 'Bestore | Checkout';
    }, []);

    return (
        <Layout renderHeader={true}>
            <CheckoutPanel />
        </Layout>
    );
}

export default Checkout;