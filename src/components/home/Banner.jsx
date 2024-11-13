import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import SlideImageOne from '../../assets/banner-images/image-1.jpg';
import SlideImageTwo from '../../assets/banner-images/image-2.jpg';
import SlideImageThree from '../../assets/banner-images/image-3.jpg';

const Banner = () => {
    return (
        <div className="bg-gray-100 py-12 ">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 justify-center">
                <div className="text-center lg:text-left w-full lg:w-1/2 space-y-4">
                    <h1 className="text-5xl font-bold text-gray-800">Explore the Latest in Tech!</h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Discover cutting-edge gadgets, exclusive deals, and innovative tech products. Gear up with the
                        latest devices to stay ahead in technology!
                    </p>
                    <button className="btn btn-error rounded-full text-lg font-semibold shadow-md hover:bg-blue-600 transition-all">
                        Shop Now
                    </button>
                </div>
                <div className="w-full lg:w-1/4">
                    <Swiper
                        effect="coverflow"
                        grabCursor={true}
                        loop={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 30,
                            stretch: 0,
                            depth: 150,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper w-full"
                    >
                        <SwiperSlide >
                            <img
                                src={SlideImageTwo}
                                className="rounded-lg shadow-lg"
                            />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img
                                src={SlideImageOne}
                                className="rounded-lg shadow-lg"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>


            </div>
        </div>
    );
};

export default Banner;
