
const ContactCard = ({message , name, email}) => {
    return (
        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800 border-2 border-dotted border-blue-300">
            <blockquote className="max-w-lg text-lg italic font-medium text-center">{message}</blockquote>
            <div className="text-center dark:text-gray-600">
                <p>{name}</p>
                <p>{email}</p>
            </div>
            
        </div>
    );
};

export default ContactCard;