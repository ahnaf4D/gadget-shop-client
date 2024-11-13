import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-600">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/products'>Products</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <h2 className="btn btn-ghost text-2xl">
                        <img src={logo} alt="" />
                        Gadget Shop</h2>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/products'>Products</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-4 items-center">
                        <Link to='/create-account'>
                            <button className="btn btn-outline btn-success text-lg px-6 py-2 font-medium hover:bg-secondary hover:text-black transition-colors">
                                Create Account
                            </button>
                        </Link>
                        <Link to='/login'>
                            <button className="btn text-white btn-primary text-lg px-6 py-2 font-medium hover:bg-blue-700 transition-colors">
                                Log In
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Navbar;