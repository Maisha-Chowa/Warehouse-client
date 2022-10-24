import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import Banner from "../Banner/Banner";
import Inventoryitems from "../Inventoryitems/Inventoryitems";
import Item from "../Item/Item";
const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useProducts();
  const gotoManageInventory = () => {
    navigate("/manageInventory");
  };
  return (
    <div>
      <Banner></Banner>
      {/* <Inventoryitems></Inventoryitems> */}
      <div className="lg:m-20 md:m-12 sm:m-8">
        <div className="grid gap-8 lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-1 ">
          {products.slice(0, 6).map((product) => (
            <Item key={product._id} product={product}></Item>
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <p className="p-4">Go to Manage Inventory ---- </p>
        <button
          className=" bg-indigo-900 p-4 rounded-lg text-white"
          onClick={gotoManageInventory}
        >
          Manage Inventory
        </button>
      </div>
    </div>
  );
};

export default Home;
