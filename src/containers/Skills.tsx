import { FC } from "react";
import { useTranslation } from 'react-i18next';
import SkillsTemplate from "../components/element/SkillTemplate";

type LightModeProps = {
    isLightMode?: boolean,
}

const Skill: FC<LightModeProps> = ({ isLightMode }) => {
    const { t } = useTranslation();

    return (
        <section id="Skills" className={`relative transition-colors duration-500 py-6 ${isLightMode ? "bg-white" : "bg-gray-900"}`}>
            <div className={`w-full max-w-7xl mx-auto flex flex-col justify-center items-start px-6 md:px-8 ransition-colors duration-500 bg-transparent`}>
                <h1 className={`text-2xl font-bold py-4 uppercase ${isLightMode ? "text-gray-900" : "text-white"}`}>{t('Tech Stack')}</h1>
                <p className={`text-md font-medium py-4 ${isLightMode ? "text-gray-900" : "text-white"}`}>{t('Skill content')}</p>
                <SkillsTemplate />
            </div>
        </section>
    )
}

export default Skill;