import SectionTitle from "../../../../Shared Components/SectionTitle";
import ServiceTamplate from "../../Services/ServiceTamplate";

const Achivements = () => {
    return (
        <div  className="mt-20">
            <SectionTitle
                title={'What We Achieved'}
                description={'Be a partner of our all achievements'}
            ></SectionTitle>

            <div  className="w-3/4 mx-auto">
                <ServiceTamplate
                    serviceImg ={'https://img.freepik.com/free-photo/close-up-business-people-hands-together-teamwork-concept_1150-2583.jpg?t=st=1718047855~exp=1718051455~hmac=1836c0ada266a79bf29f9a9a617cd3d7ebf29a1fb45a0465785173464058369d&w=900'}
                    serviceDetails={'In the past two years, We has emerged as the fastest-growing IT company, showcasing exponential expansion in clientele and revenue. Through innovative solutions, strategic partnerships, and agile adaptation, it has carved a niche in the industry, setting new benchmarks for growth and innovation.'}
                    serviceName ={'Most Fastest Growing IT company in last 2 years'}
                    displayFlex={''}
                ></ServiceTamplate>
                <ServiceTamplate
                    serviceImg ={'https://img.freepik.com/free-photo/standard-quality-control-collage_23-2149631015.jpg?t=st=1718048151~exp=1718051751~hmac=2aed8608a03c0c424fd0918db3d54cc86b9e0bcef896901b59bf6f0c02ef4431&w=900'}
                    serviceDetails={'We pride ourselves on offering a diverse range of services, exceeding 20 in total. From innovative solutions in technology to comprehensive consulting expertise, our expansive service portfolio ensures we meet the varied needs of our clients with precision, flexibility, and excellence.'}
                    serviceName ={'We are providing more than 20+ services'}
                    displayFlex={'true'}
                ></ServiceTamplate>
            </div>

        </div>
    );
};

export default Achivements;