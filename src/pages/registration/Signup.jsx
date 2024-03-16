import React from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    return (
      <div className="flex justify-center items-center h-screen">
        <div className=" bg-[#ff4c3044] max-w-lg w-full rounded px-8 py-5 mx-3">
          <h2 className="text-center text-2xl font-semibold mb-4">Sign Up</h2>
          <div className="flex flex-col gap-4">
            <input
              className="rounded px-4 py-2 text-lg focus:outline-none"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="rounded px-4 py-2 text-lg focus:outline-none"
              type="text"
              placeholder="Email Address"
            />
            <input
              className="rounded px-4 py-2 text-lg focus:outline-none"
              type="text"
              placeholder="Password"
            />
          </div>
          <button className="w-full bg-[#ff4d30] my-4 rounded text-xl font-semibold text-white py-2">
            SignUp
          </button>
          <div className="flex justify-between">
            <p className="font-semibold">
             Have an account
              <span className="text-[#ff4d30] cursor-pointer" onClick={()=>navigate("/SignIn")}> SignIn</span>
            </p>
            <p className="font-semibold">
              Skip to
              <span className="text-[#ff4d30] cursor-pointer" onClick={()=>navigate("/")}> HomePage</span>
            </p>
          </div>
        </div>
      </div>
    );
  };
  

export default Signup