
const SectionTitle = ({title , description}) => {
    return (
        <div className="mx-auto w-3/4  text-center mt-5 md:mt-10">
            <h1 className="font-semibold text-3xl md:text-5xl">
                {title}
            </h1>
            <hr className="my-3"/>
            <p className="text-xl md:text-2xl">
                {description}
            </p>
        </div>
    );
};

export default SectionTitle;