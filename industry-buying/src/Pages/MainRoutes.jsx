import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartPage } from "../Components/CartFolder/CartPage";
import { Products } from "../Components/ProductDisplay/Products";
import { HomePage } from "./HomePage";
import Login from "./Login";
import Register from "./Register";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/product" element={<Products />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}
