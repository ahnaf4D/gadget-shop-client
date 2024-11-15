import { useForm } from 'react-hook-form';
import useUserData from '../../../hooks/useUserData';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddProducts = () => {
    const userData = useUserData();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log("Product Data:", data);

        const productsData = {
            brand: data.brand,
            category: data.category,
            description: data.description,
            email: userData?.email,
            image: data.image, // Assuming this is a file or URL
            price: data.price,
            stock: data.stock,
            title: data.title,
        };
        const token = localStorage.getItem('access-token');
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_SERVER_URL}/add-products`,
                productsData,
                {
                    headers: {
                        "Authorization": `${token}`,
                    },
                }
            );
            if (response.data.insertedId) {
                toast.success("Products added Successfully!")
                reset();
            }
        } catch (error) {
            toast.success(error)
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Add a New Product
                </h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {/* Product Title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter product title"
                            {...register('title', { required: 'Product title is required' })}
                            className={`input input-bordered w-full ${errors.title ? 'input-error' : ''
                                }`}
                        />
                        {errors.title && (
                            <span className="text-red-500 text-sm mt-1">
                                {errors.title.message}
                            </span>
                        )}
                    </div>

                    {/* Brand */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter brand name"
                            {...register('brand', { required: 'Brand is required' })}
                            className={`input input-bordered w-full ${errors.brand ? 'input-error' : ''
                                }`}
                        />
                        {errors.brand && (
                            <span className="text-red-500 text-sm mt-1">
                                {errors.brand.message}
                            </span>
                        )}
                    </div>

                    {/* Price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price (USD)</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter price"
                            {...register('price', {
                                required: 'Price is required',
                                valueAsNumber: true,
                                min: { value: 1, message: 'Price must be at least $1' },
                            })}
                            className={`input input-bordered w-full ${errors.price ? 'input-error' : ''
                                }`}
                        />
                        {errors.price && (
                            <span className="text-red-500 text-sm mt-1">
                                {errors.price.message}
                            </span>
                        )}
                    </div>

                    {/* Stock */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Stock Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter stock quantity"
                            {...register('stock', {
                                required: 'Stock quantity is required',
                                valueAsNumber: true,
                            })}
                            className={`input input-bordered w-full ${errors.stock ? 'input-error' : ''
                                }`}
                        />
                        {errors.stock && (
                            <span className="text-red-500 text-sm mt-1">
                                {errors.stock.message}
                            </span>
                        )}
                    </div>

                    {/* Seller Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input
                            type="email"
                            {...register('email')}
                            defaultValue={userData?.email}
                            className="input input-bordered w-full"
                            readOnly
                        />
                    </div>

                    {/* Category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select
                            {...register('category', { required: 'Category is required' })}
                            className={`select select-bordered w-full ${errors.category ? 'input-error' : ''
                                }`}
                        >
                            <option value="">Select category</option>
                            <option value="smartphones">Smartphones</option>
                            <option value="laptops">Laptops</option>
                            <option value="accessories">Accessories</option>
                            <option value="gaming">Gaming</option>
                        </select>
                        {errors.category && (
                            <span className="text-red-500 text-sm mt-1">
                                {errors.category.message}
                            </span>
                        )}
                    </div>

                    {/* Product Image Link */}
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text">Product Image Link</span>
                        </label>
                        <input
                            type="url"
                            placeholder="Enter image URL"
                            {...register('image', { required: 'Image URL is required' })}
                            className={`input input-bordered w-full ${errors.image ? 'input-error' : ''
                                }`}
                        />
                        {errors.image && (
                            <span className="text-red-500 text-sm mt-1">
                                {errors.image.message}
                            </span>
                        )}
                    </div>

                    {/* Description */}
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            placeholder="Enter product description"
                            {...register('description', {
                                required: 'Description is required',
                            })}
                            className={`textarea textarea-bordered w-full ${errors.description ? 'textarea-error' : ''
                                }`}
                            rows="4"
                        ></textarea>
                        {errors.description && (
                            <span className="text-red-500 text-sm mt-1">
                                {errors.description.message}
                            </span>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 flex justify-center">
                        <button type="submit" className="btn btn-primary w-full md:w-1/3">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;
