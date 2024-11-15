import { FaBox, FaCog, FaShoppingCart, FaUser } from "react-icons/fa";
import SideBar from "../components/dashboard/SideBar";
import UserDropDown from "../components/UserDropDown";

const Dashboard = () => {
    return (
        <div className="flex min-h-screen bg-gray-50 overflow">
            <SideBar />
            <div className="flex-grow p-6 sm:p-10 lg:p-16 bg-gray-100 overflow-y-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700">
                        Welcome to Your Dashboard
                    </h1>
                    <UserDropDown />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Dashboard Cards */}
                    <DashboardCard
                        icon={<FaBox className="text-blue-500 text-4xl mb-4" />}
                        title="Orders"
                        description="View and manage your orders."
                    />
                    <DashboardCard
                        icon={<FaShoppingCart className="text-blue-500 text-4xl mb-4" />}
                        title="Cart"
                        description="Manage items in your cart."
                    />
                    <DashboardCard
                        icon={<FaUser className="text-blue-500 text-4xl mb-4" />}
                        title="Profile"
                        description="Update your personal details."
                    />
                    <DashboardCard
                        icon={<FaCog className="text-blue-500 text-4xl mb-4" />}
                        title="Settings"
                        description="Configure your account settings."
                    />
                </div>
            </div>
        </div>
    );
};

const DashboardCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-xl">
        {icon}
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default Dashboard;
