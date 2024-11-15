import { FaBox, FaCog, FaShoppingCart, FaUser } from "react-icons/fa";
import SideBar from "../components/dashboard/SideBar";
import UserDropDown from "../components/UserDropDown";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserData from "../hooks/useUserData";

const Dashboard = () => {

    return (
        <div className="flex min-h-screen bg-gray-50 overflow">
            <SideBar />
            <div className="flex-grow p-6 sm:p-10 lg:p-16 bg-gray-100 overflow-y-auto">

                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};



export default Dashboard;
