

const Header = ({title, tag}) => {
    const sizeClasses = {
        h1: 'text-3xl md:text-4xl',
        h2: 'text-2xl md:text-3xl'
    }
    return (
        <div className="py-14 md:py-20 text-center">
            <sec className={` font-bold tracking-wider text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-gray-400 ${sizeClasses[tag]}`}>
                {title}
            </sec>
        </div>
    );
};

export default Header;