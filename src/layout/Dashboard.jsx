import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  
  if (isAdminLoading) {
    return <div className="flex justify-center loading-spinner">Loading...</div>;
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#ff6e13]/90 sticky">
          <label htmlFor="my-drawer-2" className=""></label>
          <ul className="menu p-4 w-80 h-full text-black  ">
          {isAdmin ? (
              // Admin content
              <>
                <div className="mx-auto text-center w-3/4 my-10">
                  <img
                    src={user?.photoURL}
                    className="mx-auto rounded-full"
                    alt=""
                  />
                  <h3 className="text-2xl font-bold">{user.displayName}</h3>
                  <p>{user.email}</p>
                  <li>
                    <Link to="/"> Home</Link>
                  </li>
                  <li><Link to="/dashboard/add-product"> <BiAddToQueue></BiAddToQueue> Add Product</Link></li>
                  <li><Link to="/dashboard/all-product"> <BiAddToQueue></BiAddToQueue> All Product</Link></li>
                </div>
              </>
            ) : (
              // Regular user content
              <>
                <div className="mx-auto text-center w-3/4 my-10">
                  <img
                    src={user.photoURL}
                    className="mx-auto rounded-full"
                    alt=""
                  />
                  <h3 className="text-2xl font-bold">{user.displayName}</h3>
                  <p>{user.email}</p>
                </div>
                <li>
                  <Link to="/"> Home</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Dashboard;
