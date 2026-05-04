import Image from "next/image";


const ServiceCard = ({icon, name, description}) => {
    return (
        <div>
            <Image src={icon} alt="service-icon" width={60} height={60}></Image>
            <h3 className="my-4 text-xl md:text-2xl font-bold text-gray-200">{name}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );
};

export default ServiceCard;