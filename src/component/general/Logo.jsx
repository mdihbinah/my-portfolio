import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LuCodeXml } from 'react-icons/lu';

const Logo = () => {
    return (
        <Link href={'/'} className='flex items-center space-x-2 rounded-full'>
        {/* <div className="w-10 h-10 bg-gray-200 rounded-full grid place-items-center">
            <LuCodeXml></LuCodeXml>
        </div>
        <p className='text-gray-200 font-bold md:text-2xl hidden sm:block'>Wevdev</p> */}
            <Image src={'/image/only-logo.png'} alt='logo' width={70} height={70} className='rounded-full' ></Image>
        </Link>
    );
};

export default Logo;