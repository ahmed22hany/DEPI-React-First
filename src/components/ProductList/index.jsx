import React, { useState, useEffect } from "react";

import SingleProduct from "../SingleProduct";

function ProductList({ search }) {
  const [products, setProducts] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayData(data);
      });
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      const newData = products?.filter((product) =>
        product.title.includes(search)
      );
      setDisplayData(newData);
    } else setDisplayData(products);
  }, [products, search]);

  return (
    <div className="container mb-3">
      <div className="row gap-3 justify-content-center align-items-center">
        {displayData?.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
