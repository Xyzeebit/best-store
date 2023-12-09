import { useEffect, Suspense, useState } from "react";
import {
  Container,
  Carousel,
  NewArrivals,
  BestSellers,
  DealsOfTheDay,
  Promotion,
  FlashSales,
  Layout,
  FeaturedCollections,
} from "../components/core";
import { HomeLoader } from "../components/core/Loaders";
import { useDispatch } from "react-redux";
import { fetchAllCollections } from "../api/apis";
import { fetchCollections } from "../redux/collectionsSlice";

const HomePage = () => {
  const [noData, setNoData] = useState(true);
  const dispatch = useDispatch();

  async function getData() {
    const collections = await fetchAllCollections();
    dispatch(fetchCollections(collections));
    setNoData(false);
  }
  if (noData) {
    getData();
  }

  useEffect(() => {
    document.title = "Bestore | Best Shopping Experience";
  }, []);

  useEffect(() => {}, []);

  return (
    <Suspense fallback={<HomeLoader />}>
      <Container>
        <Carousel
          tag="banners"
          classes="m-4 md:m-16 h-52 md:h-60 lg:h-80 bg-gray-200"
        />
        <FeaturedCollections />
        <NewArrivals />
        <DealsOfTheDay />
        <FlashSales />
        <BestSellers />
        <Promotion />
      </Container>
    </Suspense>
  );
};

const Home = () => (
  <Layout renderHeader={true}>
    <HomePage />
  </Layout>
);

export default Home;
