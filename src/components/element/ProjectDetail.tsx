import { FC, useEffect, useState } from 'react';
import { projectlists } from '../../data/Data';
import { useTranslation } from 'react-i18next';

type ProjectDetailModalProps = {
    isOpen?: boolean
    setIsOpen?: any
    id?: number,
    isLightMode?: boolean
}

const ProjectDetailModal: FC<ProjectDetailModalProps> = ({ isOpen, setIsOpen, id, isLightMode }) => {
    const { t } = useTranslation();

    const [ID, setID] = useState<number>(0);

    useEffect(() => {
        if (id !== undefined) setID(id)
    }, [id])

    return (
        <div className={`w-full h-screen fixed top-0 z-50 bg-[#00000025] ${isOpen ? "flex" : "hidden"}`}>
            <div className="transition duration-500 md:max-w-2xl md:w-full m-3 md:mx-auto lg:mt-12 animate__animated animate__fadeInDown">
                <div className={`flex flex-col rounded-2xl py-4 px-5 ${isLightMode ? "bg-white" : "bg-gray-900 border"}`}>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                        <h4 className={`text-sm font-medium ${isLightMode ? "text-gray-900" : "text-white"}`}>{t(`${projectlists[ID].title}`)}</h4>
                        <button className="block cursor-pointer close-modal-button" data-pd-overlay="#medium-modal" data-modal-target="medium-modal" onClick={() => setIsOpen(false)}>
                            {
                                isLightMode ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.75732 7.75739L16.2426 16.2427M16.2426 7.75739L7.75732 16.2427" stroke="black" strokeWidth="1.6" strokeLinecap="round"></path>
                                    </svg>
                                ) : (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.75732 7.75739L16.2426 16.2427M16.2426 7.75739L7.75732 16.2427" stroke="white" strokeWidth="1.6" strokeLinecap="round"></path>
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                    <div className="overflow-y-auto py-4 flex flex-col justify-center items-center">
                        <div className='w-full flex justify-center items-end'>
                            <div className='lg:w-1/2 md:w-1/2 sm:w-full w-full flex flex-col justify-center items-start mb-8'>
                                <p className={`font-medium lg:text-2xl md:text-2xl sm:text-lg text-lg ${isLightMode ? "text-gray-900" : "text-white"}`}>{t('Project Title')} : {t(`${projectlists[ID].title}`)}</p>
                                <p className={`font-medium lg:text-lg text-sm ${isLightMode ? "text-gray-900" : "text-white"}`}>{t('Project Role')} : {t(`${projectlists[ID].role}`)}</p>
                            </div>
                            <div className='w-1/2 justify-center items-center lg:flex md:flex sm:hidden hidden'>
                                <img src={projectlists[ID].image} alt="" className='w-64 h-40' />
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center py-2 overflow-y-auto lg:h-auto md:h-auto sm:h-60 h-40'>
                            <p className={`font-medium ${isLightMode ? "text-gray-900" : "text-white"}`}>{t(`${projectlists[ID].summary}`)}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-end pt-4 border-t border-gray-200 space-x-4">
                        <button type="button" className="py-2.5 px-5 text-xs bg-indigo-50 text-indigo-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-100 close-modal-button" data-pd-overlay="#medium-modal" data-modal-target="medium-modal" onClick={() => setIsOpen(false)}>{t('Cancel')}</button>
                        <a href={projectlists[ID].url} target={projectlists[ID].url} className="py-2.5 px-5 text-xs  bg-indigo-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700 close-modal-button" data-pd-overlay="#medium-modal" data-modal-target="medium-modal">{t('Visit Website')}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailModal;