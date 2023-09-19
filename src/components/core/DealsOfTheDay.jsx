import DealsItem from "./DealsItem";
import imgMakeup from '../../assets/makeup.jpg';
import imgStationery from "../../assets/stationery.jpg";
import imgFootwear from "../../assets/footwear.jpg";
import imgToys from "../../assets/toys.jpg";
import FlashSales from "./FlashSales";



const DealsOfTheDay = () => {
    return (
      <div className="px-4 md:px-16 py-8 md:py-16 grid grid-cols-3 gap-10">
        <div className="col-span-3 md:col-span-2 bg-green-900 rounded-lg px-4 py-2">
          <div className="font-bold text-2xl text-white pb-4">
            Deals of the Day
          </div>
          <div className="grid grid-cols-4 gap-4">
            <DealsItem
              id={"jkakilOOij"}
              text={"Makeup kit from top brand"}
              image={imgMakeup}
              price={"195.99"}
              styles={"col-span-2 h-36 bg-white rounded-lg shadow-md"}
            />
            <DealsItem
              id={"jkakilvOOij"}
              text={"Get your stationeries for half the price"}
              image={imgStationery}
              price={"15.45"}
              styles={"col-span-2 h-36 bg-white rounded-lg shadow-md"}
            />
            <DealsItem
              id={"jkakixlOOij"}
              text={"Mens footwear from top brand"}
              image={imgFootwear}
              price={"250.00"}
              styles={"col-span-2 h-36 bg-white rounded-lg shadow-md"}
            />
            <DealsItem
              id={"jkakilOvOij"}
              text={"Kiddies special"}
              image={imgToys}
              price={"5.99"}
              styles={"col-span-2 h-36 bg-white rounded-lg shadow-md"}
            />
          </div>
        </div>
        <FlashSales timer={{hours: 1, minutes: 2}} />
      </div>
    );
}
export default DealsOfTheDay;