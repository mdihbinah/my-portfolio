import Link from 'next/link';
import React from 'react';



const LinkButton = ({
    href,
    text, 
    icon:Icon, 
    iconPosition = 'right',
    rounded,
    download = false
}) => {
    return (
        <Link href={href} download={download} className={`px-8 py-2 bg-linear-to-r from-blue-900 to-purple-700 hover:from-blue-700 hover:to-purple-600 font-medium transition-all duration-500 hover:scale-[1.04] active:scale-[0.98] inline-flex items-center justify-center gap-2  ${rounded? 'rounded-full': 'rounded-md'}`}>
            {Icon && iconPosition === 'left' && <Icon className='w-5 h-5' ></Icon>}
            {text}
            {Icon && iconPosition === 'right' && <Icon className='w-5 h-5' ></Icon>}
        </Link>
    );
};

export default LinkButton;