import { FaArrowRightToBracket } from "react-icons/fa6";

const ServiceTamplate = ({ serviceImg, serviceDetails, serviceName, displayFlex }) => {
    const containerClass = `container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 ${displayFlex ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:justify-between `;
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className={containerClass}>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={serviceImg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">{serviceName}
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">{serviceDetails}
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <button type="button" className="px-8 bg-slate-300 py-3 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100">
                                <div className="flex items-center gap-2">
                                    <h1>Explore</h1>
                                    <FaArrowRightToBracket></FaArrowRightToBracket>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceTamplate;