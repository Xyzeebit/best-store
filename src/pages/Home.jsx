import logo from '../assets/logo.png'

const Home = () => {
    
    return (
      <div className="px-8 md:px-32 glass">
        <div className="py-8">
          <img src={logo} alt="best store logo" width={40} height={60} />
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-3 font-bold text-6xl text-green-700 pb-4 text-center">
            Easy buy{" "}
          </div>
          <div className="col-span-3 font-bold text-4xl pb-4 text-center">
            on my{" "}
          </div>
          <div className="col-span-3 font-extrabold text-6xl text-blue-700 text-center">
            BEST STORE
          </div>
        </div>
      </div>
    );
}

export default Home;