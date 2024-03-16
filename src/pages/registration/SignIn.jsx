import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Loader from "../../components/loader/Loader";
import MyContext from "../../context/MyContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";

const SignIn = () => {
  const navigate = useNavigate();

  const { loading, setLoading } = useContext(MyContext);

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const useLoginFunction = async () => {
    if (userLogin.email === "" || userLogin.password === "") {
      toast.error("ALL Feilds Are Required");
    }
    setLoading(true);
    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );
      try {
        const q = query(
          collection(fireDB, "user"),
          where("uid", "==", users?.user?.uid)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            password: "",
          });
          toast.success("Login Successfully");
          setLoading(false);
          if (user.role === "user") {
            navigate("/user-dashboard");
          } else {
            navigate("/admin-dashboard");
          }
        });
        return () => data;
      } catch (error) {
        console.log(error);
        if (error.code === "auth/invalid-email") {
          toast.error("Invalid email. Please provide a valid email address.");
        } else if (error.code === "auth/invalid-credential") {
          toast.error(
            "Invalid email or Password . Please provide a valid email address."
          );
        } else {
          toast.error(
            "An error occurred while signing in. Please try again later."
          );
        }
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (error.code === "auth/invalid-email") {
        toast.error("Invalid email. Please provide a valid email address.");
      } else if (error.code === "auth/invalid-credential") {
        toast.error(
          "Invalid email or Password . Please provide a valid email address."
        );
      } else {
        toast.error(
          "An error occurred while signing in. Please try again later."
        );
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className=" bg-[#ff307544] max-w-lg w-full rounded px-8 py-5 mx-3">
        <h2 className="text-center text-2xl font-semibold mb-4">Login</h2>
        <div className="flex flex-col gap-4">
          <input
            className="rounded px-4 py-2 text-lg focus:outline-none"
            type="text"
            placeholder="Email Address"
            value={userLogin.email}
            onChange={(e) => {
              setUserLogin({ ...userLogin, email: e.target.value });
            }}
          />
          <input
            className="rounded px-4 py-2 text-lg focus:outline-none"
            type="text"
            placeholder="Password"
            value={userLogin.password}
            onChange={(e) => {
              setUserLogin({ ...userLogin, password: e.target.value });
            }}
          />
        </div>
        
        <button
          onClick={useLoginFunction}
          className="w-full bg-[#ff4d30] my-4 rounded text-xl font-semibold text-white py-2"
        >
          Login
        </button>
        <div className="flex justify-between">
          <p className="font-semibold">
            Don't Have an account
            <span
              className="text-[#ff4d30] cursor-pointer"
              onClick={() => navigate("/signUp")}
            >
              {" "}
              Signup
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
        <div className="my-4">
          <h2 className="text-center text-xl font-bold">Login Credentials</h2>
          <div className="flex justify-between mt-4">
            <div className="font-semibold">
              <h2 className="text-center">user Credential</h2>
              <h2>Email <br /> testuser1@gmail.com</h2>
              <h2>Password <br /> test741</h2>
            </div>
            <div className="font-semibold">
              <h2 className="text-center">Admin Credential</h2>
              <h2>Email <br /> testadmin@gmail.com</h2>
              <h2>Password <br /> test741</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
