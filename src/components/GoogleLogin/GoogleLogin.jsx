import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const GoogleLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();
    const onSubmit = async () => {
        try {
            await googleLogin();
            toast.success("Login Successful with Google");
            navigate('/');
        }
        catch (err) {
            toast.error(err.message);
        }
    }
    return (
        <div>
            <button
                onClick={onSubmit}
                className="flex items-center justify-center mt-4 text-gray-700 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors mx-auto"
            >
                <div className="px-4 py-3">
                    <FaGoogle className="h-6 w-6" />
                </div>
                <h1 className="px-4 py-3 w-5/6 text-center font-bold">
                    Sign in with Google
                </h1>
            </button>
        </div>
    );
};

export default GoogleLogin;