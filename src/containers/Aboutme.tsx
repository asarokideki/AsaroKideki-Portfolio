import { FC, useEffect, useState } from "react";

type LightModeProps = {
    isLightMode?: boolean,
}

const AboutMe: FC<LightModeProps> = ({ isLightMode }) => {

    return (
        <section className={`relative transition-colors duration-500 ${isLightMode ? "bg-white" : "bg-gray-900"}`}>
            <div id="About me" className={`w-full max-w-7xl mx-auto flex flex-col justify-center items-start md:px-8 px-4 ransition-colors duration-500 bg-transparent`}>
                <h1 className={`text-2xl font-bold py-4 uppercase ${isLightMode ? "text-gray-900" : "text-white"}`}>About Me</h1>
                <p className={`lg:text-lg md:text-lg sm:text-sm text-sm font-medium ${isLightMode ? "text-gray-900" : "text-white"}`}>
                    I have worked in web development for nearly 6 years as a Full Stack Developer.
                    I've always had a love for building the design so taking the initiative to learn
                    Front-End Web Development has definitely been one of the most challenging yet amazing
                    decisions I've ever made. Contributing to web development projects and overcoming both
                    personal and professional challenges have only further motivated me to continue
                    pursuing my career goals within the software development industry This journey has
                    also taught me to believe and be kind to myself, anything is possible with time and
                    dedication. I can't wait to see where this road take me and I wouldn't have it any
                    other way! When I'm not on the job, I love hiking with my dog, working my way through
                    every recipe in the family cookbook, and indulging my love for seeing new places.
                </p>
            </div>
        </section>
    )
}

export default AboutMe;