import React, { useState, useEffect } from "react";

const ProductData = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((Allproduct) => setproduct(Allproduct));

    return () => {
      fetch("https://fakestoreapi.com/products/")
        .then((res) => res.json())
        .then((Allproduct) => setproduct(Allproduct));
    };
  }, []);

  if (product) {
    localStorage.setItem("product", JSON.stringify(product));
  }

  const product_data_from_localStroage = JSON.parse(
    localStorage.getItem("product")
  );

  return product_data_from_localStroage;
};

export default ProductData;
