import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useUserData from "../../../hooks/useUserData";

const MyProducts = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const userData = useUserData();
    useEffect(() => {
        // Fetch products for the seller
        const fetchProducts = async () => {
            // Replace with your API call
            const token = localStorage.getItem('access-token');
            const response = await axios.get(
                `${import.meta.env.VITE_SERVER_URL}/products?email=${userData.email}`, {
                headers: {
                    "Authorization": `${token}`,
                },
            }
            );
            setProducts(response.data);
        };
        fetchProducts();
    }, [userData.email]);

    // Handle search and filter
    const filteredProducts = products.filter(product => {
        return (
            product.title.toLowerCase().includes(search.toLowerCase()) &&
            (category ? product.category === category : true) &&
            (minPrice ? product.price >= minPrice : true) &&
            (maxPrice ? product.price <= maxPrice : true)
        );
    });

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">My Products</h1>
                    <Link to="/dashboard/add-products" className="btn btn-primary">
                        Add New Product
                    </Link>
                </div>

                {/* Search and Filters */}
                <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <input
                            type="text"
                            placeholder="Search by title..."
                            className="input input-bordered w-full"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <select
                            className="select select-bordered w-full"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">All Categories</option>
                            <option value="smartphones">Smartphones</option>
                            <option value="laptops">Laptops</option>
                            <option value="accessories">Accessories</option>
                            <option value="gaming">Gaming</option>
                        </select>
                        <input
                            type="number"
                            placeholder="Min Price"
                            className="input input-bordered w-full"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Max Price"
                            className="input input-bordered w-full"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                    </div>
                </div>

                {/* Product Table */}
                <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Category</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <tr key={product.id}>
                                        <td>
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-16 h-16 rounded-lg object-cover"
                                            />
                                        </td>
                                        <td>{product.title}</td>
                                        <td>{product.brand}</td>
                                        <td>${product.price}</td>
                                        <td>{product.stock}</td>
                                        <td>{product.category}</td>
                                        <td>
                                            <div className="flex gap-2">
                                                <Link
                                                    to={`/seller/edit-product/${product.id}`}
                                                    className="btn btn-sm btn-outline btn-warning"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    className="btn btn-sm btn-outline btn-error"
                                                    onClick={() => {
                                                        // Delete product logic here
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                                <Link
                                                    to={`/product/${product.id}`}
                                                    className="btn btn-sm btn-outline btn-info"
                                                >
                                                    View
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center">
                                        No products found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;
