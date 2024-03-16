import React from 'react'
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";

const UserDashboard = () => {
  return (
    <Layout>
    <div className="h-[650px] flex flex-col items-center justify-center text-2xl font-semibold text-center px-4 gap-4">
      <h1>Stay! Tuned Dashboard coming Soon</h1>
      <p>Oops! It looks like the page you are looking for does not exist.</p>
      <p>
        You can go back to the{" "}
        <Link to="/" className="text-[#ff4d30]">
          homepage
        </Link>{" "}
        or navigate to other sections using the navigation menu.
      </p>
    </div>
  </Layout>
  )
}

export default UserDashboard