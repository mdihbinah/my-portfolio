'use client'
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { LuSend } from "react-icons/lu";

const contactInfo = [
    {
        icon: <FaEnvelope className="w-6 h-6"></FaEnvelope>,
        title: 'Email',
        value: 'mdihbinah@gmail.com',
        link: '#'
    },
    {
        icon: <FaPhone className="w-6 h-6"></FaPhone>,
        title: 'Email',
        value: '+8801521711090',
        link: '+8801521711090'
    },
    {
        icon: <FaMapMarkedAlt className="w-6 h-6"></FaMapMarkedAlt>,
        title: 'Location',
        value: 'Remote || Global',
        link: '#'
    },
]

const inputStyle = 'px-4 py-3 my-4 bg-slate-800 outline-none rounded-md w-full text-gray-200 placeholder-gray-400'


const ContactSection = () => {
    const [loading, setLoading] = useState(false)

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
        const formData = new FormData(event.target);
        formData.append("access_key", "6548ec97-9eae-4046-b22a-3343a86319ad");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        // setResult(data.success ? "Success!" : "Error");
        if (data.success) {
            event.target.reset()
            toast.success("Form Submitted Successfully",
                {
                    duration: 4000,
                }
            );
        } else {
            toast.error("Error submitting form",
                {
                    duration: 4000,
                }
            );

        }
        setLoading(false)
    };

    
    return (
        <section id='contact' className='py-16 lg:py-30'>
            <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                <div data-aos='fade-right' className="">
                    <h2 className='py-3 text-3xl md:text-4xl font-bold tracking-wider text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-gray-400'>Ready to Collaborate?</h2>
                    <p className='text-gray-400 mb-10 text-base lg:text-lg leading-relaxed'>{`I'm currently available for full-time opportunities. Whether you have a project in mind or just want to connect, feel free to reach out.`}</p>
                    <div className="space-y-5 p-2 mb-12  rounded-2xl">
                        {
                            contactInfo.map((item, index) => {
                                return <div key={index} className="">
                                    <Link href={item.link} className="flex itmes-center gap-4 px-5 py-3 transition-colors hover:bg-white/10 rounded-lg">
                                        <div className="h-15 w-15 rounded-full bg-white/15 text-white transition-transform group-hover:scale-105 grid place-items-center">
                                            {item.icon}
                                        </div>

                                        <div className="">
                                            <h4 className="text-md font-medium text-white">{item.title}</h4>
                                            <p className="text-md text-gray-400">{item.value}</p>
                                        </div>
                                    </Link>
                                </div>
                            })
                        }
                    </div>
                </div>


                <div data-aos='zoom-in' className="">
                    <form onSubmit={onSubmit} className="rounded-lg bg-slate-900 px-4 py-8">
                        <input type="text"
                        name="name" 
                        placeholder="Your Name" className={inputStyle} required></input>
                        <input type="email"
                        name="email" 
                        placeholder="Your Email" className={inputStyle} required></input>
                        <input type="text"
                        name="subject" placeholder="Your Subject of message" className={inputStyle} required></input>
                        <textarea 
                        name="message"
                        placeholder="Message" required className={`${inputStyle} resize-none`} rows={5} ></textarea>
                        <button className="w-full px-8 py-2 bg-linear-to-r from-blue-900 to-purple-700 hover:from-blue-700 hover:to-purple-600 font-medium transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] inline-flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 rounded-lg">

                            {
                                true ?
                                    <>
                                        <span className="w-6 h-6 border-3 border-white/30 border-t-white 
                            border-b-white 
                            rounded-full animate-spin"></span>
                                        Sending...
                                    </>
                                    :
                                    <>
                                        <LuSend size={20}></LuSend>
                                        Send Message
                                    </>

                            }
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;