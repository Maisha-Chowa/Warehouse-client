import React, { useEffect, useState } from "react";
import useProducts from "../../Hooks/useProducts";
import Item from "../Item/Item";

const Inventoryitems = () => {
  const [products, setProducts] = useProducts();
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("https://floating-coast-12794.herokuapp.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  return (
    <div className="lg:m-20 md:m-12 sm:m-8">
      {/* <h2>This is inventory items</h2>
      <h3>Total Products in the inventory: {products.length}</h3> */}
      <div className="grid gap-8 lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-1 ">
        {products.map((product) => (
          <Item key={product._id} product={product}></Item>
        ))}
      </div>
    </div>
  );
};

export default Inventoryitems;
