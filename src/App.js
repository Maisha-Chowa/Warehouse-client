import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home/Home";
import Inventoryitems from "./Home/Inventoryitems/Inventoryitems";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ItemDetails from "./Components/ItemDetails/ItemDetails";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import RequiredAuth from "./Components/RequiredAuth/RequiredAuth";
import ManageInventory from "./Components/ManageInventory/ManageInventory";
import AddNewItem from "./Components/AddNewItem/AddNewItem";
import Notfound from "./Components/Notfound/Notfound";
import MyItems from "./Components/MyItems/MyItems";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route
          path="/inventory"
          element={
            <RequiredAuth>
              <Inventoryitems />
            </RequiredAuth>
          }
        ></Route>

        <Route
          path="/inventory/:id"
          element={
            <RequiredAuth>
              <ItemDetails />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/manageinventory"
          element={
            <RequiredAuth>
              <ManageInventory />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/add-New-Item"
          element={
            <RequiredAuth>
              <AddNewItem />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/my-items"
          element={
            <RequiredAuth>
              <MyItems />
            </RequiredAuth>
          }
        ></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
