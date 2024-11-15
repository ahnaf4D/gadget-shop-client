import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LoadingPage from "../../pages/LoadingPage";
import useUserData from "../../hooks/useUserData";

const SellerRoute = ({ children }) => {
    const userData = useUserData();
    const { user, loading } = useAuth();

    // Handle the loading state for both authentication and user data
    if (loading || !userData?.role) {
        return <LoadingPage />;
    }

    // Check if the user is a seller
    if (user && userData.role === 'seller') {
        return children;
    }

    // Redirect to the dashboard if not a seller
    return <Navigate to="/dashboard" replace />;
};

export default SellerRoute;
