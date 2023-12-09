import { nanoid } from "@reduxjs/toolkit";

import phone from "../assets/phone2.webp";
import laptop from "../assets/laptop.jpg";
import shirt from "../assets/mens-shirt.webp";
import makeup from "../assets/makeup.jpg";
import toys from "../assets/toys.jpg";
import shoes from "../assets/sneakers.webp";
import hair from "../assets/women-hair.webp";

export const LINKS = [
  {
    text: "Random",
    url: "/products",
  },
  {
    text: "Phones",
    url: "/phones",
  },
  {
    text: "Laptops",
    url: "/laptops",
  },
  {
    text: "Furniture",
    url: "/home-and-living",
  },
  {
    text: "Gadgets",
    url: "/gadgets",
  },
  {
    text: "Shirts",
    url: "/shirts",
  },
  {
    text: "Shoes",
    url: "/shoes",
  },
  {
    text: "Games",
    url: "/games",
  },
  {
    text: "Bags",
    url: "/bags",
  },
  {
    text: "Books",
    url: "/books",
  },
  {
    text: "Beauty",
    url: "/care-products",
  },
  {
    text: "Toys",
    url: "/toys",
  },
  {
    text: "Stationeries",
    url: "/books-and-stationeries",
  },
  {
    text: "Travel",
    url: "/travel",
  },
];

export const FEATURED_LIST = [
  {
    id: nanoid(12),
    title: "Phones",
    image: phone,
    category: "phones",
  },
  {
    id: nanoid(12),
    title: "Laptops",
    image: laptop,
    category: "laptops",
  },
  {
    id: nanoid(12),
    title: "Toys",
    image: toys,
    category: "toys",
  },
  {
    id: nanoid(12),
    title: "Hair",
    image: hair,
    category: "hairs",
  },
  {
    id: nanoid(12),
    title: "Shirts",
    image: shirt,
    category: "shirts",
  },
  {
    id: nanoid(12),
    title: "Cosmetics",
    image: makeup,
    category: "makeup-and-cosmetics",
  },
  {
    id: nanoid(12),
    title: "Sneakers",
    image: shoes,
    category: "footwears",
  },
];



export const filterByCategory = (collections, category, cb) => {
  const list = collections.filter((item) => {
    if (item.categories.indexOf(category) !== -1) {
      return true;
    }
    return false;
  });
  cb(list);
};

export const getCollectionsWithTag = (collections, tag) => {
  const list = collections.filter(item => item.tags.indexOf(tag) !== -1)
  return list;
};

export function findItemsWithText(collections, text) {
  const list = collections.filter(item => {
    if (item.title.toLowerCase().indexOf(text) !== -1 ||
      (item.description.toLowerCase().indexOf(text) !== -1)
    ) {
      return true
    } else {
      return false;
    }
  });
  return list;
}