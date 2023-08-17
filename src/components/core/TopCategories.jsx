import phone from '../../assets/toys.jpg';
import laptop from "../../assets/toys.jpg";
import shirt from "../../assets/toys.jpg";
import shoe from "../../assets/toys.jpg";
import bag from "../../assets/toys.jpg";
import watch from "../../assets/toys.jpg";

import CategoryItem from './CategoryItem';





const TopCategories = () => {
    const topCats = [
      {
        id: "sjij9jnk",
        title: "Phones and Laptops",
        image: phone,
        category: "electronics",
      },
      {
        id: "s8bjij9jnk",
        title: "Toys and Games",
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
      {
        id: "sKjij9jnk",
        title: "All categories",
        image: watch,
        category: "categories",
      },
    ];
    return (
      <div className="px-4 md:px-16 py-8 bg-gray-50">
        <h2 className='font-bold text-green-700 text-xl pb-4'>Shop From Our Top Categories</h2>
        <div className="flex items-center justify-center flex-wrap gap-12 py-4 px-8">
          {topCats.map((cat) => (
            <div key={cat.id}>
              <CategoryItem text={cat.title} image={cat.image} category={`/${cat.category}`} />
            </div>
          ))}
        </div>
      </div>
    );
}

export default TopCategories;