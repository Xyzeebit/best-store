
const DealsOfTheDay = () => {
    return (
      <div className="px-4 md:px-16 py-8 md:py-16 grid grid-cols-3 gap-10">
        <div className="col-span-3 md:col-span-2 bg-green-900 rounded-lg px-4 py-2">
          <div className="font-bold text-2xl text-white pb-4">
            Deals of the Day
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-2 h-36 bg-white rounded-lg"></div>
            <div className="col-span-2 h-36 bg-white rounded-lg"></div>
            <div className="col-span-2 h-36 md:h-32 bg-white rounded-lg"></div>
            <div className="col-span-2 h-36 md:h-32 bg-white rounded-lg"></div>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 rounded-lg">
          <div className="font-bold text-xl text-green-900 pb-4">
            Flash Sales
          </div>
          <div className="grid grid-cols-9 md:grid-cols-3 gap-2">
            <div className="col-span-3 md:col-span-1 h-24 bg-red-500 rounded-lg"></div>
            <div className="col-span-3 md:col-span-1 h-24 bg-yellow-500 rounded-lg"></div>
            <div className="col-span-3 md:col-span-1 h-24 bg-green-500 rounded-lg"></div>
            <div className="col-span-3 md:col-span-1 h-24 bg-blue-500 rounded-lg"></div>
            <div className="col-span-3 md:col-span-1 h-24 bg-pink-500 rounded-lg"></div>
            <div className="col-span-3 md:col-span-1 h-24 bg-gray-500 rounded-lg"></div>
            <div className="col-span-3 md:col-span-1 h-24 bg-slate-500 rounded-lg"></div>
            <div className="col-span-3 md:col-span-1 h-24 bg-orange-500 rounded-lg"></div>
            <div className="col-span-3 md:col-span-1 h-24 bg-red-500 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
}
export default DealsOfTheDay;