import { useEffect } from 'react';
import { Container, Header, TopProducts } from '../components/core';

const Products = () => {
    useEffect(() => {
        document.title = "Bestore | Products"
    }, [])
    return (
        <>
            <Header />
            <Container>
                <TopProducts />
            </Container>
        </>
    )
}

export default Products;