import CategoryItem from "./CategoryItem";
import { Link } from "react-router-dom";
import TopProductsList from "./TopProductsList";
import allProductsImage from "../../assets/icons/menu-icon.svg";
import { FEATURED_LIST } from "../../api/collections-api";

const FeaturedCollections = () => {
  

  return (
    <TopProductsList title={"Shop Now From Our Top Collections"}>
      {FEATURED_LIST &&
        FEATURED_LIST.map((cat) => (
          <Link key={cat.id} to={"/" + cat.category}>
            <CategoryItem
              text={cat.title}
              image={cat.image}
              category={cat.category}
            />
          </Link>
        ))}
      <Link
        to="/products"
        className="flex flex-col items-center justify-center w-48 h-48 gap-2 bg-gray-200 rounded-full h-rotate-45"
      >
        <div className="w-full flex flex-col items-center justify-center">
          <img
            src={allProductsImage}
            alt="all products"
            width={45}
            height={45}
          />
        </div>
        <div className="w-48 font-bold text-center text-green-900">
          All Categories
        </div>
      </Link>
    </TopProductsList>
  );
};

export default FeaturedCollections;
