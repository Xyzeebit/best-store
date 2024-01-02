import DealsItem from "./DealsItem";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { filterByCategory } from "../../api/collections-api";
import Carousel from "./Carousel";


const DealsOfTheDay = () => {
  const { data } = useSelector((state) => state.collections);
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    if (data) {
      filterByCategory(data, "deals", setDeals)
    }
  }, [data]);

    return (
      <div className="px-4 md:px-16 py-8 md:py-16 grid grid-cols-3 gap-10">
        <div className="col-span-3 md:col-span-2 bg-green-900 rounded-lg px-4 py-2">
          <div className="font-bold text-2xl text-white pb-4">
            Deals of the Day
          </div>
          <div className="grid grid-cols-4 gap-4">
            {deals && deals.map((deal, i) => {
              if (i < 4) {
                return (
                  <DealsItem
                    key={deal.id}
                    id={deal.id}
                    text={deal.title}
                    image={deal.images[0]}
                    price={deal.price}
                    styles={"col-span-2 h-36 bg-white rounded-lg shadow-md"}
                  />
                )
              }
            })}
          </div>
        </div>
        <Carousel tag="deals" delay={5000} classes="col-span-3 md:col-span-1 rounded-lg" />
      </div>
    );
}
export default DealsOfTheDay;