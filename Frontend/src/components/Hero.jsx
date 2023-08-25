import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const heroVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function Hero() {
    return (
        <motion.div
            className="bg-blue-500 text-white h-screen flex items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
        >
            <div className="text-center space-y-4">
                <motion.h1
                    className="text-5xl font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Welcome to Our blog website
                </motion.h1>
                <motion.p
                    className="text-lg"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    whole{" "}
                    <span className="bg-white font-bold  mr-2 px-2.5 py-0.5 rounded ">
                        <span className=" text-amber-400">M</span>{" "}
                        <span className=" text-black">E</span>{" "}
                        <span className=" text-blue-400">R</span>{" "}
                        <span className=" text-green-400">N</span>{" "}
                    </span>
                     website including frontend, backend and database are
                    made by using chat GPT and prompt engineer
                </motion.p>
                <motion.button
                    className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <NavLink to="/write">Write Blog</NavLink>
                </motion.button>
            </div>
        </motion.div>
    );
}

export default Hero;
