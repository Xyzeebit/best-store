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
  try {
    const { error } = await signInWithEmail(email, password);
    if (error) {
      return { error };
    }
  console.log(error)
    {
      const { data, error } = await findUserByEmail(email);
      if (error) {
        return { error };
      }
      // ...query orders by users id

      return { data, error: null };
  }
  } catch(error) {
    return { error };
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
    is_merchant: false,
  };
  
  {
    
    const { error, data } = await signUpNewUser(email, pwd);
    if (error) {
      return error;
    }
    user.user_id = data.user.id;
  }
  
  const { error, data } = await createUser(user);
  if (error) {
    return error;
  }
  console.log("user db", data)
  return { error: null, data };
}

export async function getDataByCategoryAndId(category, id) {
  const data = COLLECTIONS.find((it) => it.id === id);
  return { ok: true, data };
}

export async function createNewProduct(product) {
  
  const item = {
    images: [],
  };
  await Promise.all(product.images.map(async (image) => {
    const { error, data } = await uploadImage("best-store", image);
    if (error) {
      return error;
    }
    item.images.push(data.publicURL); // image url
  }));
  const { error, data } = await createCollectionsItem(item);
  if (error) {
    return { ok: false };
  } else {
    return { ok: true, data };
  }
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
    // options: {
    //   emailRedirectTo: redirect, // 'https//example.com/welcome'
    // },
  });
  return { data, error };
}

async function signOut() {
 try {
   const { error } = await supabase.auth.signOut();
   return { error };
 } catch (error) {
   console.log("caught:", error);
   return { error };
 }
}

async function signInWithEmail(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
  } catch (error) {
    console.log("caught:", error);
    return {error};
  }
}

export async function signInWithGoogle() {
  
  try {
    const { error, data } = await supabase.auth.signInWithOAuth({ provider: 'google' });
    return { data, error };
  } catch (error) {
    console.log("caught:", error);
    return { error };
  }
}

export async function getCurrentUser() {
  try {
    const user = await supabase.auth.getUser();
    return { user, error: null };
  } catch (error) {
    return { error };
  }
}
export async function getSession() {
  try {
    const session = await supabase.auth.getSession();
    return { session, error: null };
  } catch (error) {
    return { error };
  }
}

export function authChange(cb) {
  try {
    const { data } = supabase.auth.onAuthStateChange((evt, session) => {
      if (session) {
        cb({ user: session.user.user_metadata, id: session.user.id }, data);
      }
  });
  } catch(error) {
    console.log("auth change error");
  }
}

/**
 * Performs a file uploading operations
 * @param {string} bucket the bucket name to operate on
 * @param {object} file the file object to be uploaded
 * @returns 
 */
async function uploadImage(bucket, file) {
  try {
    const { data, error } = await supabase.storage
    .from(bucket) // bucket => images
    .upload(`images/${file.name}`, file, {
      cacheControl: "3600",
      upsert: false,
    });
    return { error, data };
  } catch (error) {
    console.log("caught:", error);
    return { error };
  }
}


/**
 * Performs a database search for a user with email that matches the passed in email
 * @param {string} email
 * @returns
 */
async function findUserByEmail(email) {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email);
    return { data, error };
  } catch (error) {
    console.log("caught:", error);
    return { error };
  }
}

/**
 * Performs an insertion operation on the database
 * @param {object} user an object to be inserted into the database
 * @returns 
 */
async function createUser(user) {
 try {
   const { data, error } = await supabase.from("users").insert(user).select();
   return { data, error };
 } catch (error) {
   console.log("caught:", error);
   return { error };
 }
}


export async function getCollections(lastIndex, limit) {
  try {
    const {error, data} = await supabase.from("collections")
      .select("*")
      .range(lastIndex, lastIndex + limit)
    
    return { error, data };
  } catch (error) {
    console.log("caught:", error);
    return { error };
  }
}

/**
 * Performs an insertion operation on the database collections
 * @param {object} item an object to be inserted into the database collections
 * @returns
 */
async function createCollectionsItem(item) {
  try {
    const { data, error } = await supabase.from("collections").insert(item).select();
    return { error, data };
  } catch (error) {
    console.log("caught:", error);
    return { error };
  }
}

/**
 * Performs an update on the table column
 * @param {string} id column id
 * @param {object} updates object to be used for updates
 */
async function updateCollectionsItem(id, updates) {
  try {
    const { data, error } = await supabase
      .from("collections")
      .update(updates)
      .eq("id", id)
      .select();

    return { error, data };
  } catch (error) {
    console.log("caught:", error);
    return { error };
  }
}

/**
 * Performs an operation to get all the data in the collection filtered by an array of strings
 * @param {string} column is the column name to be filtered
 * @param {string[]} filters is an array of strings that will be use for filtering the collections
 */
async function selectWithFilterFromCollections(column, filters) {
  try {
    const { data, error } = await supabase
      .from("collections")
      .select()
      .contains(column, filters);
    
    return { error, data };

  } catch (error) {
    console.log("caught:", error);
    return {error};
  }
}

/**
 * Deletes the record in the database with id
 * @param {string} id deletes an item from the collections that matches id
 * @returns
 */
export async function deleteCollectionsItem(id) {
  try {
    const { error } = await supabase.from("collections").delete().eq("id", id);
    return { error };
  } catch(error) {
    return { error };
  }
}
