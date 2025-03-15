import React, { FC, useState, useEffect } from "react"

type LightModeProps = {
    isLightMode?: boolean,
}

const ToTopButton: FC<LightModeProps> = ({ isLightMode }) => {

    const [isShow, setIsShow] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition >= 300) {
                setIsShow(true);
            } else {
                setIsShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <a href="#homepage" className={`bottom-12 right-4 p-2 rounded-full translation duration-500 cursor-pointer animate__animated animate__fadeInUp ${isShow ? "fixed" : "hidden"} ${isLightMode ? "bg-gray-900" : "bg-white"}`}>
            {
                isLightMode ? (
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(-90)">
                        <path d="m13 16 4-4-4-4M7 16l4-4-4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(-90)">
                        <path d="m13 16 4-4-4-4M7 16l4-4-4-4" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )
            }
        </a>
    )
}

export default ToTopButton;