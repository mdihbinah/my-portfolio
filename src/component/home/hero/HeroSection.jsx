'use client'
import Image from "next/image";
import AnimatedIntro from "./AnimatedIntro";
import LinkButton from "@/component/general/LinkButton";
import { LuArrowRight } from "react-icons/lu";
import Particles from "./Particals";


const HeroSection = () => {
    return (
        <section id='home' className='h-screen relative flex justify-center items-center overflow-hidden flex-col'>
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                <Particles
                    particleColors={["#ffffff"]}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover
                    alphaParticles={false}
                    disableRotation={false}
                    pixelRatio={1}
                />
            </div>
            <div className="absolute z-10 flex flex-col items-center">
                <div className="w-37 h-37 relative" data-aos='fade-up' >
                    <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-600 blur-xs animate-pulse opacity-60"></div>
                    <Image
                        src={'/image/img.png'} alt="image"
                        fill
                        className="rounded-full object-cover p-1"
                    ></Image>
                </div>

                <h1 data-aos='fade-up' data-aos-delay='200' className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-5 font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500 ">Hi, I'm a Web Developer</h1>
                <AnimatedIntro></AnimatedIntro>
                <div data-aos='fade-up' data-aos-delay='600' className="">
                    <LinkButton href={'#projects'} text={'See my work'} icon={LuArrowRight} rounded ></LinkButton>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;