import Header from "@/component/general/Header";
import ServiceCard from "./ServiceCard";


const ServicesSection = () => {
    return (
        <section id="services">
            <Header title={'What I Offer'} tag={'h2'}></Header>
            <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
                <div data-aos='fade-right' data-aos-delay='400' className="">
                    <ServiceCard
                        name={'Frontend Development'}
                        icon={'/image/s2.png'}
                        description={'Designing and developing high-performance, responsive user interfaces using modern frameworks. I emphasize accessibility, usability, and pixel-perfect design implementation to create intuitive and engaging user experiences across all devices.'}
                    ></ServiceCard>
                </div>

                <div data-aos='fade-up' data-aos-delay='400' className="">
                    <ServiceCard
                        name={'Backend Development'}
                        icon={'/image/s4.png'}
                        description={'Engineering secure, scalable, and maintainable server-side systems. I build and optimize APIs, manage databases, and implement authentication and business logic to ensure reliability, performance, and data integrity.'}
                    ></ServiceCard>
                </div>

                <div data-aos='fade-left' data-aos-delay='400' className="">
                    <ServiceCard
                        name={'Full Stack Development'}
                        icon={'/image/s1.png'}
                        description={'Delivering end-to-end web solutions by seamlessly integrating frontend and backend technologies. I architect and develop scalable applications from concept to deployment, ensuring efficiency, performance optimization, and adherence to modern development standards.'}
                    ></ServiceCard>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;