import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext } from "react";
import "./Navbar.css"
import { useState } from "react";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    const menu =
        <>
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-white border-b border-white rounded-none" : ""}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/services" className={({ isActive }) => isActive ? "text-white border-b border-white rounded-none" : ""}>
                    Service
                </NavLink>
            </li>
            <li>
                <NavLink to="/blog" className={({ isActive }) => isActive ? "text-white border-b border-white rounded-none" : ""}>
                    Blog
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact-us" className={({ isActive }) => isActive ? "text-white border-b border-white rounded-none" : ""}>
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink to="/aboutUs" className={({ isActive }) => isActive ? "text-white border-b border-white rounded-none" : ""}>
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink to="/pricing" className={({ isActive }) => isActive ? "text-white border-b border-white rounded-none" : ""}>
                    Pricing
                </NavLink>
            </li>
        </>
    return (
        <div className="navbar text-[#d28d0d] border-b px-20 bg-[#1f2937]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <a className="e text-2xl font-extrabold uppercase text-[#d28d0d]">Royal Rent</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="relative">
                    {user ? (
                        <div className="flex items-center justify-center gap-6" onClick={handleDrawerOpen}>
                            <img title={user.displayName} className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
                            <button className="btn border-0 text-white bg-[#ff6e13] opacity-75 px-4 py-2 font-bold rounded-md flex items-center gap-1" onClick={handleLogOut}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="btn border-0 text-white bg-[#ff6e13] opacity-75 px-4 py-2 font-bold rounded-md flex items-center gap-1">
                                Login
                            </button>
                        </Link>
                    )}
                    {isDrawerOpen && (
                        <div className="drawer drawer-end">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" defaultChecked={isDrawerOpen} />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary" onClick={handleDrawerClose}>
                                    Close drawer
                                </label>
                            </div>
                            <div className="drawer-side z-50">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay" onClick={handleDrawerClose}></label>
                                <ul className="menu p-4 w-80 min-h-full bg-[#d28d0d] text-white">
                                    {/* Sidebar content here */}
                                    <li>
                                        <Link to="/profile">Profile</Link>
                                    </li>
                                    <li>
                                        <a>Sidebar Item 2</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;