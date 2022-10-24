import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Item from "../../Home/Item/Item";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myitem, setMyitem] = useState([]);
  const email = user.email;
  console.log(email);
  const url = `https://floating-coast-12794.herokuapp.com/products?email=${email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyitem(data));
  }, [user]);
  return (
    <div>
      <h2>this is my items: {myitem.length}</h2>
      <div className="grid gap-8 lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-1 ">
        {myitem.map((item) => (
          <Item key={item._id} product={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
