import { useParams } from "react-router-dom";
import { Layout } from "../components/core";
import ViewItem from "../components/products/ViewItem";
import { useEffect, useState } from "react";
import { addItemToRecentViews, getDataByCategoryAndId } from "../api/apis";
import Rating from "../components/core/Rating";
import { addToCart, createOrders, removeFromCart } from "../redux/collectionsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import minus from '../assets/icons/minus-circle-icon.svg'
import plus from "../assets/icons/plus-circle-icon.svg";
import truckIcon from "../assets/icons/delivery-truck-icon.svg";
import boxIcon from "../assets/icons/return-box-shipping-icon.svg";


import RecentViews from "../components/products/RecentViews";


const Details = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getRatings = ratings => {
    let rating = ratings.reduce((prev, curr) => {
      return prev + curr
    }, 0);
    rating /= ratings.length;
    return rating;
  }

  const addItemToCart = () => {
    const item = { ...data, price: (data.discountPrice > 0 ? data.discountPrice : data.price), quantity };
    if (addedToCart) {
      dispatch(removeFromCart(item));
      setAddedToCart(!addedToCart);
    } else {
      dispatch(addToCart(item));
      setAddedToCart(!addedToCart);
    }
  }

  const handleBuyNow = () => {
    const order = {
      orders: [
        {
          id: data.id,
          title: data.title,
          price: data.price,
          quantity,
        }
      ],
      deliveryDetails: {},
      shippingCost: 0.00
    };
    dispatch(createOrders(order));
    navigate('/checkout')
  }

  useEffect(() => {
    document.title = `Bestore collections |  ${data.title ? data.title : ''}`;
  }, [data?.title]);

  useEffect(() => {
    const { category, itemId } = param;
    
      async function getData() {
        const resp = await getDataByCategoryAndId(category, itemId);
          if (resp.ok) {
              setData(resp.data);
              setLoading(false);
          }
      }
      getData();
  }, [param]);

  useEffect(() => {
    if (data && data.id) {
      addItemToRecentViews(data);
    }
  }, [data]);

  return (
    <Layout renderHeader={true}>
      {!loading && data && (
        <div className="px-4 md:px-16 py-4 md:py-8 mb-12 flex flex-col md:flex-row justify-center items-start gap-4 bg-white shadow">
          <div className="w-full md:w-1/2 overflow-hidden rounded-xl border-2 border-gray-500">
            <ViewItem images={data.images} />
          </div>

          <div className="w-full md:w-1/2 p-4 rounded-xl border-2 border-gray-500 bg-white">
            <h1 className="font-bold text-2xl pb-4">{data.title}</h1>
            <details className="p-4 bg-gray-200 text-sm text-gray-900 rounded">
              <summary>Description</summary>
              <p className="pt-2">{data.description}</p>
            </details>
            <div className="pt-4 pb-4 flex gap-4 justify-start items-center">
              <Rating rating={getRatings(data.ratings)} />
              <small>({data.ratings.length}) reviews</small>
            </div>
            <div className="flex gap-4 justify-start items-center font-semibold ">
              <p className="text-xl text-green-900">
                ${((data.discountPrice > 0 ? data.discountPrice : data.price) * quantity).toFixed(2)}
              </p>
              {data.discountPrices > 0 && (
                <p className="text-red-500">
                  <s>${data.price}</s>
                </p>
              )}
            </div>
            {data.discount && (
              <div className="pb-8 text-sm">
                <span className="text-red-500 font-semibold">
                  {data.discount}%
                </span>{" "}
                <span className="text-gray-900">discount</span>
              </div>
            )}
            <hr />
            <div className="flex justify-center items-center gap-4 pt-8">
              <button
                className="shadow-sm rounded-full p-1"
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                <img
                  src={minus}
                  alt="Reduce quantity to buy"
                  width={45}
                  height={45}
                />
              </button>
              <div className="w-12 h-12 border-2 border-black rounded flex items-center justify-center">
                {quantity}
              </div>
              <button
                className="shadow-sm rounded-full p-1"
                onClick={() =>
                  setQuantity(
                    quantity < data.quantityLeft ? quantity + 1 : quantity
                  )
                }
              >
                <img
                  src={plus}
                  alt="Increase quantity to buy"
                  width={45}
                  height={45}
                />
              </button>
            </div>
            <small className="text-center block text-xs text-green-900 p-2">
              only {data.quantityLeft} item(s) left
            </small>
            <div className="pt-12 pb-8 flex items-center justify-center gap-4 md:gap-6 text-xs">
              <button onClick={handleBuyNow} className="bg-green-900 border-2 border-green-900 rounded-3xl text-white font-semibold px-4 md:px-6 lg:px-14 py-2 shadow-sm hover:bg-red-500 hover:border-red-500">
                Buy now
              </button>
              <button
                className="bg-gray-100 rounded-3xl text-grey-900 font-semibold px-4 md:px-6 lg:px-14 py-2 border-2 border-grey-500 shadow-sm hover:bg-red-500 hover:border-red-500 hover:text-white"
                onClick={addItemToCart}
              >
                {addedToCart ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
            <hr />
            <div className="pt-8 text-sm text-gray-900">
              <p className="flex justify-start items-center gap-4 pb-2">
                <img src={truckIcon} alt="free delivery" width={20} height={20} />{" "}
                <span>Free delivery</span>
              </p>
              <p className="flex justify-start items-center gap-4">
                <img src={boxIcon} alt="free delivery" width={20} height={20} />
                <span>Return delivery</span>
              </p>
            </div>
          </div>
        </div>
      )}
      {!loading && data && <RecentViews id={data.id} />}
    </Layout>
  );
}

export default Details;