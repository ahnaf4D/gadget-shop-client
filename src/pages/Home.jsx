import Banner from "../components/home/Banner";
import Faq from "../components/home/Faq";
import FeaturedProducts from "../components/home/FeaturedProducts";
import UserReview from "../components/home/UserReview";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="text-center mx-auto mt-8">
                <h1 className="text-4xl font-semibold">Featured Products</h1>
                <p className="mt-2 text-gray-600 max-w-md mx-auto text-lg">
                    Discover our handpicked selection of the latest and most popular gadgets. Find the perfect tech to match your lifestyle!
                </p>
            </div>

            <FeaturedProducts></FeaturedProducts>
            <div className="text-center mx-auto my-6">
                <h1 className="text-4xl font-semibold">What Our Clients Say</h1>
                <p className="mt-2 text-gray-600 max-w-md mx-auto text-lg">
                    Hear from our customers about their experiences with our products and services. See why we’re trusted by tech enthusiasts everywhere!
                </p>
            </div>
            <UserReview></UserReview>
            <div className="text-center mx-auto my-6">
                <h1 className="text-4xl font-semibold">Frequently Asked Questions</h1>
                <p className="mt-2 text-gray-600 max-w-md mx-auto text-lg">
                    Find answers to the most common questions about our products, services, and policies. Get the information you need, fast!
                </p>
            </div>


            <Faq></Faq>
        </div>
    );
};

export default Home;