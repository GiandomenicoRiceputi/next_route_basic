import React from "react";

// @ts-ignore
const OrderDetail = ({ params }) => {
  return (
    <div>
      <h1>Order {params.id}</h1>
    </div>
  );
};

export default OrderDetail;
