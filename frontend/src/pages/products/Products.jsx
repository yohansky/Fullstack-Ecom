import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { Button, Table, TableBody, TableCell, TableHead, TableRow, ToggleButtonGroup } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/products");

      setProducts(data);
    })();
  }, []);

  const del = async (id) => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`/product/${id}`);

      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <Layout>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Button href={"/products/create"} variant="contained" color="primary" startIcon={<AddIcon />}>
          Tambah
        </Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell scope="col">#</TableCell>
            <TableCell scope="col">Nama Product</TableCell>
            <TableCell scope="col">Harga</TableCell>
            <TableCell scope="col">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <ToggleButtonGroup>
                    <Button variant="contained" color="success" href={`/products/${product.id}/edit`}>
                      Edit
                    </Button>
                    <Button variant="contained" color="error" onClick={() => del(product.id)}>
                      Delete
                    </Button>
                  </ToggleButtonGroup>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Layout>
  );
};

export default Products;
