import React from "react";
import Link from "next/link";

const ProductList = () => {
  return (
    <ul>
      <li>
        <Link href="/products/apple">Apple</Link>
      </li>
      <li>
        <Link href="/products/potatoes">Potatoes</Link>
      </li>
      <li>
        <Link href="/products/bananas">Bananas</Link>
      </li>
    </ul>
  );
};

export default ProductList;
