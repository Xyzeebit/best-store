import phone from '../assets/smartphone.png';
import laptop from "../assets/kadican.webp";
import shirt from "../assets/mens-shirt.webp";
import makeup from "../assets/makeup.jpg";
import toys from "../assets/toys.jpg";
import shoes from "../assets/sneakers.webp";
import hair from '../assets/women-hair.webp'

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
    image: laptop,
    category: "electronics",
  },
  {
    id: "s8bjij9jnk",
    title: "Toys",
    image: toys,
    category: "toys-and-games",
  },
  {
    id: "s8bBjij9jnk",
    title: "Hair",
    image: hair,
    category: "hair",
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
    image: makeup,
    category: "makeup-and-cosmetics",
  },
  {
    id: "sbHjij9jnk",
    title: "Sneakers",
    image: shoes,
    category: "footwear",
  },
];

export const fetchTopCategories = async (testing) => {
    if (testing) {
        return { ok: true, data: topCats };
    }
    try {
        const resp = await fetch('');
        if (resp.ok) {
            const data = await resp.json();
            return { ok: true, data };
        } else {
            return { ok: false, error: 'Unable to get top categories data' };
        }
    } catch (err) {
        return { ok: false, error: 'Fail to connect. Please try again' };
    }
}