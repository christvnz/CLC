import React, { useState } from 'react';

const FloatingContact = () => {
    const [hoveredPhone, setHoveredPhone] = useState(false);
    const [hoveredMail, setHoveredMail] = useState(false);

    return (
        <>
            <div className="fixed right-0 bottom-16 flex flex-col gap-2">
                <div className="relative">
                    <button
                        className="flex flex-row-reverse items-center bg-[#FEAB00] text-colorWhite p-3 transition-all duration-300"
                        onMouseEnter={() => setHoveredPhone(true)}
                        onMouseLeave={() => setHoveredPhone(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>

                        <a
                            href="tel:+64274830668" 
                            className={`text-md font-bold transition-all duration-300 ${hoveredPhone ? 'w-24 opacity-100 mr-10' : 'w-0 opacity-0'
                                }`}
                        >
                            <span className='w-full'>+64274830668</span>
                        </a>
                    </button>
                </div>
            </div>
            <div className="fixed right-0 bottom-4 flex flex-col gap-2">
                <div className="relative">
                    <button
                        className="flex flex-row-reverse items-center bg-[#FEAB00] text-colorWhite p-3 transition-all duration-300"
                        onMouseEnter={() => setHoveredMail(true)}
                        onMouseLeave={() => setHoveredMail(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>

                        <a
                            href="mailto:info@chowluckclub.com"
                            className={`text-md font-bold transition-all duration-300 ${hoveredMail ? 'w-24 opacity-100 mr-16' : 'w-0 opacity-0'
                                }`}
                        >
                            <span>info@chowluckclub.com</span>
                        </a>
                    </button>
                </div>
            </div>
        </>
    );
};

export default FloatingContact;