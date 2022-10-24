import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  const navigate = useNavigate();
  const gotoManageItems = () => {
    navigate("/manageinventory");
  };
  const gotoAddItems = () => {
    navigate("/add-New-Item");
  };
  return (
    <div>
      <nav className=" flex bg-indigo-900 p-8 text-white">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/inventory" className="mr-4">
          Inventory
        </Link>
        <Link to="/blogs" className="mr-4">
          Blogs
        </Link>
        {user ? (
          <div className="">
            <Link to="/manageinventory" className="mr-4">
              Manage Inventory
            </Link>
            <Link to="/add-New-Item" className="mr-4">
              Add Item
            </Link>
            <Link to="/my-items" className="mr-4">
              My Items
            </Link>
          </div>
        ) : (
          <></>
        )}
        <form action="" className="inline">
          <input
            className="w-96 rounded-lg border-2 hover:border-rose-300 text-indigo-900 
            p-2"
            type="search"
            name="search"
            id=""
            placeholder="Search here what you want"
          />
          <button className="px-4 py-2 ml-4 bg-rose-500 rounded-lg">
            Search
          </button>
        </form>
        {user ? (
          <button
            onClick={handleSignOut}
            className=" absolute top-0 right-0 mt-8 mr-2  px-4 py-2 ml-4 bg-rose-500 rounded-lg"
          >
            SignOut
          </button>
        ) : (
          <Link to="login" className="absolute pt-8 top-0 right-0 h-16 w-16">
            Login
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
