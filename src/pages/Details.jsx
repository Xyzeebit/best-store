import { useParams } from "react-router-dom";
import { Layout } from "../components/core";
import ViewItem from "../components/products/ViewItem";
import { useEffect, useState } from "react";
import { getDataByCategoryAndId } from "../api/apis";
import Rating from "../components/core/Rating";

import minus from '../assets/icons/minus-circle-icon.svg'
import plus from "../assets/icons/plus-circle-icon.svg";


const Details = () => {
    const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
    const param = useParams();

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

    return (
      <Layout renderHeader={true}>
        {!loading && (
          <div className="px-4 md:px-16 py-4 md:py-8 flex flex-col md:flex-row justify-center items-start gap-4 bg-white shadow">
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl border-2 border-gray-500">
              <ViewItem images={data.images} />
            </div>

            <div className="w-full md:w-1/2 p-4 rounded-xl border-2 border-gray-500 bg-white">
              <h1 className="font-bold text-2xl">{data.title}</h1>
              <p className="pt-4 pb-4">{data.description}</p>
              <div className="pb-4 flex gap-4 justify-start items-center">
                <Rating rating={data.rating[0]} />
                <small>({data.rating[1]})</small>
              </div>
              <div className="flex gap-4 justify-start items-center font-semibold pb-8">
                <p className="text-xl text-green-900">
                  ${(data.prices[0] * quantity).toFixed(2)}
                </p>
                {data.prices[1] && (
                  <p className="text-red-500">
                    <s>${data.prices[1]}</s>
                  </p>
                )}
              </div>
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
                  className="shadow-sm rounded-full p-1 active:-scale-50"
                  onClick={() =>
                    setQuantity(
                      quantity < data.quantity ? quantity + 1 : quantity
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
              <div className="pt-12 flex items-center justify-center gap-4 md:gap-6 text-xs md:text-sm">
                <button className="bg-green-900 border-2 border-green-900 rounded-3xl text-white font-semibold px-8 md:px-10 lg:px-14 py-2 shadow-sm hover:bg-red-500 hover:border-red-500">
                  Buy now
                </button>
                <button className="bg-gray-100 rounded-3xl text-grey-900 font-semibold px-8 md:px-10 lg:px-14 py-2 border-2 border-grey-500 shadow-sm hover:bg-red-500 hover:border-red-500 hover:text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </Layout>
    );
}

export default Details;