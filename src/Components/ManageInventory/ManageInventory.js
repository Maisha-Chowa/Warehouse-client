import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Item from "../../Home/Item/Item";
import useProducts from "../../Hooks/useProducts";

const ManageInventory = () => {
  // let { id } = useParams();
  //console.log(id);
  const [products, setProducts] = useProducts();
  const [handleDeleteBtn, setHandleDeleteBtn] = useState(true);
  const navigate = useNavigate();
  const gotoAddNewItem = () => {
    navigate("/add-New-Item");
  };
  //   const handleManageInventory = () => {
  //     const handleDeleteBtn = 0;
  //     return handleDeleteBtn;
  //   };
  return (
    <div className="lg:m-20 md:m-12 sm:m-8">
      <h2>This is manage Inventory</h2>
      {/* <h2>This is inventory items</h2>
      <h3>Total Products in the inventory: {products.length}</h3> */}
      <div className="grid gap-8 lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-1 ">
        {products.map((product) => (
          <Item
            key={product._id}
            product={product}
            handleDeleteBtn={handleDeleteBtn}
          ></Item>
        ))}
      </div>
      <div className=" flex justify-center pt-4">
        <button
          onClick={gotoAddNewItem}
          className="px-4 py-2  rounded-lg text-white bg-indigo-900 
             hover:bg-rose-700"
        >
          Add New Item
        </button>
      </div>
    </div>
  );
};

export default ManageInventory;
