import React, { useEffect, useState } from "react";
// import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavMenu(false)
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header>
        <nav className="bg-[#131921] text-[#E3E6E6] flex justify-between items-center px-8">
          <div className="left">
            <div className="navLogo">
              <Link to="/">
                <img className="w-[110px] invert" src="./amazon.png" alt="" />
              </Link>
            </div>
          </div>

          <div className="hidden middle md:flex">
            <input
              className="w-[350px] h-[38px] text-[#333] focus:outline-none pl-4 text-[#14px]"
              type="text"
              name=""
              id=""
              placeholder="Search Your Products"
            />
            <div className="search_icon bg-[#febd69] flex justify-center items-center w-[40px] h-[38px]">
              <SearchIcon className="rounded cursor-pointer" />
            </div>
          </div>

          <div className="items-center hidden space-x-4 right md:flex">
              <div className="signin_btn">
                <Link to="/signin">Sign in</Link>
              </div>
            <div
              className="space-x-3 cart_btn"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <Badge badgeContent={1} color="error" className="cursor-pointer">
                <ShoppingCartIcon id="cartIcon" />
              </Badge>
              <span>
                <Link>Cart</Link>
              </span>
            </div>
            <Avatar className="cursor-pointer avatar" />
          </div>

          <div className="block md:hidden" onClick={() => setNavMenu(!navMenu)}>
            <MenuIcon />
          </div>
        </nav>

        <div
          className={`md:hidden ${
            navMenu ? "flex" : "hidden"
          } mobile-nav-menu bg-[#131921] text-[#FFF] flex-col items-center p-10 space-y-6`}
        >
          <div className="flex middle">
            <input
              className="w-[250px] h-[38px] focus:outline-none pl-10 text-[#14px]"
              type="text"
              name=""
              id=""
              placeholder="Search Your Products"
            />
            <div className="search_icon bg-[#febd69] flex justify-center items-center w-[40px] h-[38px]">
              <SearchIcon className="rounded cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center space-x-4 right">
            <div className="signin_btn">
              <Link to="signin">Sign in</Link>
            </div>

            <div
              className="space-x-3 cart_btn"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon id="cartIcon" />
              </Badge>
              <span>Cart</span>
            </div>
            <Avatar className="avatar" />
          </div>
        </div>

        {/* My Cart */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#FFF] shadow-lg transform ${
            cartOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex items-center justify-between p-4 border-b text-[#333]">
            <h2 className="text-xl font-bold uppercase">Your Cart</h2>
            <CloseIcon
              className="cursor-pointer hover:text-black"
              onClick={() => setCartOpen(!cartOpen)}
            />
          </div>

          <div className="p-4">
            <p className="text-red-400">Empty Cart</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
