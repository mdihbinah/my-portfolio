
import Link from 'next/link';
import Header from '../general/Header';
import Image from 'next/image';

const About = () => {
    return (
        <div id='about-me' className=''>
            <Header title={'About Me'} tag={'h2'}></Header>
            <div className="w[90%] sm:w-[80%] mx-auto flex flex-col justify-center items-center gap-10">
                <div className="grid lg:grid-cols-2 place-items-center gap-15 lg:gap-5">
                    <div data-aos='fade-left' className="relative aspect-square w-[90%]">
                        <Image src={'/image/my-image.png'} alt='my-image' fill className='object-cover rounded-2xl border-5 border-blue-600/60 shadow-2xl shadow-blue-600/60 hover:animate-[rotateFloat_5s_ease-in-out_infinite] '></Image>
                    </div>
                    <div data-aos='fade-right' className="md:w-[90%] flex flex-col justify-center items-center space-y-5 lg:space-y-15">
                        <p className='text-lg opacity-75'>I’m a passionate Web Developer who enjoys building modern and user-friendly web applications. I started my programming journey with curiosity about how websites work, and now I love turning ideas into real projects using technologies like <span className='font-bold'>React</span>, <span className='font-bold'>Next.js</span>, <span className='font-bold'>Express.js</span>, and <span className='font-bold'>MongoDB</span>.</p>
                        <p className='text-lg opacity-75'>I enjoy learning new technologies, solving problems, and creating clean, responsive designs.</p>
                        <p className='text-lg opacity-75'><span className='font-bold'>Outside of coding</span>, I like exploring new ideas, improving my skills, and staying creative through technology and design.</p>
                    </div>
                </div>
                <div data-aos='fade-up' className="flex flex-col justify-center space-y-5">
                    <h2 className='text-lg lg:text-xl font-bold text-center opacity-60'>My Social Links</h2>
                    <div className="flex items-center gap-3">
                        <a className='hover:scale-125 rounded-full duration-500' href='https://www.linkedin.com/in/mdihbinah' target='_blank'><Image src={'/image/linkedin.png'} alt='LinkedIn Image' width={40} height={40}></Image></a>
                        <a className='hover:scale-125 rounded-full duration-500' href='https://wa.me/+8801403345532' target='_blank'><Image src={'/image/whatsapp.png'} alt='whatsapp Image' width={40} height={40}></Image></a>
                        <a className='hover:scale-125 rounded-full duration-500' href='https://www.facebook.com/profile.php?id=61584136511162' target='_blank'><Image src={'/image/facebook.png'} alt='facebook Image' width={40} height={40}></Image></a>
                        <a className='hover:scale-125 rounded-full duration-500' href='https://discord.com/users/mdihbinah' target='_blank'><Image src={'/image/discord.png'} alt='discord Image' width={40} height={40}></Image></a>
                        <a className='hover:scale-125 rounded-full duration-500' href='https://github.com/mdihbinah' target='_blank'><Image src={'/image/github-icon.png'} alt='github Image' width={40} height={40}></Image></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;