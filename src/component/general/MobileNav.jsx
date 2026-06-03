
import React from 'react';
import { navlinks } from './navbar';
import Link from 'next/link';
import LinkButton from './LinkButton';
import { LuDownload } from 'react-icons/lu';

const MobileNav = ({ navOpen, setNavOpen }) => {
    const showMobileNav = navOpen ? 'translate-x-0' : 'translate-x-[100%]'
    return (
        <div>
            <div className={`fixed inset-0 transform right-0 z-50 bg-black opacity-30 w-full h-screen transition-all duration-300 delay-300 ${showMobileNav} lg:hidden`}>

            </div>
            <ul className={`fixed flex flex-col items-center justify-center h-full transform transition-all duration-300 delay-300 w-[80%] sm:w-[60%] bg-slate-700 space-y-2 z-80 right-0 top-0 ${showMobileNav} lg:hidden`}>
                {
                    navlinks.map(link => {
                        return (
                            <li onClick={() => setNavOpen(!navOpen)} key={link.url} >
                                <Link href={link.url} className='flex items-center text-xl font-medium py-4 px-6 rounded-md hover:bg-slate-500/30 hover:text-cyan-400 transition-all duration-500 border-b-2 border-green-300 w-full text-center text-white' >
                                    {link.label}</Link>
                            </li>
                        )
                    }
                    )
                }
                <div className="my-4">
                    <LinkButton
                        href={'/documents/resume.pdf'}
                        download
                        text={'Resume'}
                        icon={LuDownload}
                        iconPosition="right"
                    ></LinkButton>
                </div>
            </ul>
        </div>
    );
};

export default MobileNav;