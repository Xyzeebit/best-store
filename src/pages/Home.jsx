import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        throw new Error("Invalid state");

    }, []);
    return (
        <div>
            <h1>BEST STORE</h1>
        </div>
    )
}

export default Home;