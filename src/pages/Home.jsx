import { Header, Container, Carousel, TopCategories, NewArrivals, BestSellers, DealsOfTheDay, Footer, Promotion } from "../components/core";

const Home = () => {
    
  return (
    <>
      <Header />
      <Container>
        <Carousel tag="banners" classes="m-4 md:m-16 h-52 md:h-60 lg:h-80 bg-gray-200" />
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