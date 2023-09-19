import { Header, Container, Carousel, TopCategories, NewArrivals, BestSellers, DealsOfTheDay, Footer, Promotion } from "../components/core";

const Home = () => {
    
  return (
    <>
      <Header />
      <Container>
        <Carousel />
        <TopCategories />
        <NewArrivals />
        <DealsOfTheDay />
        <BestSellers />
        <Promotion />
        <Footer />
      </Container>
    </>
  );
}

export default Home;