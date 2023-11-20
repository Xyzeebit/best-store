import { useEffect } from 'react';
import PropTypes from "prop-types";
import { TopProducts, Layout } from '../components/core';

const Products = ({ category }) => {
    useEffect(() => {
        document.title = "Bestore | Products"
    }, [])
    return (
        <Layout renderHeader={true}>
            <TopProducts category={category} />
        </Layout>
    )
}

Products.propTypes = {
    category: PropTypes.string.isRequired,
}

export default Products;