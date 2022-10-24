import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const [product, setProduct] = useState({});
  const restockQuantityRef = useRef("");
  let { id } = useParams();
  //console.log(id);
  ///load product by specific id
  useEffect(() => {
    fetch(`https://floating-coast-12794.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);

  //const [quantity, setQuantity] = useState(0);
  //console.log(quantity);
  let quantity = product.stock;
  //console.log(quantity);
  const handleDeliverBtn = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      // console.log(newQuantity);
      //product.stock = newQuantity;
      handleUpdate(newQuantity);
    } else {
      alert("Sorry, This product is out of stock");
    }
  };

  const handleRestockBtn = (event) => {
    event.preventDefault();
    const restockQuantity = restockQuantityRef.current.value;
    console.log(restockQuantity);
    const newQuantity = parseInt(restockQuantity) + parseInt(quantity);
    //console.log("newq", newQuantity);
    product.stock = newQuantity;
    //console.log(product.stock);
    handleUpdate(newQuantity);
    // const updateStock = { restockQuantity };
    // console.log(updateStock);
    event.target.reset();
  };
  const handleUpdate = (quantity) => {
    const updateStock = { quantity };
    product.stock = quantity;
    console.log(product);
    //console.log("up", updateStock);
    const url = `https://floating-coast-12794.herokuapp.com/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateStock),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
        alert("Updated Successfully");
      });
  };
  return (
    <section className="grid grid-cols-1 mx-28 my-14">
      <div className="border-solid border-2 border-l-4 border-grey-500  rounded-lg  hover:border-rose-600 shadow-2xl pb-8 ">
        <div className=" flex justify-center pt-4">
          <img
            classname="border-solid border-2 border-rose-500 "
            width="250px"
            height="250px"
            src={product.thumbnail}
            alt=""
          />
        </div>
        <h2 className="mx-4 px-4 ">
          <span className="font-bold">Product Id: </span>
          {product._id}
        </h2>
        <h2 className="mx-4 px-4 ">
          <span className="font-bold">Product name: </span>
          {product.title}
        </h2>
        <p className="mx-4 px-4 ">
          <span className="font-bold">Details:</span> {product.description}
        </p>
        <p className="mx-4 px-4 ">
          <span className="font-bold">Price: </span>
          {product.price}
        </p>
        <p className="mx-4 px-4 ">
          <span className="font-bold">Discount Percentage: </span>
          {product.discountPercentage}
        </p>
        <p className="mx-4 px-4 ">
          <span className="font-bold">Rating: </span>
          {product.rating}
        </p>
        <p className="mx-4 px-4 ">
          <span className="font-bold">Brand:</span> {product.brand}
        </p>
        <p className="mx-4 px-4 ">
          <span className="font-bold">In-Stock: </span>
          {product.stock}
        </p>

        <div className=" flex justify-center pt-4">
          <button
            onClick={handleDeliverBtn}
            className="px-4 py-2  rounded-lg text-white bg-indigo-900 
             hover:bg-rose-700"
          >
            Deliver Item
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-center text-5xl text-indigo-700 mt-6">
          Restock Item
        </h2>
        <form onSubmit={handleRestockBtn}>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Restock Quantity
            </label>
            <input
              ref={restockQuantityRef}
              type="number"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter quantity"
              required
            />
          </div>
          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-indigo-900
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-rose-600 hover:shadow-lg
      focus:bg-rose-600 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-rose-600 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Restock
          </button>
        </form>
      </div>
    </section>
  );
};

export default ItemDetails;

// lg:grid-cols-3  md:grid-cols-2  sm:
// {products.map((product) => (
//   <Item key={product._id} product={product}></Item>
// ))}
