'use client'
import Link from "next/link";
import Logo from "./Logo";
import LinkButton from "./LinkButton";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";

export const navlinks = [
    { url: '#home', label: 'Home' },
    { url: '#about-me', label: 'About' },
    { url: '#skills', label: 'Skills' },
    { url: '#projects', label: 'Projects' },
    { url: '#myeducation', label: 'Education' },
    { url: '#services', label: 'Services' },
    { url: '#contact', label: 'Contact' },
]


const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false)
    const [navBackground, setNavBackground] = useState(false)
    const [scrollMark, setScrollMark] = useState(0)

    useEffect(() => {
        const scrollHandler = () => {
            const scrollPosition = window.scrollY
            const actualHeight = document.body.scrollHeight - window.innerHeight
            const progress = scrollPosition / actualHeight * 100
            setScrollMark(parseInt(progress))
        }



        const navHandler = () => {
            if (window.scrollY >= 90) setNavBackground(true)
            if (window.scrollY < 90) setNavBackground(false)
        }

        const test = () => {
            window.scrollTo({
                behavior: 'smooth'
            })
        }

        window.addEventListener('scroll', navHandler)
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', navHandler)
            window.removeEventListener('scroll', scrollHandler)
        }

    }, [])

    return (
        <nav className={`h-18 fixed z-50 w-full transition-all duration-300 ${navBackground ? 'backdrop-blur-lg bg-white/20 opacity-90 shadow-md' : ''}`}>
            <div className="flex justify-between items-center h-full w-[90%] mx-auto">
                <Logo></Logo>
                {/* Nav links */}
                <ul className="hidden lg:flex space-x-5 xl:space-x-8 tracking-wider">
                    {
                        navlinks.map(link => {
                            return (
                                <li key={link.url}>
                                    <Link className=" hover:text-cyan-400 font-medium transition-colors duration-300" href={link.url} >{link.label}</Link>

                                </li>
                            )
                        })
                    }
                </ul>

                <div className="">
                    <div className="hidden lg:block">
                        <LinkButton
                            href={'/documents/resume.pdf'}
                            download
                            text={'Resume'}
                            icon={LuDownload}
                            iconPosition="right"
                        ></LinkButton>
                    </div>
                    <div className="">
                        <button onClick={() => setNavOpen(!navOpen)} className=" w-8 h-8 cursor-pointer relative z-100 lg:hidden">
                            {navOpen ? <LuX size={35}></LuX> : <LuMenu size={35} ></LuMenu>}
                        </button>
                        <MobileNav navOpen={navOpen} setNavOpen={setNavOpen}></MobileNav>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center rounded-full">
                <div style={{ width: `${scrollMark}%` }} className={`h-1 rounded-full bg-indigo-400`}></div>
            </div>
        </nav>
    );
};

export default NavBar;