import { useEffect } from 'react';
import PropTypes from "prop-types";
import { Container, Header, TopProducts } from '../components/core';

const Products = ({ category }) => {
    useEffect(() => {
        document.title = "Bestore | Products"
    }, [])
    return (
        <>
            <Header />
            <Container>
                <TopProducts category={category} />
            </Container>
        </>
    )
}

Products.propTypes = {
    category: PropTypes.string.isRequired,
}

export default Products;