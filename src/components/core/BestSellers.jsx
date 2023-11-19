import TopProductsList from "./TopProductsList";
import icon from "../../assets/smartphone.png";
import makeup from "../../assets/makeup.jpg";
import ProductCard from "./ProductCard";

const list = [
  {
    id: "jainba6b9jxhbya",
    title: "Samsung ultra s20 6gb ram 124gb rom",
    image: icon,
    category: "phones",
    prices: ["890.00"],
    rating: 5,
  },
  {
    id: "jainb6b9njxhbya",
    title: "Samsung ultra s20 6gb ram 124gb rom",
    image: icon,
    category: "phones",
    prices: ["850.00", "900.50"],
  },
  {
    id: "jainb6b9jxhbMya",
    title: "Samsung ultra s20 6gb ram 124gb rom",
    image: makeup,
    prices: ["500.00", "590.90"],
    category: "phones",
  },
  {
    id: "jainb6b9jxhboya",
    title: "Samsung ultra s20 6gb ram 124gb rom",
    image: icon,
    prices: ["400.00"],
    category: "phones",
    rating: 5,
  },
  {
    id: "jainb6b9jxhbYoya",
    title: "Samsung ultra s20 6gb ram 124gb rom",
    image: icon,
    prices: ["120.00", "150.00"],
    ratings: 3,
    category: "phones",
  },
  {
    id: "jainVb6b9jxhboya",
    title: "Samsung ultra s20 6gb ram 124gb rom",
    image: icon,
    prices: ["50.00", "55.00"],
    ratings: 4,
    category: "phones",
  },
];

/**
 * Renders a list of best sellers.
 *
 * @return {JSX.Element} The rendered component.
 */
const BestSellers = () => {
  return (
    <TopProductsList title={"Best Sellers"}>
      {list.map((item) => {
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
