import { Layout } from "../components/core";

const NotFound = () => (
  <Layout renderHeader={true}>
    <div className="px-4 md:px-16 py-24">
      <h1 className="text-center font-extralight text-3xl text-gray-900">
        The page you{"'"}re looking for
        <br />
        does not exist or is yet to be implemented
      </h1>
    </div>
  </Layout>
);

export default NotFound;