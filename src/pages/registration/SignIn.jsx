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
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
  {loading && <Loader />}
  <div className="bg-white max-w-lg w-full rounded-lg px-8 py-6 mx-3 sm:px-6 shadow-lg">
    <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">Login</h2>
    <div className="flex flex-col gap-6">
      <input
        className="rounded-lg px-4 py-3 text-lg focus:outline-none bg-gray-100 border border-gray-300"
        type="email"
        placeholder="Email Address"
        value={userLogin.email}
        onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })}
      />
      <input
        className="rounded-lg px-4 py-3 text-lg focus:outline-none bg-gray-100 border border-gray-300"
        type="password"
        placeholder="Password"
        value={userLogin.password}
        onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })}
      />
    </div>
    
    <button
      onClick={useLoginFunction}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-xl font-semibold transition duration-300 ease-in-out my-4"
    >
      Login
    </button>
    <div className="flex justify-between">
      <p className="font-semibold text-gray-700">
        Don't have an account?{" "}
        <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/signUp")}>
          Sign up
        </span>
      </p>
      <p className="font-semibold text-gray-700">
        Skip to{" "}
        <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/")}>
          HomePage
        </span>
      </p>
    </div>
    <div className="my-6">
      <h2 className="text-center text-xl font-bold text-gray-800">Login Credentials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <h2 className="text-lg font-semibold">User Credentials</h2>
          <p>Email - testuser1@gmail.com</p>
          <p>Password - test741</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <h2 className="text-lg font-semibold">Admin Credentials</h2>
          <p>Email - testadmin@gmail.com</p>
          <p>Password - test741</p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default SignIn;
