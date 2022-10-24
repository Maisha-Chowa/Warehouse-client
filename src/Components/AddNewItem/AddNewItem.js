import React, { useRef } from "react";
import useProducts from "../../Hooks/useProducts";

const AddNewItem = () => {
  const [products, setProducts] = useProducts();
  const titleRef = useRef("");
  const emailRef = useRef("");
  const descriptionRef = useRef("");
  const priceRef = useRef("");
  const discountPercentageRef = useRef("");
  const ratingRef = useRef("");
  const stockRef = useRef("");
  const brandRef = useRef("");
  const categoryRef = useRef("");
  const thumbnailRef = useRef("");
  console.log("btn click");

  const handleAddnewItem = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const email = emailRef.current.value;
    console.log(title);
    const description = descriptionRef.current.value;
    const price = priceRef.current.value;
    const discountPercentage = discountPercentageRef.current.value;
    const rating = ratingRef.current.value;
    const stock = stockRef.current.value;
    const brand = brandRef.current.value;
    const category = categoryRef.current.value;
    const thumbnail = thumbnailRef.current.value;
    const newProduct = {
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      email,
    };
    console.log(newProduct);
    fetch("https://floating-coast-12794.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newProductInfo = [...products, data];
        setProducts(newProductInfo);
        alert("New User added Successfully");
        event.target.reset();
      });
  };

  return (
    <section>
      <h2 className="text-center text-5xl text-indigo-700 mt-6 m-8">
        Add New Item to the Inventory
      </h2>
      <div className="flex justify-center">
        <form onSubmit={handleAddnewItem} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Product Title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder=" Product Title"
                ref={titleRef}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Brand
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Brand"
                ref={brandRef}
              />
            </div>
          </div>
          <div class="mb-6">
            <label
              for="large-input"
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Product Description
            </label>
            <input
              type="text"
              id="large-input"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ref={descriptionRef}
            />
          </div>
          <div>
            <label
              for="small-input"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Thumnail Link
            </label>
            <input
              type="text"
              id="small-input"
              className="block w-full p-2 mb-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ref={thumbnailRef}
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Price
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Price"
                ref={priceRef}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                DiscountPercentage
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="DiscountPercentage"
                ref={discountPercentageRef}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                rating
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="rating"
                ref={ratingRef}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mt-4 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Stock
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="Stock"
                ref={stockRef}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mt-4 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Category
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="category"
                ref={categoryRef}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Email address"
              ref={emailRef}
            />
          </div>
          <div className=" flex justify-center pt-4 m-8">
            <button
              //onClick={gotoAddNewItem}
              className="px-4 py-2  rounded-lg text-white bg-indigo-900 
             hover:bg-rose-700"
            >
              Add New Item
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNewItem;
