import { nanoid } from "@reduxjs/toolkit";
import phone from "../assets/phone2.webp";
import laptop from "../assets/laptop.jpg";
import shirt from "../assets/mens-shirt.webp";
import makeup from "../assets/makeup.jpg";
import toys from "../assets/toys.jpg";
import shoes from "../assets/sneakers.webp";
import hair from "../assets/women-hair.webp";
import stationery from "../assets/stationery.jpg";
import clothes from "../assets/clothes.jpg";
import footwear from "../assets/footwear.jpg";
import appliances from "../assets/appliances.jpg";
import icon from "../assets/phone1.webp";
import hair_w from "../assets/hair_women.webp";
import mensShirt from "../assets/mens-shirt.webp";

import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const BANNER_ITEMS = [
  {
    id: nanoid(8),
    to: "/books-and-stationeries",
    image: stationery,
    color: "yellow",
  },
  {
    id: nanoid(8),
    to: "/babies",
    image: clothes,
    color: "red",
  },
  {
    id: nanoid(8),
    to: "/footwears",
    image: footwear,
    color: "gray",
  },
  {
    id: nanoid(8),
    to: "/makeup-and-cosmetics",
    image: makeup,
    color: "pink",
  },
  {
    id: nanoid(8),
    to: "/home-appliances",
    image: appliances,
    color: "gray",
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

export const COLLECTIONS = [
  {
    id: nanoid(12),
    title: "Samsung s20",
    price: "850.90",
    discountPrice: "800.95",
    discount: "",
    description: "Samsung S20 ultra 6gb ram 124gb rom",
    image: phone,
    images: [phone, phone, phone],
    categories: ["phones"],
    tags: ["newest"],
    brand: "Samsung",
    ratings: [1, 2, 4, 4, 2, 5, 2, 3],
    quantityLeft: 8,
  },
  {
    id: nanoid(12),
    title: "Samsung s20",
    price: "850.90",
    discountPrice: "800.95",
    discount: "",
    description: "Samsung S20 ultra 6gb ram 124gb rom",
    image: phone,
    images: [phone, phone, phone],
    categories: ["phones"],
    tags: ["newest"],
    brand: "Samsung",
    ratings: [1, 2, 4, 4, 2, 5, 2, 3],
    quantityLeft: 8,
  },
  {
    id: nanoid(12),
    title: "Samsung s20",
    price: "850.90",
    discountPrice: "800.95",
    discount: "",
    description: "Samsung S20 ultra 6gb ram 124gb rom",
    image: phone,
    images: [phone, phone, phone],
    categories: ["random", "phones"],
    tags: ["newest"],
    brand: "Samsung",
    ratings: [1, 2, 4, 4, 2, 5, 2, 3],
    quantityLeft: 8,
  },
  {
    id: nanoid(12),
    title: "Samsung s20",
    price: "850.90",
    discountPrice: "800.95",
    discount: "",
    description: "Samsung S20 ultra 6gb ram 124gb rom",
    image: phone,
    images: [phone, phone, phone],
    categories: ["random", "phones"],
    tags: ["newest"],
    brand: "Samsung",
    ratings: [1, 2, 4, 4, 2, 5, 2, 3],
    quantityLeft: 8,
  },
  {
    id: nanoid(12),
    title: "Babies wear",
    price: "130.45",
    discountPrice: "",
    discount: "",
    description: "",
    image: clothes,
    images: [clothes, clothes, clothes],
    categories: ["clothes", "babies wear", "flash sales", "deals"],
    tags: ["newest", "best seller"],
    brand: "Samsung",
    ratings: [1, 2, 4, 4, 2, 5, 2, 3],
    quantityLeft: 8,
  },
  {
    id: nanoid(12),
    title: "Babies wear",
    price: "130.45",
    discountPrice: "",
    discount: "",
    description: "",
    image: clothes,
    images: [clothes, clothes, clothes],
    categories: ["random", "clothes", "babies wear", "flash sales", "deals"],
    tags: ["newest", "best seller"],
    brand: "Samsung",
    ratings: [1, 2, 4, 4, 2, 5, 2, 3],
    quantityLeft: 8,
  },
  {
    id: nanoid(12),
    title: "Babies wear",
    price: "130.45",
    discountPrice: "",
    discount: "",
    description: "",
    image: clothes,
    images: [clothes, clothes, clothes],
    categories: ["clothes", "babies wear", "flash sales", "deals"],
    tags: ["newest", "best seller"],
    brand: "Samsung",
    ratings: [1, 2, 4, 4, 2, 5, 2, 3],
    quantityLeft: 8,
  },
  {
    id: nanoid(12),
    title: "Babies wear",
    price: "130.45",
    discountPrice: "",
    discount: "",
    description: "",
    image: clothes,
    images: [clothes, clothes, clothes],
    categories: ["clothes", "babies wear", "flash sales", "deals"],
    tags: ["newest", "best seller"],
    brand: "Samsung",
    ratings: [1, 2, 4, 4, 2, 5, 2, 3],
    quantityLeft: 8,
  },
  {
    id: nanoid(12),
    title: "Babies wear",
    price: "130.45",
    discountPrice: "",
    discount: "",
    description: "",
    image: clothes,
    images: [clothes, clothes, clothes],
    categories: ["random", "clothes", "babies wear", "flash sales", "deals"],
    tags: ["newest", "best seller"],
    brand: "Samsung",
    ratings: [1, 2, 4, 4, 2, 5, 2, 3],
    quantityLeft: 8,
  },
  {
    id: nanoid(12),
    title: "Babies wear",
    price: "130.45",
    discountPrice: "",
    discount: "",
    description: "",
    image: clothes,
    images: [clothes, clothes, clothes],
    categories: ["random", "clothes", "babies wear", "flash sales", "deals"],
    tags: ["newest", "best seller"],
    brand: "Samsung",
    ratings: [1, 2, 4, 4, 2, 5, 2, 3, 4],
    quantityLeft: 8,
  },
];

export async function fetchAllCollections() {
  const collections = COLLECTIONS;
  return { ok: true, data: collections };
}

export function isValidEmail(email) {
  if (typeof email !== "string")
    return [false, "Email must be valid character set"];
  email = email.trim();
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!pattern.test(email)) {
    return [false, "Email address not valid"];
  }
  const [local, domain] = email.split("@");
  if (local.length === 0 || domain.length === 0) {
    return [false, "Email address too short"];
  }
  if (domain.includes(".")) {
    const domains = domain.split(".");
    for (const p of domains) {
      if (p.length < 2) {
        return [false, "Invalid sub domain"];
      }
    }
  } else {
    return [false, "Invalid email address"];
  }
  return [true, "success"];
}

export function isValidPassword(pwd) {
  return pwd.length > 5;
}

export async function signInWithEmailAndPassword(email, password) {
  const { error } = await signInWithEmail(email, password);
  if (error) {
    return { error };
  }
  {
    const { data, error } = await findUserByEmail(email);
    if (error) {
      return { error };
    }
    // ...query orders by users id

    return { data, error: null };
  }
}

export async function createUserWithEmailAndPassword({
  email,
  pwd,
  firstname,
  lastname,
}) {
  const user = {
    email,
    firstname,
    lastname,
  };
  
  {
    const redirectURL = "/";
    const { error } = signUpNewUser(email, pwd, redirectURL);
    if (error) {
      return error;
    }
  }
  const { error, data } = await createUser(user);
  if (error) {
    return error;
  }
  user.id = data.data.id

  return { error: null, data: user };
}

export async function getDataByCategoryAndId(category, id) {
  const data = COLLECTIONS.find((it) => it.id === id);
  return { ok: true, data };
}

export async function createNewProduct(product) {
  COLLECTIONS.push(product);
}

export function getRecentViews() {
  let data = localStorage.getItem("bestore");
  let recentViews = [];
  try {
    data = JSON.parse(data);
    recentViews = [...data.recentViews];
  } catch (error) {
    console.log(error);
  }
  return recentViews.reverse();
}

export function addItemToRecentViews(item) {
  let storage = localStorage.getItem("bestore");
  if (!storage) {
    const obj = {
      user: {
        id: "",
        isLoggedIn: false,
      },
      recentViews: [],
    };
    try {
      localStorage.setItem("bestore", JSON.stringify(obj));
      storage = localStorage.getItem("bestore");
      try {
        storage = JSON.parse(storage);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      storage = JSON.parse(storage);
    } catch (error) {
      console.log(error);
    }
  }
  const found = storage.recentViews.find((it) => it.id === item.id);
  if (found) {
    return;
  } else {
    if (storage.recentViews.length > 15) {
      storage.recentViews.splice(0, 1, ...[item]);
    } else {
      storage.recentViews.push(item);
    }
    try {
      localStorage.setItem("bestore", JSON.stringify(storage));
    } catch (error) {
      console.log(error);
    }
  }
}

export async function signout() {
  const { error } = await signOut();
  if (error) {
    return false;
  }
  return true;
}

async function signUpNewUser(email, password, redirect) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: redirect, // 'https//example.com/welcome'
    },
  });
  return { data, error };
}

async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

async function signInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

// async function uploadImage(file) {
//   // const avatarFile = event.target.files[0];
//   const { data, error } = await supabase.storage
//     .from("avatars")
//     .upload("best-store/images/file.name.png", file, {
//       cacheControl: "3600",
//       upsert: false,
//     });
//   if (error) {
//   } else {
//     console.log(data.Key);
//   }
// }

// async function downloadImage() {
//   const { data, error } = await supabase.storage
//     .from("bucket-name")
//     .download("path/to/image.jpg", {
//       transform: { width: 640, height: 480, fit: "clip" },
//     });
// }

// async function read(option) {

// const { data, error } = await supabase.from("countries").select(`
//     name,
//     cities (
//       name
//     )
//   `);

// const { count, error } = await supabase
//   .from("countries")
//   .select("*", { count: "exact", head: true });
// }

/**
 * Performs a database search for a user with email that matches the passed in email
 * @param {string} email
 * @returns
 */
async function findUserByEmail(email) {
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("email", email);
  return { data, error };
}

/**
 * Performs an insertion operation on the database
 * @param {object} user an object to be inserted into the database
 * @returns 
 */
async function createUser(user){
  const { data, error } = await supabase.from("users").insert(user).select();
  return { data, error };
}

/**
 * Performs an insertion operation on the database collections
 * @param {object} item an object to be inserted into the database collections
 * @returns
 */
async function createCollectionItem(item) {
  const { data, error } = await supabase.from("collections").insert(item).select();

  return { error, data };
}

/**
 * Performs an update on the table column
 * @param {string} id column id
 * @param {object} updates object to be used for updates
 */
async function updateCollectionsItem(id, updates) {
  const { data, error } = await supabase
    .from("collections")
    .update(updates)
    .eq("id", id)
    .select();

  return { error, data };
}

/**
 * Performs an operation to get all the data in the collection filtered by an array of strings
 * @param {string} column is the column name to be filtered
 * @param {string[]} filters is an array of strings that will be use for filtering the collections
 */
async function selectWithFilterFromCollections(column, filters) {
  const { data, error } = await supabase
    .from("collections")
    .select()
    .overlaps(column, filters);
  return { error, data };
}

/**
 * Deletes the record in the database with id
 * @param {string} id deletes an item from the collections that matches id
 * @returns
 */
async function deleteCollectionsItem(id) {
  const { error } = await supabase.from("collections").delete().eq("id", id);
  return { error };
}
