import phone from '../../assets/toys.jpg';
import laptop from "../../assets/toys.jpg";
import shirt from "../../assets/toys.jpg";
import shoe from "../../assets/toys.jpg";
import bag from "../../assets/toys.jpg";

import CategoryItem from './CategoryItem';
import { Link } from 'react-router-dom';
import TopProductsList from './TopProductsList';




const TopCategories = () => {
    const topCats = [
      {
        id: "sjij9jnk",
        title: "Phones",
        image: phone,
        category: "electronics",
      },
      {
        id: "sjiUj9jnk",
        title: "Laptops",
        image: phone,
        category: "electronics",
      },
      {
        id: "s8bjij9jnk",
        title: "Toys",
        image: laptop,
        category: "toys-and-games",
      },
      {
        id: "s8bBjij9jnk",
        title: "Games",
        image: laptop,
        category: "toys-and-games",
      },
      {
        id: "sjijLJ9jnk",
        title: "Shirts",
        image: shirt,
        category: "clothes",
      },
      {
        id: "sjiJOj9jnk",
        title: "Cosmetics",
        image: shoe,
        category: "makeup-and-cosmetics",
      },
      {
        id: "sbHjij9jnk",
        title: "Books",
        image: bag,
        category: "books",
      },
    ];
  return (
      <TopProductsList title={"Shop Now From Our Top Categories"}>
        {topCats.map((cat) => (
            <Link key={cat.id} to={'/' + cat.category}>
              <CategoryItem
                text={cat.title}
                image={cat.image}
                category={cat.category}
              />
            </Link>
          ))}
      </TopProductsList>
    );
}

export default TopCategories;