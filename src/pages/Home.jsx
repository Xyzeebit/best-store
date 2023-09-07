import { Header, Container, Carousel, TopCategories, NewArrivals, BestSellers, DealsOfTheDay } from "../components/core";

const Home = () => {
    
  return (
    <>
      <Header />
      <Container>
        <Carousel />
        <TopCategories />
        <NewArrivals />
        <BestSellers />
        <DealsOfTheDay />
      </Container>
    </>
  );
}

export default Home;