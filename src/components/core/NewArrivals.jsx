import TopProductsList from "./TopProductsList";
import ProductCard from "./ProductCard";
import { getCollectionsWithTag } from "../../api/collections-api";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


/**
 * Renders a list of new arrivals.
 *
 * @return {JSX.Element} The rendered component.
 */
const NewArrivals = () => {
  const { data } = useSelector((state) => state.collections);
  const [newest, setNewest] = useState([]);

  useEffect(() => {
    if (data) {
      setNewest(getCollectionsWithTag(data, "newest"));
    }
  }, [data]);

  return (
    <TopProductsList title={"Shop From Our Newest Arrivals"}>
      {newest.map(item => {
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.images[0]}
            price={item.price}
            discountPrice={item.discount_price}
            category={"newest"}
          />
        )
      })}
    </TopProductsList>
  );
}

export default NewArrivals;