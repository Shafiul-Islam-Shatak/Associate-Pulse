import SectionTitle from "../../../../Shared Components/SectionTitle";
import ProgramCards from "./ProgramCards";

const OurPrograms = () => {
    return (
        <div className="w-3/4 mx-auto mt-10">
            <SectionTitle
                title={`Our Cultural Program`}
                description={'Meet our events'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                <div>
                    <ProgramCards
                        img={'https://img.freepik.com/free-photo/rear-view-back-young-asian-hiking-man-standing-riseup-hands-with-happy-peak-rocky-mountain-copy-space_1150-57186.jpg?t=st=1718046304~exp=1718049904~hmac=4dc1f44c5960fbe336bad97753db1d1d6c6179648d4d5cd81caee836b2e99454&w=900'}
                        eventName={ 'Annual Tour'}
                        description={ 'An office tour offers insights into the workspace, showcasing facilities, team dynamics, and company culture, enhancing understanding and engagement.'}
                    ></ProgramCards>
                </div>
                <div>
                    <ProgramCards
                        img={'https://img.freepik.com/free-photo/smiley-people-posing-front-view_23-2149667135.jpg?t=st=1718046487~exp=1718050087~hmac=ab93400cc8e3d2495741305f8f99872c5fa7ebbfe68090fbf4ee8ac8c6279077&w=900'}
                        eventName={ 'Birthday Surprise'}
                        description={ 'A birthday surprise in the office brings joy and team bonding, featuring decorations, treats, and heartfelt celebrations for the birthday person.'}
                    ></ProgramCards>
                </div>
                <div>
                    <ProgramCards
                        img={'https://img.freepik.com/free-photo/business-man-cute-smiling-guy-dark-blue-suit-with-tie-holding-trophy_140725-161932.jpg?t=st=1718046651~exp=1718050251~hmac=2d03825f4f8d4b55f9a61c15d416df3618623f60bf54c8e603110b65c82f6cb2&w=900'}
                        eventName={ 'Best Performance Award'}
                        description={ 'The Best Performance Award recognizes outstanding achievements and exceptional contributions, motivating employees and fostering a culture of excellence and dedication.'}
                    ></ProgramCards>
                </div>
                <div>
                    <ProgramCards
                        img={'https://img.freepik.com/free-photo/healthy-eating-food-lifestyle-organic-wellness-graphic_53876-121392.jpg?t=st=1718046938~exp=1718050538~hmac=9025f7077bcc59de5a7162065fc0c2b9831a50cbe5bfa754d45025a7b85df8dc&w=900'}
                        eventName={ 'Health and Wellness Programs'}
                        description={ 'Health and wellness programs promote employee well-being through initiatives like fitness classes, mental health support, and nutritional guidance, enhancing overall productivity and job satisfaction.'}
                    ></ProgramCards>
                </div>
                <div>
                    <ProgramCards
                        img={'https://img.freepik.com/free-photo/red-shirt-group-people-business-conference-modern-classroom-daytime_146671-16291.jpg?t=st=1718047094~exp=1718050694~hmac=51af9377acbb51ed8bbd1be44a41554e38ff01082e1aebb07097220b33664829&w=900'}
                        eventName={ 'Professional Development Day'}
                        description={ 'Professional Development Day offers workshops and training sessions to enhance employee skills, fostering growth and career advancement opportunities.'}
                    ></ProgramCards>
                </div>
                <div>
                    <ProgramCards
                        img={'https://img.freepik.com/premium-photo/silhouette-people-standing-field-against-sky_1048944-11921348.jpg?w=900'}
                        eventName={ 'Family Day'}
                        description={ 'Family Day celebrates bonds, creating cherished moments with loved ones, fostering connection, and appreciating family importance in our lives.'}
                    ></ProgramCards>
                </div>
            </div>
        </div>
    );
};

export default OurPrograms;