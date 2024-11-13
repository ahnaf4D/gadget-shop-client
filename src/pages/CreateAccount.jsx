import { Link } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin/GoogleLogin";

const CreateAccount = () => {
    return (
        <div>
            <div className="py-16">
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <div
                        className="hidden lg:block lg:w-1/2 bg-cover"
                        style={{
                            backgroundImage:
                                'url("https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?t=st=1731527065~exp=1731530665~hmac=5729279dda194e098833cf9c65a7bd8fa084e3a5e0a5caff544aa2c4e1b48adf&w=740")'
                        }}
                    ></div>
                    <div className="w-full p-8 lg:w-1/2">
                        <h2 className="text-2xl font-semibold text-gray-700 text-center">
                            Gadget Shop
                        </h2>
                        <p className="text-xl text-gray-600 text-center">Create Your Account</p>
                        <GoogleLogin></GoogleLogin>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 lg:w-1/4" />
                            <a href="#" className="text-xs text-center text-gray-500 uppercase">
                                or sign up with email
                            </a>
                            <span className="border-b w-1/5 lg:w-1/4" />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Email Address
                            </label>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="email"
                                placeholder="example@gadgetshop.com"
                            />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-semibold mb-2">
                                    Password
                                </label>
                                <a href="#" className="text-xs text-blue-500 hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="password"
                                placeholder="••••••••"
                            />
                        </div>
                        <div className="mt-8">
                            <button className="bg-blue-600 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-500 transition-colors">
                                Sign Up
                            </button>
                        </div>
                        <div className="mt-6 flex items-center justify-center">
                            <span className="border-t w-1/4 md:w-1/6"></span>
                            <Link to='/login'>
                                <a className="mx-4 text-gray-700 text-sm font-medium  hover:underline">
                                    Already have an account? Log in
                                </a>
                            </Link>
                            <span className="border-t w-1/4 md:w-1/6"></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;
