import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


type LightModeProps = {
    isLightMode?: boolean,
}

const Education: FC<LightModeProps> = ({ isLightMode }) => {
    const { t } = useTranslation();

    return (
        <section className={`relative transition-colors duration-500 ${isLightMode ? "bg-white" : "bg-gray-900"}`}>
            <div id="Education" className="w-full max-w-7xl mx-auto flex flex-col justify-center items-start px-4 md:px-8 ransition-colors duration-500 bg-transparent">
                <h1 className={`text-2xl font-bold py-4 uppercase ${isLightMode ? "text-gray-900" : "text-white"}`}>Education</h1>
                <div className="w-full flex justify-start items-start lg:flex-row md:flex-row sm:flex-col flex-col lg:space-y-0 md:space-y-0 sm:space-y-4 space-y-4">
                    <div className="lg:w-[40%] md:w-[40%] sm:w-full w-full flex flex-col justify-center items-start">
                        <p className={`text-xl font-medium ${isLightMode ? "text-gray-900" : "text-white"}`}>
                            {t('University')}
                        </p>
                        <p className={`text-sm font-medium ${isLightMode ? "text-gray-600" : "text-white"}`}>
                            ({t('Feb')}, 2014 - {t('Mar')}, 2018)
                        </p>
                        <p className={`text-lg font-medium ${isLightMode ? "text-gray-900" : "text-white"}`}>
                            {t('Degree')}
                        </p>
                        <p className={`text-sm font-medium mt-4 ${isLightMode ? "text-gray-900" : "text-white"}`}>
                            {t('Education content')}
                        </p>
                    </div>
                    <div className="lg:px-8 md:px-8">
                        <Link to="https://www.kansai-u.ac.jp/ja/?stt_lang=ja">
                            <img src="/image/Kansai University.png" alt="" className="lg:w-96 md:w-96 sm:w-full w-full rounded-lg hover:shadow-2xl" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education;