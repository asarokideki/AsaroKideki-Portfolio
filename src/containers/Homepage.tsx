import { FC } from "react";
import { category } from "../data/Data";
import { useTranslation } from 'react-i18next';
import LightModeButton from "../components/element/LightModeButton";

type LightModeProps = {
    isLightMode?: boolean,
    setIsLightMode?: any
}

const HomePage: FC<LightModeProps> = ({ isLightMode, setIsLightMode }) => {

    const { t } = useTranslation();

    return (
        <section id="homepage" className={`h-full relative pt-44 pb-24 transition-colors duration-500 ${isLightMode ? "bg-white" : "bg-gray-900"}`}>
            <img src="https://pagedone.io/asset/uploads/1705473908.png" alt="cover-image" className="w-full absolute top-0 left-0 z-0 h-60" />
            <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5 animate__animated animate__fadeInUp">
                    <img src="image/user.png" alt="user-avatar-image" className="border-4 border-solid border-white rounded-full w-[120px]" />
                </div>
                <div className="flex items-center justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
                    <div className="block">
                        <h3 className={`font-manrope font-bold text-3xl mb-1 max-sm:text-center uppercase animate__animated animate__fadeInUp animate__delay-1s ${isLightMode ? "text-gray-900" : "text-white"}`}>{t('name')}</h3>
                        <p className={`text-base leading-7 font-medium max-sm:text-center uppercase animate__animated animate__fadeInUp animate__delay-2s ${isLightMode ? "text-gray-500" : "text-white"}`}>{t('Senior Full Stack Developer')} <br className="hidden sm:block" />
                            {t('Toyonaka')}</p>
                        <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col lg:space-x-4 md:space-x-4 sm:space-x-2 space-x-0 lg:space-y-0 md:space-y-0 sm:space-y-0 space-y-2">
                            <p className={`text-base leading-7 font-medium max-sm:text-center uppercase animate__animated animate__fadeInUp animate__delay-2s cursor-pointer ${isLightMode ? "text-gray-500" : "text-white"}`}>{t('Email')} : asarokideki@gmail.com</p>
                            <span className={`text-base leading-7 font-medium max-sm:text-center uppercase animate__animated animate__fadeInUp animate__delay-2s cursor-pointer ${isLightMode ? "text-gray-500" : "text-white"}`}>{t('Phone')} : +81 7055 3155</span>
                        </div>
                    </div>
                </div>
                <div className="flex max-sm:flex-wrap max-sm:justify-center items-center gap-4">
                    {
                        category.map((item, index) => (
                            <a key={index} href={"#" + item.category} className="rounded-full py-3 px-6 bg-stone-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-indigo-600 hover:text-white uppercase">{t(`${item.category}`)}</a>
                        ))
                    }
                    <LightModeButton setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
                </div>
            </div>
        </section>
    )
}

export default HomePage;