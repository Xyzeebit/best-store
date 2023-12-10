import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TopProducts, Layout } from "../components/core";
import { useSelector } from "react-redux";
import { filterByCategory } from "../api/collections-api";

const Products = ({ category }) => {
  const { data } = useSelector((state) => state.collections);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    document.title = "Bestore | " + category === "random" ? "Products" : category;
  }, [category]);

  useEffect(() => {
    if(data) {
      const path = category.toLowerCase();
      filterByCategory(data, path, setFilteredData);
    }
  }, [category, data]);

  return (
    <Layout renderHeader={true}>
      <TopProducts category={category} data={filteredData} />
    </Layout>
  );
};

Products.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Products;
