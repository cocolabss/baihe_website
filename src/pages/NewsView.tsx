import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import MainLayout from '../components/MainLayout';

import isoIcon from '../assets/icons/seal/iso.svg';
import fdaIcon from '../assets/icons/seal/fda.svg';
import ceIcon from '../assets/icons/seal/ce.svg';
import calendarIcon from '../assets/icons/calendar_icon.svg'
import locationIcon from '../assets/icons/location_icon.svg'

import peopleImage from '../assets/images/news/people_banner.webp';
import peopleImageMobile from '../assets/images/news/people_banner_mobile.webp';

import { news } from '../utils/newsData';

const NewsView: React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <MainLayout>
            <div className="container mx-auto">
                <section className="relative grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-24 items-center bg-lightgreen pt-0">
                    <div className="absolute top-4 md:top-6 left-8 md:left-16 z-20">
                        <div className="flex items-center text-xs md:text-sm text-white md:text-darkgray mb-4 md:mb-8 space-x-1 md:space-x-2">
                            <button
                                onClick={() => navigate('/')}
                                className="hover:text-red transition-colors hover:underline"
                            >
                                Home
                            </button>
                            <span>/</span>
                            <button
                                onClick={() => navigate('/news')}
                                className="hover:text-red transition-colors hover:underline"
                            >
                                Noticias
                            </button>
                        </div>
                    </div>
                    <div className="space-y-6 md:space-y-12 order-2 md:order-1 my-8 md:my-8 pt-0 md:pt-8 pr-8 md:pr-0 pl-8 md:pl-16">
                        <div className="space-y-3 md:space-y-6 text-center md:text-start">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl text-black font-medium">Innovación y excelencia en insumos médicos</h1>
                            <p className='text-darkgray text-sm md:text-base'>
                                Innovamos insumos médicos certificados para anestesia, purificación, infusiones y cuidado de heridas, mejorando vidas globalmente.
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-start">
                            <Button color="bg-red" text="Contácta con un asesor" />
                        </div>
                    </div>
                    <div className="justify-self-center md:justify-self-end relative order-1 md:order-2">
                        <img src={peopleImage} alt="Imagen" loading="lazy" className="w-full h-full hidden md:block" />
                        <img src={peopleImageMobile} alt="Imagen" loading='lazy' className='w-full h-full md:hidden' />
                    </div>
                </section>

                <section className="px-8 md:px-16 pt-8 md:pt-12">
                    {news.map((news, index) => (
                        <div key={news.id} className={`mb-12 md:mb-24 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                            <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                <img src={news.imageUrl} alt={news.title} loading="lazy" className="w-full h-auto shadow-lg" />
                            </div>

                            <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} space-y-4 flex flex-col justify-center items-center`}>
                                <h2 className="text-xl text-center font-medium text-black">{news.title}</h2>
                                <hr className="border-t-2 border-gray-300 w-full" />

                                <div className="flex items-center space-x-4">
                                    <span className="text-darkgray flex items-center">
                                        <img src={locationIcon} alt="Ubicación" loading="lazy" className="mr-2 h-5" />
                                        {news.location}
                                    </span>
                                    <hr className="border-l-2 border-gray-300 h-6" />
                                    <span className="text-darkgray flex items-center">
                                        <img src={calendarIcon} alt="Ubicación" loading="lazy" className="mr-2 h-4" />
                                        {news.date}
                                    </span>
                                </div>

                                <hr className="border-t-2 border-gray-300 w-full" />

                                <p className="text-darkgray text-center">{news.description}</p>

                                <hr className="border-t-2 border-gray-300 w-full" />

                                <a href={news.link} className="text-green-600 hover:text-green-800 font-medium inline-block">
                                    {news.link}
                                </a>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="py-12 md:py-12 px-8 md:px-16 -mt-2 grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-0">
                    <div className="flex justify-center md:justify-start order-2 md:order-1">
                        <div className='flex flex-col items-center space-y-2 md:space-y-4'>
                            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                                <img src={isoIcon} alt="ISO" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                                <img src={ceIcon} alt="CE" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                                <img src={fdaIcon} alt="FDA" className="w-16 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12" />
                            </div>
                            <Button
                                color="bg-green"
                                text="Contácta un asesor"
                            />
                        </div>
                    </div>
                    <p className='text-darkgray text-sm md:text-base text-center md:text-right order-1 md:order-2'>
                        Desde 1999, Baihe Medical se destaca como uno de los principales fabricantes de insumos médicos desechables.
                    </p>
                </section>
            </div>
        </MainLayout>
    );
};

export default NewsView;