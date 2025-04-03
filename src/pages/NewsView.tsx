import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import MainLayout from '../components/MainLayout';

import isoIcon from '../assets/icons/seal/iso.svg';
import fdaIcon from '../assets/icons/seal/fda.svg';
import ceIcon from '../assets/icons/seal/ce.svg';
import calendarIcon from '../assets/icons/calendar_icon.svg'
import locationIcon from '../assets/icons/location_icon.svg'

import peopleImage from '../assets/images/news/people_banner.png';

import { news } from '../utils/newsData';

const NewsView: React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <MainLayout>
            <div className="container mx-auto">
                <section className="relative grid grid-cols-1 md:grid-cols-2 md:gap-24 pl-12 items-center bg-lightgreen">
                    <div className="absolute top-6 left-12">
                        <div className="flex items-center text-sm text-darkgray mb-8 space-x-2">
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
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h1 className="text-5xl text-black font-medium">Innovación y excelencia en insumos médicos</h1>
                            <p className='text-darkgray'>
                                Innovamos insumos médicos certificados para anestesia, purificación, infusiones y cuidado de heridas, mejorando vidas globalmente.
                            </p>
                        </div>
                        <Button color="bg-red" text="Contácta con un asesor" />
                    </div>
                    <div className="justify-self-end">
                        <img src={peopleImage} alt="Imagen" className="w-full h-full" />
                    </div>
                </section>

                <section className="px-12 pt-12">
                    {news.map((news, index) => (
                        <div key={news.id} className={`mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                            <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                <img src={news.imageUrl} alt={news.title} className="w-full h-auto shadow-lg" />
                            </div>

                            <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} space-y-4 flex flex-col justify-center items-center`}>
                                <h2 className="text-xl text-center font-medium text-black">{news.title}</h2>
                                <hr className="border-t-2 border-gray-300 w-full" />

                                <div className="flex items-center space-x-4">
                                    <span className="text-darkgray flex items-center">
                                        <img src={locationIcon} alt="Ubicación" className="mr-2 h-5" />
                                        {news.location}
                                    </span>
                                    <hr className="border-l-2 border-gray-300 h-6" />
                                    <span className="text-darkgray flex items-center">
                                        <img src={calendarIcon} alt="Ubicación" className="mr-2 h-4" />
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

                <section className="px-12 pt-12 pb-24 grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="flex justify-start">
                        <div className='flex flex-col items-center space-y-4'>
                            <div className="flex row space-x-6">
                                <img src={isoIcon} alt="ISO" className="w-12 h-12" />
                                <img src={ceIcon} alt="CE" className="w-12 h-12" />
                                <img src={fdaIcon} alt="FDA" className="w-24 h-12" />
                            </div>
                            <Button
                                color="bg-green"
                                text="Conoce nuestros productos"
                                onClick={() => navigate('/products')}
                            />
                        </div>
                    </div>
                    <p className='text-darkgray text-right'>
                        Desde 1999, Baihe Medical se destaca como uno de los principales fabricantes de insumos médicos desechables.
                    </p>
                </section>
            </div>
        </MainLayout>
    );
};

export default NewsView;