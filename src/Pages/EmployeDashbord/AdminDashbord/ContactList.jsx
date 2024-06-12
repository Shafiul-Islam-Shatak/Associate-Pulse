import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../CustomHook/useAxiosSecure";
import SectionTitle from "../../../Shared Components/SectionTitle";
import ContactCard from "./ContactCard";
import { ClimbingBoxLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";

const ContactList = () => {
    const axiosSecure = useAxiosSecure();
    const { data: contacts = [] , isLoading} = useQuery({
        queryKey: ['contacts'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-contact');
            return res.data;

        }
    })
    return (
        <div>
            <div>
            <Helmet>
                <title>Contact List</title>
            </Helmet>
                <SectionTitle
                    title={'Get in touch'}
                    description={'Contact with your people'}
                ></SectionTitle>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 lg:my-20 p-5">
                {isLoading &&
                    <div className="flex justify-center items-center h-screen">
                        <div className="w-16 h-16">
                            <ClimbingBoxLoader color="#36d7b7" />
                        </div>
                    </div>
                }

                {
                    contacts.map(contact =>
                        <ContactCard
                            key={contact._id}
                            message={contact.message}
                            email={contact.email}
                            name={contact.name}
                        ></ContactCard>)
                }
            </div>
        </div>
    );
};

export default ContactList;