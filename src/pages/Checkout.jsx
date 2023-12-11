import { Layout } from "../components/core";
import CheckoutPanel from "../components/cart/CheckoutPanel";
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const orders = useSelector((state) => state.collections.orders);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Bestore | Checkout';
    }, []);

    useEffect(() => {
        if (!orders || orders.orders.length < 1) {
            navigate('/cart')
        }
    }, [orders, navigate]);

    return (
        <Layout renderHeader={true}>
            {orders && <CheckoutPanel orders={orders} />}
        </Layout>
    );
}

export default Checkout;