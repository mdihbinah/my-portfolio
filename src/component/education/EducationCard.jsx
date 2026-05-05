

const EducationCard = ({role, Icon, date, institution}) => {
    return (
        <div className="flex flex-col  items-center gap-5 h-60 bg-slate-600/20 p-4 sm:p-8 rounded-xl">
            <div className="w-15 h-15 bg-blue-950 rounded-full grid place-items-center">
                <Icon className='w-8 h-8  text-gray-200' />
            </div>
            <div className="grid place-items-center gap-2 flex-1">
                {
                    date && (
                        <p className="mb-2 px-5 py-1.5 rounded-full bg-gray-300 text-gray-700 w-fit text-sm font-bold">
                            {date}
                        </p>
                    )
                }
                <p className="text-gray-200 text-sm font-medium tracking-wider">{role}</p>
                <p className="text-gray-200 text-sm font-medium tracking-wider">{institution}</p>
            </div>
        </div>
    );
};

export default EducationCard;