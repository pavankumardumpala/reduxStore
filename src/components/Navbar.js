import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Navbar = () => {
  const item = useSelector((state) => state.cart);
  return (
    <div className="navitems">
      <span>Redux Store</span>

      <Link className="Navlinks" to="/">
        Home
      </Link>

      <Link className="Navlinks" to="/cart">
        Cart
      </Link>

      <span>cart items = {item.length}</span>
    </div>
  );
};

export default Navbar;
