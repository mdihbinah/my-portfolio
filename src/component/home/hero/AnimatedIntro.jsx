'use client'
import Typewriter from 'typewriter-effect'

const AnimatedIntro = () => {
    return (
        <div data-aos='fade-up' data-aos-delay='400' className='text-lg sm:text-2xl h-30 px-8 text-center font-medium text-gray-400'>
            {`Hi, I'm Md. Imam Hossain - A passionate`}
            <span className='text-purple-500 font-bold'>
                <Typewriter options={{strings: [
                    'Fullstack Developer',
                    'Nextjs Developer',
                    'React Expert',
                    'Tech Enthusiast'
                ],
                autoStart:true,
                loop:true,
                delay:75,
                deleteSpeed:40,
                }}
                ></Typewriter>
            </span>
        </div>
    );
};

export default AnimatedIntro;