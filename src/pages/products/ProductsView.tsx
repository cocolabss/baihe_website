import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';

import Button from '../../components/Button';
import MainLayout from '../../components/MainLayout';

import isoIcon from '../../assets/icons/seal/iso.svg';
import fdaIcon from '../../assets/icons/seal/fda.svg';
import ceIcon from '../../assets/icons/seal/ce.svg';

import productsImage from '../../assets/images/products/products_banner.webp';

import { products, ProductCategory, ProductItem } from '../../utils/productsData';

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-t border-b border-gray-200">
            <button
                className={`w-full flex justify-between items-center p-3 md:p-4 ${isOpen ? 'text-green' : 'text-darkgray'
                    } hover:text-green transition-colors`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg md:text-xl">{title}</h3>
                {isOpen ? (
                    <ChevronDown className={`w-5 h-5 md:w-6 md:h-6 ${isOpen ? 'text-green' : ''}`} />
                ) : (
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                )}
            </button>
            {isOpen && (
                <div className="px-2 md:px-4 pt-2 md:pt-4 pb-6 md:pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
                    {children}
                </div>
            )}
        </div>
    );
};

const ProductCard: React.FC<{ product: ProductItem }> = ({ product }) => {
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && imgRef.current && !isLoaded) {
                    imgRef.current.src = product.image;
                    imgRef.current.onload = () => setIsLoaded(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [isLoaded, product.image]);

    return (
        <div className="bg-white rounded-b-2xl md:rounded-b-3xl overflow-hidden shadow-[-3px_3px_3px_0px_rgba(0,0,0,0.1)] md:shadow-[-5px_5px_5px_0px_rgba(0,0,0,0.2)] hover:shadow-md transition-shadow">
            <div className="w-full h-40 sm:h-48 overflow-hidden relative">
                {!isLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                )}

                <img
                    ref={imgRef}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    loading="lazy"
                    data-src={product.image}
                />
            </div>
            <div className="p-3 md:p-4 flex flex-col min-h-[110px] md:min-h-[130px]">
                <h4 className="text-sm md:text-base text-darkgray">{product.name}</h4>
                <div className="mt-auto pt-2 md:pt-4 flex justify-end items-end">
                    <Button
                        color="bg-green"
                        text="Ver más"
                        onClick={() => navigate(`/products/${product.id}`)}
                    />
                </div>
            </div>
        </div>
    );
};

const ProductsView: React.FC = () => {
    const navigate = useNavigate();
    const [bannerLoaded, setBannerLoaded] = useState(false);
    const bannerRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (bannerRef.current) {
            bannerRef.current.onload = () => setBannerLoaded(true);
        }
    }, []);

    return (
        <MainLayout>
            <div className="container mx-auto">
                <section className="relative grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-24 pl-8 md:pl-16 items-center bg-lightgreen pt-0">
                    <div className="absolute top-4 md:top-6 left-8 md:left-16 z-20">
                        <div className="flex items-center text-xs md:text-sm text-darkgray mb-4 md:mb-8 space-x-1 md:space-x-2">
                            <button
                                onClick={() => navigate('/')}
                                className="hover:text-red transition-colors hover:underline"
                            >
                                Home
                            </button>
                            <span>/</span>
                            <button
                                onClick={() => navigate('/products')}
                                className="hover:text-red transition-colors hover:underline"
                            >
                                Catálogo
                            </button>
                        </div>
                    </div>
                    <div className="space-y-6 md:space-y-12 order-2 md:order-1 my-8 md:my-8 pt-0 md:pt-8 pr-8 md:pr-0">
                        <div className="space-y-3 md:space-y-6">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl text-black font-medium text-center md:text-start">
                                Innovación y excelencia en insumos médicos
                            </h1>
                            <p className='text-darkgray text-sm md:text-base text-center md:text-start'>
                                Innovamos insumos médicos certificados para anestesia, purificación, infusiones y cuidado de heridas, mejorando vidas globalmente.
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-start">
                            <Button
                                color="bg-green"
                                text="Contácta con un asesor"
                            />
                        </div>
                    </div>
                    <div className="justify-self-center md:justify-self-end relative order-1 md:order-2">
                        {!bannerLoaded && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                                <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        )}
                        <img
                            ref={bannerRef}
                            src={productsImage}
                            alt="Productos médicos"
                            className={`w-full h-auto max-h-[300px] md:max-h-full ${bannerLoaded ? 'opacity-100' : 'opacity-0'
                                } transition-opacity duration-300`}
                            loading="lazy"
                        />
                    </div>
                </section>

                <section className="px-8 md:px-16 py-6 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
                    <div className='flex flex-col space-y-1 md:space-y-2 text-center md:text-start pb-4 md:pb-0'>
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-red">Nuestros productos</h2>
                        <p className='text-darkgray text-sm md:text-base'>
                            Conoce nuestra gama de dispositivos médicos certificados para una atención sanitaria avanzada y confiable.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 md:gap-6 pb-4 md:pb-0">
                        <img src={isoIcon} alt="ISO" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                        <img src={ceIcon} alt="CE" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                        <img src={fdaIcon} alt="FDA" className="w-16 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12" />
                    </div>
                </section>

                <section className='px-8 md:px-16 pb-8 md:pb-16'>
                    {products.map((category: ProductCategory) => (
                        <Accordion key={category.id} title={category.title}>
                            {category.products?.map((product: ProductItem) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </Accordion>
                    ))}
                </section>

                <section className="py-12 md:py-12 px-8 md:px-16 -mt-2 bg-lightgreen grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-0">
                    <div className="flex justify-center md:justify-start order-2 md:order-1">
                        <div className='flex flex-col items-center space-y-2 md:space-y-4'>
                            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                                <img src={isoIcon} alt="ISO" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                                <img src={ceIcon} alt="CE" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                                <img src={fdaIcon} alt="FDA" className="w-16 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12" />
                            </div>
                            <Button
                                color="bg-red"
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
}

export default ProductsView;