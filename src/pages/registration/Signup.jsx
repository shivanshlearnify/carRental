import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../../components/loader/Loader";

const Signup = () => {
  const navigate = useNavigate();

  const { loading, setLoading } = useContext(MyContext);

  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const userSignupFunction = async () => {
    if (
      userSignup.name === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      toast.error("All Feilds Are Required");
    }
    setLoading(true);
    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );

      //create user
      const user = {
        name: userSignup.name,
        email: userSignup.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };
      // create user Refrence
      const userRefrence = collection(fireDB, "user");

      // Add User Detail
      addDoc(userRefrence, user);

      setUserSignup({
        name: "",
        email: "",
        password: "",
      });

      toast.success("Signup Sucessfully");
      toast.success("Now You Can Login ");

      setLoading(false);
      navigate("/SignIn");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        toast.error("Invalid email. Please provide a valid email address.");
      } else if (error.code === "auth/weak-password") {
        toast.error("Weak Password");
      } else if (error.code === "auth/email-already-in-use") {
        toast.error("Email Already In Use");
      } else {
        toast.error(error.code);
      }
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 to-pink-500">
      {loading && <Loader />}
      <div className="bg-white max-w-lg w-full rounded-lg px-8 py-6 mx-3 shadow-md">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
          Sign Up
        </h2>
        <div className="flex flex-col gap-6">
          <input
            className="rounded-lg px-4 py-3 text-lg focus:outline-none bg-gray-100 border border-gray-300"
            type="text"
            placeholder="Full Name"
            value={userSignup.name}
            onChange={(e) =>
              setUserSignup({ ...userSignup, name: e.target.value })
            }
          />
          <input
            className="rounded-lg px-4 py-3 text-lg focus:outline-none bg-gray-100 border border-gray-300"
            type="email"
            placeholder="Email Address"
            value={userSignup.email}
            onChange={(e) =>
              setUserSignup({ ...userSignup, email: e.target.value })
            }
          />
          <input
            className="rounded-lg px-4 py-3 text-lg focus:outline-none bg-gray-100 border border-gray-300"
            type="password"
            placeholder="Password"
            value={userSignup.password}
            onChange={(e) =>
              setUserSignup({ ...userSignup, password: e.target.value })
            }
          />
        </div>
        <button
          onClick={userSignupFunction}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg text-xl font-semibold transition duration-300 ease-in-out my-4"
        >
          Sign Up
        </button>
        <div className="flex justify-between">
          <p className="font-semibold text-gray-700">
            Already have an account?{" "}
            <span
              className="text-pink-500 cursor-pointer"
              onClick={() => navigate("/SignIn")}
            >
              Sign In
            </span>
          </p>
          <p className="font-semibold text-gray-700">
            Skip to{" "}
            <span
              className="text-pink-500 cursor-pointer"
              onClick={() => navigate("/")}
            >
              HomePage
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
