import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { user, isAuthenticated, isLoading } = useAuth0();

    console.log(user);
    console.log(isAuthenticated);
    // console.log(isLoading);

    return (
        <div>
            <nav className="bg-gray-800 text-white">
                <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
                    <div className="flex justify-between items-center">
                        <div>
                            <a
                                href="#"
                                className="text-xl font-bold text-white"
                            >
                                Brand
                            </a>
                        </div>

                        <div className="flex md:hidden">
                            <button
                                type="button"
                                className="text-gray-200 hover:text-white focus:outline-none focus:text-white"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-6 w-6 fill-current"
                                >
                                    {isOpen ? (
                                        // X icon for closing
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L12 10.586l6.293-6.293a1 1 0 111.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 010-1.414z"
                                        />
                                    ) : (
                                        // Hamburger menu
                                        <>
                                            <path
                                                fillRule="evenodd"
                                                d="M4 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm1 8a1 1 0 100 2h14a1 1 0 100-2H5zM4 17a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
                                            />
                                        </>
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div
                        className={`md:flex items-center ${
                            isOpen ? "block" : "hidden"
                        }`}
                    >
                        <div className="flex flex-col md:flex-row md:mx-6">
                            <NavLink
                                to="/"
                                className="my-1 text-sm text-white hover:underline md:mx-4 md:my-0"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/write"
                                className="my-1 text-sm text-white hover:underline md:mx-4 md:my-0"
                            >
                                Write
                            </NavLink>
                            <NavLink
                                to="/blog"
                                className="my-1 text-sm text-white hover:underline md:mx-4 md:my-0"
                            >
                                Blog
                            </NavLink>
                            <NavLink
                                to="/signin"
                                className="my-1 text-sm text-white hover:underline md:mx-4 md:my-0"
                            >
                            {(isAuthenticated ? user.given_name : "Log in" )}
                                
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
