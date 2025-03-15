import { FC } from "react";
import { skills } from "../../data/Data";

const SkillsTemplate: FC = () => {
    return (
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 bg-transparent">
            {
                skills.map((item, index) => (
                    <div key={index} className="flex justify-center items-center p-6 border rounded-3xl relative bg-transparent hover:bg-indigo-600 translation duration-500 cursor-pointer">
                        <img src={item.image} alt="" className="w-44" />
                        <div className="absolute text-white -bottom-4 px-4 py-1 flex justify-center items-center border rounded bg-gray-900">
                            <p className="font-medium lg:text-base md:text-base sm:text-sm text-xs">{item.title}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SkillsTemplate;