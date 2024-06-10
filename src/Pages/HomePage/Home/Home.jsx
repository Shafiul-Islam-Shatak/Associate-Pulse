import Banner from '../Banner/Banner'
import Services from '../Services/Services';
import Testimonial from '../Testimonials/Testimonial';
import OurPrograms from './OurCulture/OurPrograms';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Testimonial></Testimonial>
            <OurPrograms></OurPrograms>
        </div>
    );
};

export default Home;