import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const SignUp = () => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }
  
  return (
    <>
      <div className="flex justify-between uppercase font-bold bg-[#131921] items-center px-8 w-full">
        <div className="navLogo">
          <Link to="/">
            <img className="w-[110px] invert" src="./amazon.png" alt="" />
          </Link>
        </div>
        <p className="cursor-pointer font-bold text-[#096FC0]" onClick={handleGoBack}>
          <ChevronLeftIcon style={{fontSize: "35px"}}/>
        </p>
      </div>
      <div className="mt-10 text-[#333]">
        <form className="w-[500px] mx-auto container py-10 border p-10 shadow-xl bg-gray-50">
          <label htmlFor="" className="font-extrabold">First Name:</label>
          <input
            className="block w-full pl-4 bg-gray-100 h-9 focus:outline-none"
            type="text"
            name=""
            id=""
          />

          <label htmlFor="" className="font-extrabold">Last Name:</label>
          <input
            className="block w-full pl-4 bg-gray-100 h-9 focus:outline-none"
            type="text"
            name=""
            id=""
          />

          <label htmlFor="" className="font-extrabold">Email:</label>
          <input
            className="block w-full pl-4 bg-gray-100 h-9 focus:outline-none"
            type="email"
            name=""
            id=""
          />

          <label htmlFor="" className="font-extrabold">Password:</label>
          <input
            className="block w-full pl-4 bg-gray-100 h-9 focus:outline-none"
            type="text"
            name=""
            id=""
          />

          <label htmlFor="" className="font-extrabold">Confirm Password:</label>
          <input
            className="block w-full pl-4 bg-gray-100 h-9 focus:outline-none"
            type="text"
            name=""
            id=""
          />

          <button
            className=" bg-[#232F3E] mx-auto text-[#FFF] px-8 py-1 rounded mt-4 h-9 focus:outline-none"
            type="button"
            name=""
            id=""
          >
            Sign Up
          </button>

          <p className="py-7">
            Already have an Account?{" "}
            <Link to="/signin" className="text-[#0970C2]">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
