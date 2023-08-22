import phone from '../../assets/toys.jpg';
import laptop from "../../assets/clothes.jpg";
import shirt from "../../assets/toys.jpg";
import shoe from "../../assets/makeup.jpg";
import bag from "../../assets/toys.jpg";

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

export const fetchTopCategories = async (testing) => {
    if (testing) {
        return topCats;
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