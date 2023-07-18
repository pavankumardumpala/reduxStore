import { useState } from "react";
import React, { useEffect } from "react";
import { add } from "./CartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(" https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
      console.log(data);
    };
    fetchData();
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <div className="productwrap">
      {product.map((product) => (
        <div className="card" key={product.id}>
          <img className="image" src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
