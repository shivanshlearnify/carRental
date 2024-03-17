import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  return (
    <Layout>
      <div>
        <div className="bg-[#ff4c306c] text-xl font-bold flex flex-col gap-4 mt-[180px] justify-center items-center max-w-7xl mx-auto rounded-3xl py-16">
          <img
            className="flex justify-center w-[120px]"
            src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
            alt=""
          />
          <h2><span>Name :-</span>{user.name}</h2>
          <h2><span>Email :-</span>{user.email}</h2>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
