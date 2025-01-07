'use client'
import React, { useEffect, useState } from "react"
import Link from "next/link"

export default function NavBar() {
    const [currentDateTime, setCurrentdateTime] = useState(``);

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {

                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            }
            setCurrentdateTime(now.toLocaleDateString(`en-US`, options) +
                '' +
                now.toLocaleTimeString(`en-US`, { hour12: false })
            );
        };
        updateDateTime();
        const interValId = setInterval(updateDateTime, 1000);
        return () => clearInterval(interValId)
    }, []);




    return (
        <header className="text-grey-400 body-font shadow-lg">
            <div className=" container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                <div className="flex-1 text-black">
                    <span>{currentDateTime}</span>
                    <nav className="md:ml-auto flex-wrap items-center text-black justify-center ">
                      
                        <Link
                         href={"http://localhost:3000/"}
                     className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105" 
                     >
                         {" "}
                         Home{" "}
                          </Link>

                          <Link
                         href={"http://localhost:3000/about"}
                     className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105" 
                     >
                        {" "}
                         About{" "}
                          </Link>

                          <Link
                         href={"http://localhost:3000/blog"}
                     className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105" 
                     >
                        {" "}
                         Blog{" "}
                          </Link>

                          <Link
                         href={"http://localhost:3000/contact"}
                     className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105" 
                     >
                        {" "}
                         Contact{" "}
                          </Link>

<button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg bg-blue-800 rounded text-white mt-4 md:mt-0 transition-colors duration-300">

    Youtube 
    <svg fill='none'
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="w-4 h-4 ml-1"
    viewBox="0 0 24 24" >
        <path d="M5 12h 1412 517 7-7 7"/>
         </svg>

</button>



                    </nav>

                </div>

            </div>
        </header>

    )
}


