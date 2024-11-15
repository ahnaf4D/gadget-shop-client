import { Link } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const { loginUser } = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const password = watch("password");
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            await loginUser(data.email, data.password);
            toast.success("Login Successful!");
            navigate('/');
        }
        catch (err) {
            toast.error(err.message);
        }
    }
    return (
        <div>
            <div className="py-16">
                <div className="flex bg-white  rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <div
                        className="hidden lg:block lg:w-1/2 bg-cover"
                        style={{
                            backgroundImage:
                                'url("https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1731526970~exp=1731530570~hmac=7f00d1766d40c0a434db517b034b9d1d566d9a22dc2ee77e3b9e977b8fb09d3f&w=740")',
                        }}
                    ></div>
                    <div className="w-full p-8 lg:w-1/2">
                        <h2 className="text-2xl font-semibold text-gray-700 text-center">
                            Gadget Shop
                        </h2>
                        <p className="text-xl text-gray-600 text-center">Log in to Your Account</p>
                        <GoogleLogin></GoogleLogin>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 lg:w-1/4" />
                            <a href="#" className="text-xs text-center text-gray-500 uppercase">
                                or log in with email
                            </a>
                            <span className="border-b w-1/5 lg:w-1/4" />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2">
                                    Email Address
                                </label>
                                <input
                                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                    type="email"
                                    placeholder="example@gadgetshop.com"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                                            message: "Enter a valid email address",
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs italic mt-2">{errors.email.message}</p>
                                )}
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
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 8,
                                            message: "Password must be at least 8 characters long",
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                            message: "Password must contain letters and numbers",
                                        },
                                    })}
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-xs italic mt-2">{errors.password.message}</p>
                                )}
                            </div>
                            <div className="mt-8">
                                <button className="bg-blue-600 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-500 transition-colors">
                                    Log In
                                </button>
                            </div>
                        </form>
                        <div className="mt-6 flex items-center justify-center">
                            <span className="border-t w-1/4 md:w-1/6"></span>
                            <Link to='/create-account'>
                                <a className="mx-4 text-gray-700 text-sm font-medium hover:underline">
                                    Don't have an account? Sign up
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

export default Login;
