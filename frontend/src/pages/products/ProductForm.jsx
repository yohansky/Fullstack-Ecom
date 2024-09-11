import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { Button, TextField } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ProductForm = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setprice] = useState(0);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (id) {
      (async () => {
        const { data } = await axios.get(`product/${id}`);

        setName(data.name);
        setprice(data.price);
      })();
    }
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      price: parseInt(price),
    };

    if (id) {
      await axios.put(`product/${id}`, data);
    } else {
      await axios.post("products", data);
    }

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={"/products"} />;
  }

  return (
    <Layout>
      <form onSubmit={submit}>
        <div className="mb-3 mt-3">
          <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3 mt-3">
          <TextField label="Price" value={price} type="number" onChange={(e) => setprice(e.target.value)} />
        </div>
        <Button type="submit" variant="contained" startIcon={<ArrowUpwardIcon />}>
          Submit
        </Button>
      </form>
    </Layout>
  );
};

export default ProductForm;
