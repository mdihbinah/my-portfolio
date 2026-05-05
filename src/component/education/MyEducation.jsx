import { LuGraduationCap } from "react-icons/lu";
import Header from "../general/Header";
import EducationCard from "./EducationCard";
import { LiaSchoolSolid } from "react-icons/lia";
import { FaSchool } from "react-icons/fa";

const MyEducation = () => {
    return (
        <section id="resume" className="my-12">
            <div className="w[90%] sm:w-[80%] mx-auto grid-cols-1">
                <Header title={'MY Education'} tag={'h2'}></Header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-8">
                    <div data-aos='fade-right' className="row-span-1">
                        <EducationCard Icon={LuGraduationCap} role={'B.Sc. in Mathematics'} institution={'University of Barishal'} date={'February 2023 - Present'}></EducationCard>
                    </div>
                    <div data-aos='fade-left' className="row-span-1">
                        <EducationCard Icon={FaSchool} role={'Higher Secondary Certificate (HSC)'} institution={'Bisharkandi Sher-E-Bangla College'} date={'2020 - 2022'}></EducationCard>
                    </div>
                    <div data-aos='fade-right' className="row-span-1">
                        <EducationCard Icon={LiaSchoolSolid} role={'Secondary School Certificate (SSC)'} institution={'Rajapur Secondary School'} date={'2013 - 2019'}></EducationCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyEducation;