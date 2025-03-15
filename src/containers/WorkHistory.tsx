import { FC, useState } from "react"
import { useTranslation } from 'react-i18next';
import WorkHistoryTemplate from "../components/element/WorkHistoryTemplate";
import ProjectDetailModal from "../components/element/ProjectDetail";

type LightModeProps = {
    isLightMode?: boolean,
}

const WorkHistory: FC<LightModeProps> = ({ isLightMode }) => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [id, setID] = useState<number>(0);

    return (
        <>
            <section id="Work Histories" className={`relative transition-colors duration-500 py-8 ${isLightMode ? "bg-white" : "bg-gray-900"}`}>
                <div className={`w-full max-w-7xl mx-auto flex flex-col justify-center items-start px-6 md:px-8 ransition-colors duration-500 bg-transparent`}>
                    <h1 className={`text-2xl font-bold py-4 uppercase ${isLightMode ? "text-gray-900" : "text-white"}`}>{t('Work Experience')}</h1>
                    <WorkHistoryTemplate isLightMode={isLightMode} setIsOpen={setIsOpen} setID={setID} />
                </div>
            </section>
            <ProjectDetailModal isOpen={isOpen} setIsOpen={setIsOpen} id={id} isLightMode={isLightMode} />
        </>
    )
}

export default WorkHistory;