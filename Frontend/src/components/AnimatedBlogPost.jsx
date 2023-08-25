import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import "../App.css";

const AnimatedBlogPost = ({keya , title, hashtag }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="p-4   mx-auto "
        >
            <div className=" p-6 bg-white   rounded-lg shadow ">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        <motion.h1 className="text-2xl font-bold mb-4">
                            <div className="mt-4 first-letter:mb-2 text-2xl font-bold tracking-tight  ">
                                {/* <h3>Editor Content:</h3> */}
                                <div
                                    dangerouslySetInnerHTML={{ __html: title }}
                                />
                            </div>
                        </motion.h1>
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 ">
                    {hashtag.map((data, index) => {
                        return (

                            <span className=" mx-1" key={index}>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">{data}</span>
                              
                            </span>
                        );
                    })}
                </p>
                <NavLink
                    to={"/blog/" + keya}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                    Read more
                    <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </NavLink>
            </div>

            <motion.p className="font-normal text-gray-700 ">
                <div className="mt-4">
                    {/* <h3>Editor Content:</h3> */}
                    {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
                </div>
            </motion.p>
        </motion.div>
    );
};

export default AnimatedBlogPost;
