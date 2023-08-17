import phone from '../../assets/toys.jpg';
import laptop from "../../assets/toys.jpg";
import shirt from "../../assets/toys.jpg";
import shoe from "../../assets/toys.jpg";
import bag from "../../assets/toys.jpg";
import watch from "../../assets/toys.jpg";

import ImageButton from './ImageButton';

import { Link } from "react-router-dom";




const TopCategories = () => {
    const topCats = [
        {
            id: "sjij9jnk",
            title: "Phones",
            image: phone,
        },
        {
            id: "s8bjij9jnk",
            title: "Laptops",
            image: laptop,
        },
        {
            id: "sjijLJ9jnk",
            title: "Shirts",
            image: shirt,
        },
        {
            id: "sjiJOj9jnk",
            title: "Shoes",
            image: shoe,
        },
        {
            id: "sbHjij9jnk",
            title: "Bags",
            image: bag,
        },
        {
            id: "sKjij9jnk",
            title: "Watches",
            image: watch,
        },
    ];
    return (
      <div className="px-4 md:px-16 py-8 bg-gray-50">
        <h2 className='font-bold text-green-700 text-xl pb-4'>Shop From Our Top Categories</h2>
        <div className="flex items-center justify-center flex-wrap gap-12">
          {topCats.map((cat) => (
            <Link key={cat.id} to="/">
              <ImageButton text={cat.title} image={cat.image} />
            </Link>
          ))}
        </div>
      </div>
    );
}

export default TopCategories;