import { FC, useState } from "react";
import { workhistories, projectlists } from "../../data/Data";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type LightModeProps = {
    isLightMode?: boolean,
    setIsOpen?: any,
    setID?: any,
}

const WorkHistoryTemplate: FC<LightModeProps> = ({ isLightMode, setID, setIsOpen }) => {

    const handleSetProjectID = (id: number) => {
        setID(id);
        setIsOpen(true)
    }

    return (
        <>
            <div className="w-full flex justify-start items-start flex-col space-y-8">
                {
                    workhistories.map((item, index) => (
                        <div key={index} className="flex lg:flex-row md:flex-col sm:flex-col flex-col w-full justify-start items-start">
                            <div className="lg:w-[25%] w-full flex flex-col justify-center items-start">
                                <p className={`text-xl font-medium ${isLightMode ? "text-gray-900" : "text-white"}`}>
                                    {item.company}
                                </p>
                                <p className={`text-sm font-medium ${isLightMode ? "text-gray-600" : "text-white"}`}>
                                    ({item.term})
                                </p>
                                <p className={`text-lg font-medium ${isLightMode ? "text-gray-900" : "text-white"}`}>
                                    {item.role}
                                </p>
                            </div>
                            <div className="lg:w-[75%] w-full">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={20}
                                    breakpoints={{
                                        425: {
                                            slidesPerView: 1,
                                        },
                                        550: {
                                            slidesPerView: 2,
                                        },
                                        640: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                    pagination={{ clickable: true }}
                                >
                                    {
                                        projectlists.filter(items => items.parentID === item.id).map((projects, Projectindex) => (
                                            <SwiperSlide key={Projectindex}>
                                                <div onClick={() => handleSetProjectID(projects.id)}
                                                    className="swiper-slide group bg-transparent border border-solid h-auto border-gray-300 rounded-2xl px-2 py-4 transition-all duration-500 w-full slide-active:border-indigo-600 cursor-pointer">
                                                    <div
                                                        className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500 swiper-slide-active:text-indigo-600">
                                                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                                                fill="currentColor" />
                                                        </svg>
                                                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                                                fill="currentColor" />
                                                        </svg>
                                                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                                                fill="currentColor" />
                                                        </svg>
                                                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                                                fill="currentColor" />
                                                        </svg>
                                                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                                                fill="currentColor" />
                                                        </svg>
                                                    </div>
                                                    <div className="text-lg leading-8 transition-all duration-500 mb-9">
                                                        <img src={projects.image} alt="" />
                                                    </div>
                                                    <div className="flex items-center gap-5">
                                                        <div className="grid gap-1">
                                                            <h5
                                                                className={`font-medium transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600 ${isLightMode ? "text-gray-900" : "text-white"}`}>
                                                                {projects.title}</h5>
                                                            <span className="text-sm leading-6 text-gray-500">{projects.role}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default WorkHistoryTemplate;