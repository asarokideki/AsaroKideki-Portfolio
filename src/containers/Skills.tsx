import { FC } from "react";
import SkillsTemplate from "../components/element/SkillTemplate";

type LightModeProps = {
    isLightMode?: boolean,
}

const Skill: FC<LightModeProps> = ({ isLightMode }) => {
    return (
        <section id="Skills" className={`relative transition-colors duration-500 py-6 ${isLightMode ? "bg-white" : "bg-gray-900"}`}>
            <div className={`w-full max-w-7xl mx-auto flex flex-col justify-center items-start px-6 md:px-8 ransition-colors duration-500 bg-transparent`}>
                <h1 className={`text-2xl font-bold py-4 uppercase ${isLightMode ? "text-gray-900" : "text-white"}`}>Tech Stack</h1>
                <p className={`text-md font-medium py-4 ${isLightMode ? "text-gray-900" : "text-white"}`}>I have worked with many frontend frameworks and the following skills are ones I have over 5 years of experience with. With these skills, I have implemented the frontend development of modern websites perfectly.</p>
                <SkillsTemplate />
            </div>
        </section>
    )
}

export default Skill;