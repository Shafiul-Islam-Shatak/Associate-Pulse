import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Banner = () => {
    return (
        <div>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 5000, 
                    disableOnInteraction: false, 
                }}
            >
                <SwiperSlide>
                    {/* 1st caro */}
                    <div>
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/office-table-with-business-tools-desktop-glass-work-paper_28629-275.jpg?w=996)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Streamline Your Workflow</h1>
                                    <p className="mb-5">Effortlessly manage tasks, teams, and projects with our all-in-one platform.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* 2nd  */}
                    <div>
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/senior-manager-is-sitting-boardroom-with-multiracial-colleagues-discussing-project_232070-16425.jpg?w=900)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Boost Productivity Now</h1>
                                    <p className="mb-5">Optimize team efficiency and project management with our intuitive tools.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* 3rd */}
                    <div>
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/successful-happy-business-team_53876-20936.jpg?t=st=1717383998~exp=1717387598~hmac=4ade6397a2f031d8b9667bb7b0f04fff955dc70433a0b2213e40dd8e6edcf2c7&w=900)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Achieve Success Together</h1>
                                    <p className="mb-5">Collaborate seamlessly and drive your team success with our platform.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;