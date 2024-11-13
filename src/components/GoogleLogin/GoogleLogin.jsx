import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
    return (
        <div>
            <a
                href="#"
                className="flex items-center justify-center mt-4 text-gray-700 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors"
            >
                <div className="px-4 py-3">
                    <FaGoogle className="h-6 w-6" />
                </div>
                <h1 className="px-4 py-3 w-5/6 text-center font-bold">
                    Sign in with Google
                </h1>
            </a>
        </div>
    );
};

export default GoogleLogin;