import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import toast from "react-hot-toast";

const SignIn = () => {
  const [toastShown, setToastShown] = useState(false);

  useEffect(() => {
    const handleSubmit = (e) => {
      e.preventDefault();

      const email = document.getElementById("emailInput").value;
      const password = document.getElementById("passwordInput").value;

      if (email === "asadklm30@gmail.com" && password === "111") {
        if (!toastShown) {
          toast.success("Login Successfully!");
          setToastShown(true);
          setTimeout(() => {
            location.assign("/");
          }, 2000);
        }
      } else {
        if (!toastShown) {
          toast.error("Invalid Credentials");
          setToastShown(true);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      }
    };

    const formElement = document.getElementById("signinForm");
    formElement.addEventListener("submit", handleSubmit);

    return () => {
      formElement.removeEventListener("submit", handleSubmit);
    };
  }, [toastShown]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="flex justify-between uppercase font-bold bg-[#131921] items-center px-8">
        <div className="navLogo">
          <Link to="/">
            <img className="w-[110px] invert" src="./amazon.png" alt="" />
          </Link>
        </div>
        <p
          className="cursor-pointer font-bold text-[#096FC0]"
          onClick={handleGoBack}
        >
          <ChevronLeftIcon style={{fontSize: "35px"}}/>
        </p>
      </div>
      <div className="mt-20 text-[#333]">
        <form
          className="w-[500px] mx-auto container py-20 border p-10 shadow-xl bg-gray-50"
          id="signinForm"
        >
          <label htmlFor="" className="font-extrabold">Email:</label>
          <input
            className="block w-full pl-4 bg-gray-100 text-md h-9 focus:outline-none"
            type="text"
            name=""
            id="emailInput"
            required
          />

          <label htmlFor="" className="font-extrabold">Password:</label>
          <input
            className="block w-full pl-4 bg-gray-100 h-9 text-md focus:outline-none"
            type="text"
            name=""
            id="passwordInput"
            required
          />

          <button
            className=" bg-[#232F3E] mx-auto text-[#FFF] px-8 py-1 rounded mt-4 h-9 focus:outline-none"
            type="submit"
            name=""
            id=""
          >
            Sign In
          </button>

          <p className="py-7">
            Don't have an Account?{" "}
            <Link to="/signup" className="text-[#0970C2]">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
