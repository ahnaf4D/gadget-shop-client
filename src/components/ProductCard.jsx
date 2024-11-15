const ProductCard = () => {
    return (
        <div className="mx-auto my-9  transform cursor-pointer overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
                className=" w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Product Image"
            />
            <div className="p-4">
                <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                    Product Name
                </h2>
                <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                    Product description goes here.
                </p>
                <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                        $20.00
                    </p>
                    <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                        $25.00
                    </p>
                    <p className="ml-auto text-base font-medium text-green-500">20% off</p>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;