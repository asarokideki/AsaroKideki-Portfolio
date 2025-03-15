import { FC } from "react";
import { useTranslation } from 'react-i18next';

type LightModeProps = {
    isLightMode?: boolean,
}

const AboutMe: FC<LightModeProps> = ({ isLightMode }) => {
    const { t } = useTranslation();

    return (
        <section className={`relative transition-colors duration-500 ${isLightMode ? "bg-white" : "bg-gray-900"}`}>
            <div id="About me" className={`w-full max-w-7xl mx-auto flex flex-col justify-center items-start md:px-8 px-4 ransition-colors duration-500 bg-transparent`}>
                <h1 className={`text-2xl font-bold py-4 uppercase ${isLightMode ? "text-gray-900" : "text-white"}`}>{t('About me')}</h1>
                <p className={`lg:text-lg md:text-lg sm:text-sm text-sm font-medium ${isLightMode ? "text-gray-900" : "text-white"}`}>
                    {t('About me content')}
                </p>
            </div>
        </section>
    )
}

export default AboutMe;