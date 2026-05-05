import Header from "../general/Header";
import ProjectCard from "./ProjectCard";


const ProjectSection = () => {
    return (
        <section id="projects">
            <Header title={'Recent Projects'} tag={'h2'}></Header>
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
                <div data-aos='fade-right'>
                    <ProjectCard imagePath={'/image/tiles-gallery-img.png'} title={'🎨 Tiles Gallery – Discover Your Perfect Tile Aesthetic'} tags={['JavaScript', 'Next.js', 'Tailwind CSS', 'Daisy UI', 'Better Auth', 'MongoDB', 'Animated.css']} githubLink={'https://github.com/mdihbinah/Assignment-08'} liveLink={'https://assignment-08-iota.vercel.app'} description={'Tiles Gallery is a modern web application that allows users to explore and discover stylish tile designs with ease. It features secure authentication, a dynamic searchable gallery, and a personalized user profile system. With a clean, responsive UI and smooth data handling.'}></ProjectCard>
                </div>


                <div data-aos='fade-left'>
                    <ProjectCard imagePath={'/image/keen-keeper-img.png'} title={'🤝 KeenKeeper - Keep Your Friendships Alive'} tags={['JavaScript', 'Next.js', 'Tailwind CSS', 'Daisy UI', 'Recharts']} githubLink={'https://github.com/mdihbinah/Assignment-07'} liveLink={'https://mdihbinah-assignment-07.vercel.app/'} description={'KeenKeeper is a modern web application designed to help users maintain and manage meaningful relationships. In a busy world, it’s easy to let time slip by without reaching out to loved ones. This app allows users to track interactions, monitor communication frequency.'}></ProjectCard>
                </div>


                <div data-aos='fade-right'>
                    <ProjectCard imagePath={'/image/digi-tools-img.png'} title={'🚀 DigiTools – Supercharge Your Digital Workflow'} tags={['JavaScript', 'Next.js', 'Tailwind CSS', 'Daisy UI', 'React Icons']} githubLink={'https://github.com/mdihbinah/Assignment-06'} liveLink={'https://sparkly-torrone-fa7634.netlify.app'} description={'A modern e-commerce UI built with React based on a Figma design. Users can browse products, add them to cart, and manage purchases with a smooth interactive experience.'}></ProjectCard>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;