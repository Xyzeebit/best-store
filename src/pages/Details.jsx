import { useParams } from "react-router-dom";
import { Layout } from "../components/core";

const Details = () => {
    const param = useParams();
    console.log(param)
    return (
        <Layout renderHeader={true}>
            View Details
        </Layout>
    );
}

export default Details;