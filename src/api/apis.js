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
  },
  {
    id: nanoid(8),
    to: "/beauty/makeup",
    image: makeup,
  },
]