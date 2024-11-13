import ProductCard from "../ProductCard";

const FeaturedProducts = () => {
    return (
        <>
            <div className="flex justify-around my-2 gap-6 mx-16 flex-col md:flex-row">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </>
    );
};

export default FeaturedProducts;