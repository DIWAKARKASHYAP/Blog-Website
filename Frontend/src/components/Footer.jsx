// src/components/Footer.js

import React from 'react';
import {BsGithub , BsLinkedin  , BsTelegram} from 'react-icons/bs'
import { ImMail4} from "react-icons/im"
import { FaTwitterSquare} from "react-icons/fa"
function Footer() {
  return (
    <div>


    <footer className="bg-gradient-to-b from-black via-gray-800 to-black ">
    <div className="  flex ">
        
    </div>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex items-center justify-center">
                {/* <div className="mb-6 md:mb-0">
                    
                         <div  className=" nav text-gray-900 text-5xl  font-black max-w-6xl pt-10 pl-5 m-auto ">
   Diwakar Here
</div>
                    
                </div> */}
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                            Blogs
                        </h2>
                        <ul className="text-gray-400 font-medium">
                            <li className="mb-4">
                                <a
                                    href="https://dev.to/diwakarkashyap"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline"
                                >
                                    Dev.to
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://diwakarkashyap.hashnode.dev/"
                                    target="_blank"
                                    rel="noreferrer"                          
                                    className="hover:underline"
                                >
                                    HashNode
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                            Follow us
                        </h2>
                        <ul className="text-gray-400 font-medium">
                            <li className="mb-4">
                                <a
                                    href="https://github.com/DIWAKARKASHYAP"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline "
                                >
                                    Github
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/Diwakar_766"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline"
                                >
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                            Legal
                        </h2>
                        <ul className="text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Terms &amp; Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                <div className=" max-w-xl m-auto text-center mt-5 max text-slate-600"> 

I built this entire website from scratch, all by myself </div>
            <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
            <div className="flex items-center justify-center">
            
                <div className="flex  mt-4 space-x-6 justify-center sm:mt-0 ">
                    <a
                        href="https://www.linkedin.com/in/diwakar-kashyap-317a5223b/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500  hover:text-white"
                    >
                        <BsLinkedin className=" w-10 h-10 lg:w-14 lg:h-14" />
                    </a>
                    <a
                        href="mailto:diwakarkashyapdev@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500   hover:text-white"
                    >
                        <ImMail4 className=" w-10 h-10 lg:w-14 lg:h-14" />
                    </a>
                    <a
                        href="https://github.com/DIWAKARKASHYAP"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500   hover:text-white"
                    >
                        <BsGithub className="w-10 h-10 lg:w-14 lg:h-14" />
                    </a>
                    <a
                        href="https://t.me/didk9675"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500   hover:text-white"
                    >
                       <BsTelegram className=" w-10 h-10 lg:w-14 lg:h-14" />
                    </a>
                    <a
                        href="https://twitter.com/Diwakar_766"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500   hover:text-white"
                    >
                       <FaTwitterSquare className=" w-10 h-10 lg:w-14 lg:h-14" /> 
                    </a>
                </div>
            </div>
        </div>
    </footer>
</div>
  );
}

export default Footer;
