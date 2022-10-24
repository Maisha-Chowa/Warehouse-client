import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";

const Item = ({ product, handleDeleteBtn }) => {
  const {
    _id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
    email,
  } = product;
  // console.log(handleDeleteBtn);

  const [products, setProducts] = useProducts();
  const handleItemDeleteBtn = (_id) => {
    const proceed = window.confirm("Are you sure about deleting user???");
    if (proceed) {
      console.log("deleting user with id", _id);
      const url = `https://floating-coast-12794.herokuapp.com/products/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log(data);
            console.log("deleted");
            const remaining = products.filter(
              (product) => product._id !== product
            );
            setProducts(remaining);
          }
        });
    }
  };
  const navigate = useNavigate();
  const handleStockUpdateBtn = () => {
    navigate(`/inventory/${_id} `);
  };
  return (
    <div className="border-solid border-2 border-l-4 border-grey-500  rounded-lg  hover:border-rose-600 shadow-2xl pb-8 ">
      <div className=" flex justify-center pt-4">
        <img
          classname="border-solid border-2 border-rose-500 "
          width="250px"
          height="250px"
          src={thumbnail}
          alt=""
        />
      </div>
      <h2 className="mx-4 px-4 ">
        <span className="font-bold">Product name: </span>
        {title}
      </h2>
      <p className="mx-4 px-4 ">
        <span className="font-bold">Details:</span> {description}
      </p>
      <p className="mx-4 px-4 ">
        <span className="font-bold">Price: </span>
        {price}
      </p>
      <p className="mx-4 px-4 ">
        <span className="font-bold">Discount Percentage: </span>
        {discountPercentage}
      </p>
      <p className="mx-4 px-4 ">
        <span className="font-bold">Rating: </span>
        {rating}
      </p>
      <p className="mx-4 px-4 ">
        <span className="font-bold">Brand:</span> {brand}
      </p>
      <p className="mx-4 px-4 ">
        <span className="font-bold">In-Stock: </span>
        {stock}
      </p>

      {handleDeleteBtn ? (
        <div className=" flex justify-center pt-4">
          <button
            onClick={() => {
              handleItemDeleteBtn(_id);
            }}
            className="px-4 py-2  rounded-lg text-white bg-indigo-900 
             hover:bg-rose-700"
          >
            Delete Item
          </button>
        </div>
      ) : (
        <div className=" flex justify-center pt-4">
          <button
            onClick={handleStockUpdateBtn}
            className="px-4 py-2  rounded-lg text-white bg-indigo-900 
          hover:bg-rose-700"
          >
            Stock Update
          </button>
        </div>
      )}
    </div>
  );
};

export default Item;
