import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { remove } from "../components/CartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (prodId) => {
    dispatch(remove(prodId));
  };
  return (
    <div>
      <h1>cart</h1>
      <div className="cartWrapper">
        <div>
          {products.map((prod) => (
            <div className="cartCard" key={prod.id}>
              <img className="cartimg" alt="" src={prod.image} />
              <h4>{prod.title}</h4>
              <h5>{prod.price}$</h5>
              <button className="btn" onClick={() => handleRemove(prod.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
