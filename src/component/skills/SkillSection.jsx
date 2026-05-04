import { DiCss3, DiHtml5, DiJavascript, DiReact } from "react-icons/di";
import Header from "../general/Header";
import { RiNextjsFill, RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandCss3, TbBrandJavascript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";

const skills = [
    {
        name: 'HTML',
        icon: <AiOutlineHtml5></AiOutlineHtml5>
    },
    {
        name: 'CSS',
        icon: <TbBrandCss3></TbBrandCss3>
    },
    {
        name: 'JavaScript',
        icon: <TbBrandJavascript></TbBrandJavascript>
    },
    {
        name: 'TailwindCSS',
        icon: <RiTailwindCssFill></RiTailwindCssFill>
    },
    {
        name: 'React Js',
        icon: <DiReact></DiReact>
    },
    {
        name: 'Next Js',
        icon: <RiNextjsLine></RiNextjsLine>
    },
    {
        name: 'Node Js',
        icon: <FaNodeJs></FaNodeJs>
    },
    {
        name: 'Express Js',
        icon: <SiExpress></SiExpress>
    },
    
]


const SkillSection = () => {
    return (
        <div>
            <section id="skills">
                <Header title={'My Skills'} tag={'h2'}></Header>
                <div className="flex flex-wrap justify-center gap-6">
                    {
                        skills.map((skill, index) => {
                            return <div 
                            key={index}
                            data-aos='flip-right'
                            data-aos-delay={index * 100} 
                            className="bg-slate-900 text-center w-35 h-40 rounded-2xl flex flex-col items-center justify-center shadow-lg transition-all hover:scale-110 duration-1000">
                                <div 
                                data-aos='flip-right'
                                // data-aos-delay={(12 -index) * 200}
                                data-aos-delay={(index) * 200}
                                className="text-5xl text-purple-300">
                                    {skill.icon}
                                </div>
                                <p className="text-xl font-semibold my-3 text-indigo-400">{skill.name}</p>
                            </div>
                        })
                    }
                </div>
            </section>
        </div>
    );
};

export default SkillSection;