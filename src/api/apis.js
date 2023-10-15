import { nanoid } from "@reduxjs/toolkit";

import stationery from "../assets/stationery.jpg";
import clothes from "../assets/clothes.jpg";
import footwear from "../assets/footwear.jpg";
import makeup from "../assets/makeup.jpg";
import appliances from "../assets/appliances.jpg";

export const BANNER_ITEMS = [
  {
    id: nanoid(8),
    to: "/book-and-stationery/stationeries",
    image: stationery,
  },
  {
    id: nanoid(8),
    to: "/clothes/kids",
    image: clothes,
  },
  {
    id: nanoid(8),
    to: "/shoes/footwear",
    image: footwear,
  },
  {
    id: nanoid(8),
    to: "/beauty/makeup",
    image: makeup,
  },
  {
    id: nanoid(8),
    to: "/electronics/home-appliances",
    image: appliances,
  },
];

export const DEALS_ITEM = [
  {
    id: nanoid(8),
    to: "/shoes/footwear",
    image: footwear,
    text: "Gucci sneaker for outdoors",
  },
  {
    id: nanoid(8),
    to: "/beauty/makeup",
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