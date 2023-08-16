import phone from '../../assets/icon-search.svg';
import laptop from "../../assets/icon-search.svg";
import shirt from "../../assets/icon-search.svg";
import shoe from '../../assets/icon-search.svg';
import bag from "../../assets/icon-search.svg";
import watch from "../../assets/icon-search.svg";

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
        <div className='flex items-center justify-center gap-12 py-4'>
            {topCats.map(cat => (
                <Link key={cat.id} to="/">
                    <ImageButton text={cat.title} image={cat.image} />
                </Link>
            ))}
        </div>
    );
}

export default TopCategories;