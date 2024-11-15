import { Link } from "react-router-dom";
import {
    FaHome,
    FaShoppingCart,
    FaUser,
    FaBox,
    FaCog,
    FaStore,
    FaChartLine,
    FaUsers,
} from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import logo from '../../assets/logo.png';
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const SideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div
            className={`transition-all px-2 py-2 duration-300 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg min-h-screen ${isCollapsed ? "w-20" : "w-64"
                } flex flex-col relative`}
        >
            <div className="flex items-center justify-center lg:justify-between relative">
                {/* Logo Section (visible only on desktop) */}
                <Link
                    to="/"
                    className="display lg:flex items-center text-sm font-bold transition-all duration-300 lg:ml-8"
                >
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-10 w-auto"
                    />
                    <span className="ml-4">Gadget Shop</span>
                </Link>

                {/* Toggle Button (centered on mobile, right-aligned on desktop) */}
                <button
                    className="focus:outline-none btn btn-circle"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    {isCollapsed ? (
                        <IoMenu className="text-xl" />
                    ) : (
                        <IoMdClose className="h-6 w-6 text-xl" />
                    )}
                </button>
            </div>


            {/* Navigation Links */}
            <nav className="flex-grow mt-6">
                <ul className="space-y-4">
                    {/* Common Links */}
                    <NavItem to="/dashboard" icon={<FaHome />} label="Overview" isCollapsed={isCollapsed} />

                    {/* Customer Links */}
                    <div className="divider my-2" />
                    <NavItem to="/dashboard/orders" icon={<FaBox />} label="Orders" isCollapsed={isCollapsed} />
                    <NavItem to="/dashboard/cart" icon={<FaShoppingCart />} label="Cart" isCollapsed={isCollapsed} />

                    {/* Seller Links */}
                    <div className="divider my-2" />
                    <NavItem to="/dashboard/products" icon={<FaStore />} label="My Products" isCollapsed={isCollapsed} />
                    <NavItem to="/dashboard/sales" icon={<FaChartLine />} label="Sales" isCollapsed={isCollapsed} />
                    <NavItem to="/dashboard/add-product" icon={<FaBox />} label="Add Product" isCollapsed={isCollapsed} />

                    {/* Admin Links */}
                    <div className="divider my-2" />
                    <NavItem to="/dashboard/users" icon={<FaUsers />} label="Manage Users" isCollapsed={isCollapsed} />
                    <NavItem to="/dashboard/settings" icon={<FaCog />} label="Settings" isCollapsed={isCollapsed} />

                    {/* Profile Link */}
                    <div className="divider my-2" />
                    <NavItem to="/dashboard/profile" icon={<FaUser />} label="Profile" isCollapsed={isCollapsed} />
                </ul>
            </nav>
        </div>
    );
};

const NavItem = ({ to, icon, label, isCollapsed }) => (
    <li>
        <Link
            to={to}
            className="flex items-center px-6 py-3 text-lg hover:bg-blue-600 rounded-lg transition-colors duration-200"
        >
            {icon}
            <span className={`ml-4 ${isCollapsed ? "hidden" : "inline"}`}>{label}</span>
        </Link>
    </li>
);

export default SideBar;
