import { FC } from "react";
import { category } from "../data/Data";
import LightModeButton from "./element/LightModeButton";

type LightModeProps = {
    isLightMode?: boolean,
    setIsLightMode?: any
}

const Header: FC<LightModeProps> = ({ isLightMode, setIsLightMode }) => {

    return (
        <nav
            className={`fixed py-4 top-0 z-40 w-full backdrop-blur transition-colors duration-500 lg:z-50 supports-backdrop-blur:bg-white/95 animate__animated animate__fadeInDown ${isLightMode ? "bg-white" : "bg-gray-900"}`}>
            <div className="container mx-auto">
                <div className="w-full flex flex-col lg:flex-row">
                    <div className="flex justify-between lg:flex-row">
                        <a href="https://pagedone.io/"
                            className="flex items-center uppercase font-bold text-2xl text-indigo-600">
                            A.K
                        </a>
                        <button data-collapse-toggle="navbar-nav-example" type="button"
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-nav-example" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden w-full lg:flex lg:pl-11">
                        <ul className="flex items-center flex-col mt-4 lg:mt-0 lg:ml-auto lg:flex-row gap-4 space-x-8">
                            {
                                category.map((item, index) => (
                                    <li key={index}>
                                        <p className="group relative w-auto">
                                            <a href={"#" + item.category}
                                                className={`flex items-center justify-between text-sm lg:text-base font-medium transition-all duration-500 uppercase ${isLightMode ? "text-gray-500 hover:text-indigo-700 " : "text-white"}`}>{item.category}</a>
                                            <span className={`absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 group-hover:w-3/6 ${isLightMode ? "bg-indigo-600" : "bg-white"}`}></span>
                                            <span className={`absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 group-hover:w-3/6 ${isLightMode ? "bg-indigo-600" : "bg-white"}`}></span>
                                        </p>
                                    </li>
                                ))
                            }
                            <LightModeButton setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;