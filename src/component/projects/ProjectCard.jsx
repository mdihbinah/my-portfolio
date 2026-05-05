import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";



const ProjectCard = ({imagePath, title, tags, githubLink, liveLink, description}) => {
    return (
        <div className="hover:-translate-y-3 duration-500 overflow-hidden">
            <div className="relative aspect-video hover:scale-105 duration-500">
                <Image 
            src={imagePath}
            alt="project-image"
            fill
            className="rounded-lg w-full h-full object-cover"
            ></Image>
            </div>
            <p className="my-4 text-lg sm:text-xl font-semibold text-gray-200">{title}</p>
            <p className="font-medium text-gray-400">{description}</p>
            <div className="flex flex-wrap mt-3">
                {
                    tags.map((tag, index) => {
                        return (
                            <p key={index} className="rounded-full bg-slate-600 px-3 py-1 mx-1 my-1 hover:scale-105 duration-300">{tag}</p>
                        )
                    })
                }
            </div>
            <div className="flex gap-3 m-3">
                <a target="_blank" href={githubLink} className="rounded-full bg-blue-500 px-3 py-1 flex justify-center items-center gap-2 hover:scale-105 duration-300"><FaGithub />Github Link</a>
                <a target="_blank" href={liveLink} className="rounded-full bg-blue-500 px-3 py-1 flex justify-center items-center gap-2 hover:scale-105 duration-300"><FaLink />Live Link</a>
            </div>
            
        </div>
    );
};

export default ProjectCard;