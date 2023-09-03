import { Header, Container, Carousel, TopCategories, NewArrivals, BestSellers } from "../components/core";

const Home = () => {
    
  return (
    <>
      <Header />
      <Container>
        <Carousel />
        <TopCategories />
        <NewArrivals />
        <BestSellers />
      </Container>
    </>
  );
}

export default Home;