import React from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/products/Products";
import ProductForm from "./pages/products/ProductForm";
import { RedirectToProducts } from "./components/RedirectToProducts";

axios.defaults.baseURL = "http://localhost:8081";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} exact Component={RedirectToProducts} />
          <Route path={"/products"} Component={Products} />
          <Route path={"/products/create"} Component={ProductForm} />
          <Route path={"/products/:id/edit"} Component={ProductForm} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
