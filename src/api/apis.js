import { nanoid } from "@reduxjs/toolkit";

import stationery from "../assets/stationery.jpg";
import clothes from "../assets/clothes.jpg";
import footwear from "../assets/footwear.jpg";
import makeup from "../assets/makeup.jpg";
import appliances from "../assets/appliances.jpg";

export const BANNER_ITEMS = [
  {
    id: nanoid(8),
    to: "/books-and-stationeries",
    image: stationery,
  },
  {
    id: nanoid(8),
    to: "/babies",
    image: clothes,
  },
  {
    id: nanoid(8),
    to: "/footwears",
    image: footwear,
  },
  {
    id: nanoid(8),
    to: "/makeup-and-cosmetics",
    image: makeup,
  },
  {
    id: nanoid(8),
    to: "/home-appliances",
    image: appliances,
  },
];

export const DEALS_ITEM = [
  {
    id: nanoid(8),
    to: "/footwears",
    image: footwear,
    text: "Gucci sneaker for outdoors",
  },
  {
    id: nanoid(8),
    to: "/makeup-and-cosmetics",
    image: makeup,
    text: "Makeup set",
  },
];


export const PRODUCTS = [
  {
    id: nanoid(16),
    title: "",
    description: "",
    imageThumbnail: "",
    images: [],
    categories: [],
    tags: [],
    brand: "",
  }
];

export function isValidEmail(email) {
  if (typeof email !== 'string')
    return [false, "Email must be valid character set"];
  email = email.trim();
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!pattern.test(email)) {
    return [false, "Email address not valid"];
  }
  const [local, domain] = email.split('@');
  if (local.length === 0 || domain.length === 0) {
    return [false, "Email address too short"];
  }
  if (domain.includes('.')) {
    const domains = domain.split('.');
    for (const p of domains) {
      if (p.length < 2) {
        return [false, "Invalid sub domain"];
      }
    }
  } else {
    return [false, "Invalid email address"];
  }
  return [true, 'success'];
}

export function isValidPassword(pwd) {
  return pwd.length > 5;
}

export async function signInWithEmailAndPassword(email, password) {
  const user = {
    id: nanoid(12),
    email,
    name: "John Doe",
    orders: [],
    isLoggedIn: true,
  };

  return user;
}

export async function createUserWithEmailAndPassword(email, password) {
  const user = {
    id: nanoid(12),
    email,
    name: "John Doe",
    orders: [],
    isLoggedIn: true,
  };
  return user;
}

export async function getDataByCategoryAndId(category, id) {
  const data = {
    category,
    id,
    description: "White designer sneakers, size 26",
    prices: ["150.45", "160.45"],
    rating: [4.5, 27],
    quantitiesLeft: 12,
    title: "Sneakers",
    images: [footwear, clothes, stationery],
  };
  return { ok: true, data };
}

export function getRecentViews() {
  let data = localStorage.getItem('bestore');
  let recentViews = [];
  try {
    data = JSON.parse(data);
    recentViews = data.recentViews;
  } catch (error) {
    console.log(error);
  }
  return recentViews;
}

export function addItemToRecentViews(item) {
  const storage = getRecentViews();
  item = storage.recentViews.find(it => it.id === item.id);
  if (item) {
    if (storage.recentViews.length > 15) {
      storage.recentViews.splice(0, 1, ...[item]);
    } else {
      storage.recentViews.push(item);
    }
    try {
      localStorage.setItem('bestore', JSON.stringify(storage))
    } catch (error) {
      console.log(error)
    }
  }

}