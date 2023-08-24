import { Header, Container, Carousel, TopCategories, NewArrivals } from "../components/core";

const Home = () => {
    
  return (
    <>
      <Header />
      <Container>
        <Carousel />
        <TopCategories />
        <NewArrivals />
      </Container>
    </>
  );
}

export default Home;