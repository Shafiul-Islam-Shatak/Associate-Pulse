import SectionTitle from "../../../Shared Components/SectionTitle";
import ServiceTamplate from "./ServiceTamplate";

const Services = () => {
    return (
        <div className="w-3/4 mx-auto dark:text-black">
            <SectionTitle
            description = 'Take our services as you need'
            title = 'Our Services'
            >
                
            </SectionTitle>
            {/* Digital Marketing service */}
            <ServiceTamplate
            serviceName = 'Digital Marketing'
            serviceDetails = 'Elevate your brand with our comprehensive digital marketing services. From SEO and social media to PPC and content creation, we drive traffic, increase engagement, and boost conversions for your business'
            serviceImg = 'https://img.freepik.com/premium-photo/digital-marketing-online-marketing-internet-marketing-concept_593195-1497.jpg?w=900'
            ></ServiceTamplate>

            {/* Digital Marketing service */}
            <ServiceTamplate
            displayFlex = 'reverse'
            serviceName = 'Customer Support'
            serviceDetails = 'Experience exceptional customer support with our 24/7 service. Our dedicated team ensures timely, effective solutions for your needs, enhancing satisfaction and fostering strong client relationships'
            serviceImg = 'https://img.freepik.com/premium-photo/side-view-line-call-centre-employees-are-smiling_85574-2755.jpg?w=900'
            ></ServiceTamplate>

            {/* Digital Marketing service */}
            <ServiceTamplate
            serviceName = 'Web Development'
            serviceDetails = 'Transform your online presence with our Web Development & Design services. We create responsive, user-friendly websites that captivate audiences, enhance engagement, and drive business growth'
            serviceImg = 'https://img.freepik.com/premium-photo/developing-programming-coding-technologies-with-website-design-virtual-diagram_103164-375.jpg?w=900'
            ></ServiceTamplate>
        </div>
    );
};

export default Services;