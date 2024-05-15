import React from "react";

// @ts-ignore
const ProductDetail = ({ params }) => {
  return (
    <div>
      <h1>Product {params.slug}</h1>
    </div>
  );
};

export default ProductDetail;
