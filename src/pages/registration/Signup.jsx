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
    <div className="flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className=" bg-[#ff4c3044] max-w-lg w-full rounded px-8 py-5 mx-3">
        <h2 className="text-center text-2xl font-semibold mb-4">Sign Up</h2>
        <div className="flex flex-col gap-4">
          <input
            className="rounded px-4 py-2 text-lg focus:outline-none"
            type="text"
            placeholder="Full Name"
            value={userSignup.name}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                name: e.target.value,
              });
            }}
          />
          <input
            className="rounded px-4 py-2 text-lg focus:outline-none"
            type="text"
            placeholder="Email Address"
            value={userSignup.email}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                email: e.target.value,
              });
            }}
          />
          <input
            className="rounded px-4 py-2 text-lg focus:outline-none"
            type="text"
            placeholder="Password"
            value={userSignup.password}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                password: e.target.value,
              });
            }}
          />
        </div>
        <button
          onClick={userSignupFunction}
          className="w-full bg-[#ff4d30] my-4 rounded text-xl font-semibold text-white py-2"
        >
          SignUp
        </button>
        <div className="flex justify-between">
          <p className="font-semibold">
            Have an account
            <span
              className="text-[#ff4d30] cursor-pointer"
              onClick={() => navigate("/SignIn")}
            >
              {" "}
              SignIn
            </span>
          </p>
          <p className="font-semibold">
            Skip to
            <span
              className="text-[#ff4d30] cursor-pointer"
              onClick={() => navigate("/")}
            >
              {" "}
              HomePage
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
