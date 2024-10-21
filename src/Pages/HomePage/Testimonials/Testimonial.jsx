import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import TestimonialTample from './TestimonialTample';
import 'swiper/css/pagination';
import SectionTitle from '../../../Shared Components/SectionTitle';

const Testimonial = () => {
    return (
        <div className='w-3/4 md:w-1/2 lg:w-3/4 mx-auto'>
            <SectionTitle
                title='Our Testimonials'
                description='Something About Our Company'

            ></SectionTitle>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000, 
                    disableOnInteraction: false, 
                }}
                breakpoints={{
                    1024: {
                        slidesPerView: 1,
                    },
                    1440: {
                        slidesPerView: 2,
                    },
                    2560: {
                        slidesPerView: 3,
                    }
                }}
            >
                <SwiperSlide>
                    {/* 1st testimonial */}
                    <div>
                        <TestimonialTample
                            review='Associate Pulse delivers innovative digital marketing strategies. Their expertise and tailored solutions have greatly enhanced our online presence. Highly recommended for effective, cutting-edge marketing techniques & content.'
                            name='Fazle Rabbi'
                            image='https://i.ibb.co/j6v2ypf/rabbi.png'
                            designation='Digital Marketer'
                        ></TestimonialTample>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    {/* 2nd testimonial */}
                    <div>
                        <TestimonialTample
                            review='Associate Pulse provides top-notch web development services. Their expertise and attention to detail resulted in a stunning, high-performing website. Highly recommended for exceptional web development solutions.'
                            name='Shafiul Islam'
                            image='https://i.ibb.co/9Y6qpnM/325844808-1868176240208018-7152687021774665946-n.jpg'
                            designation='Web Devloper'
                        ></TestimonialTample>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    {/* 3rd testimonial */}
                    <div>
                        <TestimonialTample
                            review='Associate Pulse delivers outstanding digital marketing solutions. Their expertise has significantly boosted our sales and online presence. Highly recommended for impactful and innovative marketing strategies.'
                            name='Jahidul Islam'
                            image='https://i.ibb.co/vvphWfV/310747857-5400378163413295-811890902554305829-n.jpg'
                            designation='Sales Team Leader'
                        ></TestimonialTample>
                    </div>
                </SwiperSlide>

                <SwiperSlide>

                    {/* 4th testimonial */}
                    <div>
                        <TestimonialTample
                            review='Associate Pulse delivers innovative digital marketing strategies. Their expertise and tailored solutions have greatly enhanced our online presence. Highly recommended for effective, cutting-edge marketing techniques and content.'
                            name='Andrwe Tate'
                            image='https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?t=st=1717412097~exp=1717415697~hmac=34ee1cb1ea0f5c86f0e0ab8c35e298fd7471c52c56ed4bc616f3322def8f4949&w=900'
                            designation='Content Creator'
                        ></TestimonialTample>
                    </div>

                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial;