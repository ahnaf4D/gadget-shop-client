import React from 'react';
import { FaBox, FaCog, FaShoppingCart, FaUser, FaChartLine, FaUsers, FaHeart, FaClipboardList } from 'react-icons/fa';
import useUserData from '../../hooks/useUserData';
import UserDropDown from '../../components/UserDropDown';
import useAuth from '../../hooks/useAuth';

const StatsCard = ({ title, value, icon }) => (
    <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-xl">
        {icon}
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{value}</p>
    </div>
);

const Overview = () => {
    const userData = useUserData();
    const { user } = useAuth();
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700">
                    Welcome back! {user.displayName || "User"}
                </h1>
                <UserDropDown />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* For Admin */}
                {/* <StatsCard
                    title="Total Users"
                    value="1000"
                    icon={<FaUsers className="text-green-500 text-4xl mb-4" />}
                />
                <StatsCard
                    title="Active Sellers"
                    value="300"
                    icon={<FaUsers className="text-blue-500 text-4xl mb-4" />}
                />
                <StatsCard
                    title="Revenue"
                    value="$12,000"
                    icon={<FaChartLine className="text-yellow-500 text-4xl mb-4" />}
                /> */}
                {/* For Sellers */}
                {userData?.role == "seller" && <>
                    <StatsCard
                        title="Total Products"
                        value="100"
                        icon={<FaBox className="text-green-500 text-4xl mb-4" />}
                    />
                    <StatsCard
                        title="Total Sales"
                        value="$50,000"
                        icon={<FaShoppingCart className="text-blue-500 text-4xl mb-4" />}
                    />
                    <StatsCard
                        title="Revenue"
                        value="$12,000"
                        icon={<FaChartLine className="text-yellow-500 text-4xl mb-4" />}
                    />
                </>}

                {/*  Customers */}
                {/* <StatsCard
                    title="Wishlist"
                    value="5 Items"
                    icon={<FaHeart className="text-red-500 text-4xl mb-4" />}
                />
                <StatsCard
                    title="Recent Purchases"
                    value="3 Items"
                    icon={<FaShoppingCart className="text-red-500 text-4xl mb-4" />}
                /> */}
            </div>

            {/* Graphs or Charts Section */}
            {/* <div className="mt-8">
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Sales Overview (Graph)</h3>
                    <div className="bg-gray-200 h-40 rounded-lg"></div>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Product Performance (Graph)</h3>
                    <div className="bg-gray-200 h-40 rounded-lg"></div>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Purchase History (Graph)</h3>
                    <div className="bg-gray-200 h-40 rounded-lg"></div>
                </div>
            </div> */}
        </div >
    );
};

export default Overview;
