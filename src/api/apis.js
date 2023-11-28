import { nanoid } from "@reduxjs/toolkit";

import stationery from "../assets/stationery.jpg";
import clothes from "../assets/clothes.jpg";
import footwear from "../assets/footwear.jpg";
import makeup from "../assets/makeup.jpg";
import appliances from "../assets/appliances.jpg";

// import { createClient } from "@supabase/supabase-js";

// // Create a single supabase client for interacting with your database
// const supabase = createClient(
//   "https://xyzcompany.supabase.co",
//   "public-anon-key"
// );

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
  },
];

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
    details: `White shoe for men and women`,
    prices: ["150.45", "160.45"],
    discount: 10,
    rating: [4.5, 27],
    quantityLeft: 12,
    quantity: 1,
    title: "Sneakers",
    images: [footwear, clothes, stationery],
  };
  return { ok: true, data };
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
  // clear record
  return true;
}



// async function signUpNewUser() {
//   const { data, error } = await supabase.auth.signUp({
//     email: 'example@email.com',
//     password: 'example-password',
//     options: {
//       emailRedirectTo: 'https//example.com/welcome'
//     }
//   })
// }

// async function signOut() {
//   const { error } = await supabase.auth.signOut()
// }

// async function signInWithEmail() {
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email: 'example@email.com',
//     password: 'example-password'
//   })
// }

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

// async function create(data) {

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

// async function update(data) {

// }

// async function remove(option) {

// }