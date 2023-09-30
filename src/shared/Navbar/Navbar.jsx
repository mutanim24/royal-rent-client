import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext } from "react";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch((error) => {
                toast.error(error.message);
            });
    };
    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>Vehicles</Link></li>
        <li><Link>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact-us'>Contact</Link></li>
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
                {/* <Link to='/login'>
                    <a className="btn bg-[#d28d0d] text-white hover:text-[#d28d0d]">Login</a>
                </Link> */}

                <div>
                    {user ? (
                        <div className="flex items-center justify-center gap-6">
                            <img
                                title={user.displayName}
                                className="w-12 h-12 rounded-full"
                                src={user.photoURL}
                                alt=""
                            />
                            <button
                                onClick={handleLogOut}
                                className="btn border-0 text-white bg-[#ff6e13] opacity-75 px-4 py-2 font-bold rounded-md flex items-center gap-1"
                            >
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
                </div>
            </div>
        </div>
    );
};

export default Navbar;