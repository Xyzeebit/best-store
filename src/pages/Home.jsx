import { useEffect, Suspense } from "react";
import { Container, Carousel, TopCategories, NewArrivals, BestSellers, DealsOfTheDay, Promotion, FlashSales, Layout } from "../components/core";
import { HomeLoader } from "../components/core/Loaders";

const HomePage = () => {
  useEffect(() => {
    document.title = "Bestore | Best Shopping Experience"
  }, []);
  return (
    <Suspense fallback={<HomeLoader />}>
      <Container>
        <Carousel tag="banners" classes="m-4 md:m-16 h-52 md:h-60 lg:h-80 bg-gray-200" />
        <TopCategories />
        <NewArrivals />
        <DealsOfTheDay />
        <FlashSales />
        <BestSellers />
        <Promotion />
      </Container>
    </Suspense>
  );
}

const Home = () => (
  <Layout renderHeader={true}>
    <HomePage />
  </Layout>
);

export default Home;