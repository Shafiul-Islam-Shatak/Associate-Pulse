import Banner from '../Banner/Banner'
import Services from '../Services/Services';
import Testimonial from '../Testimonials/Testimonial';
import Achivements from './Achivements/Achivements';
import OurPrograms from './OurCulture/OurPrograms';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Testimonial></Testimonial>
            <OurPrograms></OurPrograms>
            <Achivements></Achivements>
        </div>
    );
};

export default Home;