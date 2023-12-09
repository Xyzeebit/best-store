import TopProductsList from "./TopProductsList";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { getCollectionsWithTag } from "../../api/collections-api";
import { useSelector } from "react-redux";


/**
 * Renders a list of best sellers.
 *
 * @return {JSX.Element} The rendered component.
 */
const BestSellers = () => {
  const { data } = useSelector((state) => state.collections);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (data) {
      setBestSeller(getCollectionsWithTag(data, "best seller"));
    }
  }, [data]);

  return (
    <TopProductsList title={"Best Sellers"}>
      {bestSeller && bestSeller.map((item) => {
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            prices={item.prices}
            category={item.category}
            optional={false}
          />
        );
      })}
    </TopProductsList>
  );
};

export default BestSellers;
