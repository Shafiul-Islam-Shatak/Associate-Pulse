import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../CustomHook/useAxiosSecure";
import SectionTitle from "../../../Shared Components/SectionTitle";
import ContactCard from "./ContactCard";

const ContactList = () => {
    const axiosSecure = useAxiosSecure();
    const { data: contacts = [] } = useQuery({
        queryKey: ['contacts'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-contact');
            return res.data;

        }
    })
    return (
        <div>
            <div>
                <SectionTitle
                    title={'Get in touch'}
                    description={'Contact with your people'}
                ></SectionTitle>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 lg:my-20 p-5">
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