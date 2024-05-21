import React from "react";
import Link from "next/link";

const OrdersIds = () => {
  return (
    <ul>
      <li>
        <Link href="/order/1233">1233</Link>
      </li>
      <li>
        <Link href="/order/1255">1255</Link>
      </li>
      <li>
        <Link href="/order/1266">1266</Link>
      </li>
    </ul>
  );
};

export default OrdersIds;
