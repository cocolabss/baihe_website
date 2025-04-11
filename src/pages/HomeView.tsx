import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import MainLayout from '../components/MainLayout';
import Carousel from '../components/Carousel';
import Button from '../components/Button';

import peopleImage from '../assets/images/people.webp';

import isoIcon from '../assets/icons/seal/iso.svg';
import fdaIcon from '../assets/icons/seal/fda.svg';
import ceIcon from '../assets/icons/seal/ce.svg';

import StepImage1 from '../assets/images/timeline/step_1.svg';
import StepImage2 from '../assets/images/timeline/step_2.svg';
import StepImage3 from '../assets/images/timeline/step_3.svg';
import StepImage4 from '../assets/images/timeline/step_4.svg';
import StepImage5 from '../assets/images/timeline/step_5.svg';
import StepImage6 from '../assets/images/timeline/step_6.svg';
import StepImage7 from '../assets/images/timeline/step_7.svg';
import StepImage8 from '../assets/images/timeline/step_8.svg';

import bannerImage from '../assets/images/banners/home_banner_second.webp';
import bannerRedImage1 from '../assets/images/banners/red/banner_1.webp';
import bannerRedImage2 from '../assets/images/banners/red/banner_2.webp';
import bannerRedImage3 from '../assets/images/banners/red/banner_3.webp';
import bannerBlackImage1 from '../assets/images/banners/black/banner_1.webp';
import bannerBlackImage2 from '../assets/images/banners/black/banner_2.webp';
import bannerBlackImage3 from '../assets/images/banners/black/banner_3.webp';
import bannerGreenImage1 from '../assets/images/banners/green/banner_1.webp';
import bannerGreenImage2 from '../assets/images/banners/green/banner_2.webp';
import bannerGreenImage3 from '../assets/images/banners/green/banner_3.webp';

import { services, servicesBusiness } from '../utils/servicesData';
import { products } from '../utils/productsData';

const redImages = [bannerRedImage1, bannerRedImage2, bannerRedImage3];
const blackImages = [bannerBlackImage1, bannerBlackImage2, bannerBlackImage3];
const greenImages = [bannerGreenImage1, bannerGreenImage2, bannerGreenImage3];

const HomeView: React.FC = () => {
    const navigate = useNavigate();
    const productRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [loadedImages, setLoadedImages] = useState<boolean[]>(Array(products.length).fill(false));
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref4, inView4] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref5, inView5] = useInView({ threshold: 0.1, triggerOnce: true });

    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const controls4 = useAnimation();
    const controls5 = useAnimation();

    useEffect(() => {
        if (inView1) controls1.start("visible");
        if (inView2) controls2.start("visible");
        if (inView3) controls3.start("visible");
        if (inView4) controls4.start("visible");
        if (inView5) controls5.start("visible");
    }, [inView1, inView2, inView3, inView4, inView5, controls1, controls2, controls3, controls4, controls5]);

    const setProductRef = (el: HTMLDivElement | null, index: number) => {
        productRefs.current[index] = el;
    };

    useEffect(() => {
        const observers = productRefs.current
            .map((element, index) => {
                if (!element || !products[index]) return null;

                const observer = new IntersectionObserver(([entry]) => {
                    if (entry?.isIntersecting) {
                        const img = element.querySelector('img');
                        if (img && products[index]?.image) {
                            img.src = products[index].image;
                            img.onload = () => {
                                setLoadedImages(prev => {
                                    const newState = [...prev];
                                    newState[index] = true;
                                    return newState;
                                });
                            };
                        }
                        observer.disconnect();
                    }
                }, { threshold: 0.1 });

                observer.observe(element);
                return observer;
            })
            .filter((obs): obs is IntersectionObserver => obs !== null);

        return () => observers.forEach(obs => obs.disconnect());
    }, []);

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const slideInFromLeft = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const slideInFromRight = {
        hidden: { x: 20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <MainLayout>
            <div className='container mx-auto'>
                <section className="grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-24 pb-24 pt-8 md:pt-12 items-center px-6 md:px-16">
                    <div className="space-y-6 md:space-y-12 order-2 md:order-1">
                        <div className="space-y-4 md:space-y-6">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center md:text-start text-green font-medium">
                                Innovación y excelencia en insumos médicos
                            </h1>
                            <p className="text-base md:text-lg text-center md:text-start">
                                Innovamos insumos médicos certificados para anestesia, purificación, infusiones y cuidado de heridas, mejorando vidas globalmente.
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-start">
                            <Button color="bg-green" text="Conoce nuestros productos" onClick={() => navigate('/products')} />
                        </div>
                    </div>
                    <div className="justify-self-center md:justify-self-end order-1 md:order-2 mb-8 md:mb-0">
                        <img
                            src={peopleImage}
                            alt="Imagen"
                            loading="lazy"
                            className="w-full h-auto max-h-[400px] md:max-h-[450px] rounded-lg object-cover"
                        />
                    </div>
                </section>

                <section className="px-8 md:px-16 relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 -mt-8 md:-mt-16 -mb-20 md:-mb-40">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className={`bg-white p-4 md:p-6 shadow-[-5px_5px_5px_0px_rgba(0,0,0,0.2)] rounded-lg space-y-4 md:space-y-8 text-center ${index === 1 || index === 3 ? 'transform md:translate-y-12' : ''
                                    }`}
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}
                            >
                                <div className="space-y-2 md:space-y-4">
                                    <h2 className={`text-lg md:text-xl transition-colors ${hoverIndex === index ? 'text-red' : 'text-black'
                                        }`}>
                                        {service.title}
                                    </h2>
                                    <img
                                        src={hoverIndex === index ? service.iconHover : service.icon}
                                        alt="Icono"
                                        loading="lazy"
                                        className="w-16 h-16 md:w-20 md:h-20 mx-auto transition-transform"
                                    />
                                    <p className='text-sm md:text-base text-darkgray'>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="pt-40 md:pt-60 px-8 md:px-16 pb-12 md:pb-24 bg-lightgreen">
                    <h2 className="text-2xl md:text-3xl mb-2 font-medium text-center md:text-start">Áreas de Especialización</h2>
                    <p className="mb-8 md:mb-12 text-darkgray text-sm md:text-base text-center md:text-start">
                        <strong>Expertos</strong> en dispositivos médicos desechables para uso en anestesia, purificación de sangre, infusión y cuidado de heridas.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-24 gap-y-8 md:gap-y-160">
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                ref={el => setProductRef(el, index)}
                                className="relative"
                            >
                                <p className='mb-2 md:mb-3 text-darkgray text-center md:text-start text-sm md:text-base'>{product.title}</p>
                                <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                                    {!loadedImages[index] && (
                                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg">
                                            <div className="h-full w-full flex items-center justify-center">
                                                <svg className="w-10 h-10 md:w-12 md:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}

                                    <img
                                        alt={`Producto ${product.title}`}
                                        className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${loadedImages[index] ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        loading="lazy"
                                        data-src={products[index].image}
                                    />
                                </div>
                                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4">
                                    <Button color="bg-red" text="Ver más" onClick={() => navigate(`/products`)} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 mt-16 md:mt-20 items-center gap-6 md:gap-0">
                        <p className='text-darkgray text-sm md:text-base text-center md:text-start'>
                            Desde 1999, Baihe Medical se destaca como uno de los principales fabricantes de insumos médicos desechables.
                        </p>
                        <div className="flex justify-center md:justify-end">
                            <div className='flex flex-col items-center space-y-3 md:space-y-4'>
                                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                                    <img src={isoIcon} alt="ISO" loading="lazy" className="w-10 h-10 md:w-12 md:h-12" />
                                    <img src={ceIcon} alt="CE" loading="lazy" className="w-10 h-10 md:w-12 md:h-12" />
                                    <img src={fdaIcon} alt="FDA" loading="lazy" className="w-20 h-10 md:w-24 md:h-12" />
                                </div>
                                <Button
                                    color="bg-red"
                                    text="Conoce nuestros productos"
                                    onClick={() => navigate('/products')}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-8 md:px-16 py-12 md:py-24 space-y-8">
                    <motion.div
                        ref={ref1}
                        initial="hidden"
                        animate={controls1}
                        className="flex flex-col md:flex-row justify-between"
                    >
                        <div className="relative w-full h-[40px] md:h-[88px] mb-4 md:mb-0 hidden md:block">
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-4 left-0 md:left-28 w-full md:w-[700px] h-[4px] bg-[#6fb71e]"
                            />
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-4 left-0 md:left-28 w-[4px] h-[60px] md:h-[125px] bg-[#6fb71e]"
                            />
                        </div>
                        <motion.div
                            variants={slideInFromRight}
                            className='flex flex-col w-full md:w-2/3 space-y-2 md:space-y-4 justify-center text-center md:text-end'
                        >
                            <h2 className="text-2xl md:text-3xl text-green font-medium">Valores fundamentales</h2>
                            <p className='text-darkgray text-sm md:text-base'>
                                Innovamos insumos médicos certificados para anestesia, purificación, infusiones y cuidado de heridas, mejorando vidas globalmente.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        ref={ref2}
                        initial="hidden"
                        animate={controls2}
                        className="flex flex-col-reverse md:flex-row justify-between"
                    >
                        <motion.div
                            variants={slideInFromLeft}
                            className='flex flex-col md:flex-row w-full md:w-2/3 space-y-4 md:space-y-0 md:space-x-8 justify-center mt-4'
                        >
                            <img src={StepImage1} alt="Estabilidad" loading="lazy" className='h-40 hidden md:block' />
                            <img src={StepImage5} alt="Estabilidad" loading="lazy" className='h-32 md:hidden' />
                            <div className="flex flex-col space-y-2 md:space-y-4 justify-center text-center md:text-left">
                                <h2 className="text-2xl md:text-3xl text-black">Estabilidad</h2>
                                <p className='text-darkgray text-sm md:text-base'>
                                    Mantenemos un compromiso constante con la calidad de nuestros productos, la satisfacción de nuestros empleados y la eficiencia de nuestras operaciones, siempre buscando la mejora continua en todos los aspectos de nuestra empresa.
                                </p>
                            </div>
                        </motion.div>
                        <div className="relative w-[188px] h-[88px] hidden md:block">
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-12 right-28 w-[800px] h-[4px] bg-green"
                            />
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-12 right-28 w-[4px] h-[140px] bg-green"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref3}
                        initial="hidden"
                        animate={controls3}
                        className="flex flex-col md:flex-row justify-between"
                    >
                        <div className="relative w-[188px] h-[88px] hidden md:block">
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-10 left-28 w-[800px] h-[4px] bg-green"
                            />
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-10 left-28 w-[4px] h-[140px] bg-green"
                            />
                        </div>
                        <motion.div
                            variants={slideInFromRight}
                            className='flex flex-col md:flex-row w-full md:w-2/3 space-y-4 md:space-y-0 md:space-x-8 justify-center mt-4 md:mt-0'
                        >
                            <img src={StepImage6} alt="Vanguardia" loading="lazy" className='h-32 md:hidden' />
                            <div className="flex flex-col space-y-2 md:space-y-4 justify-center text-center md:text-end">
                                <h2 className="text-2xl md:text-3xl text-black">Vanguardia</h2>
                                <p className='text-darkgray text-sm md:text-base'>
                                    Nos destacamos por nuestra eficiencia, una sólida cultura empresarial y beneficios excepcionales. Nuestra competitividad se fundamenta en procesos productivos eficientes y una mentalidad empresarial moderna.
                                </p>
                            </div>
                            <img src={StepImage2} alt="Vanguardia" loading="lazy" className='h-40 hidden md:block' />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        ref={ref4}
                        initial="hidden"
                        animate={controls4}
                        className="flex flex-col-reverse md:flex-row justify-between"
                    >
                        <motion.div
                            variants={slideInFromLeft}
                            className='flex flex-col md:flex-row w-full md:w-2/3 space-y-4 md:space-y-0 md:space-x-8 justify-center mt-4 md:mt-0'
                        >
                            <img src={StepImage3} alt="Innovación" loading="lazy" className='h-40 hidden md:block' />
                            <img src={StepImage7} alt="Innovación" loading="lazy" className='h-32 md:hidden' />
                            <div className="flex flex-col space-y-2 md:space-y-4 justify-center text-center md:text-left">
                                <h2 className="text-2xl md:text-3xl text-black">Innovación</h2>
                                <p className='text-darkgray text-sm md:text-base'>
                                    Impulsamos la evolución constante en tecnología, enfoque y gestión, con el objetivo de mantenernos a la vanguardia del mercado y ofrecer soluciones de calidad que superen las expectativas.
                                </p>
                            </div>
                        </motion.div>
                        <div className="relative w-[188px] h-[88px] hidden md:block">
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-8 right-28 w-[800px] h-[4px] bg-green"
                            />
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-8 right-28 w-[4px] h-[180px] bg-green"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref5}
                        initial="hidden"
                        animate={controls5}
                        className="flex flex-col md:flex-row justify-between"
                    >
                        <div className="relative w-[188px] h-[88px] mt-4 hidden md:block">
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-2 left-28 w-[750px] h-[4px] bg-green"
                            />
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-2 left-28 w-[4px] h-[200px] bg-green"
                            />
                        </div>
                        <motion.div
                            variants={slideInFromRight}
                            className='flex flex-col md:flex-row w-full md:w-2/3 space-y-4 md:space-y-0 md:space-x-8 justify-center mt-4 md:mt-0'
                        >
                            <img src={StepImage8} alt="Ganancia mutua" loading="lazy" className='h-24 md:hidden' />
                            <div className="flex flex-col space-y-2 md:space-y-4 justify-center text-center md:text-end">
                                <h2 className="text-2xl md:text-3xl text-black">Ganancia mutua</h2>
                                <p className='text-darkgray text-sm md:text-base'>
                                    Nos enfocamos en generar valor para nuestros clientes, promoviendo un desarrollo conjunto y una colaboración que nos permita alcanzar el éxito de manera compartida.
                                </p>
                            </div>
                            <img src={StepImage4} alt="Ganancia mutua" loading="lazy" className='h-32 hidden md:block' />
                        </motion.div>
                    </motion.div>
                </section>

                <section className="px-8 md:px-16 py-12 md:py-24 bg-lightgreen">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col justify-center mb-6 pb-6">
                            <h2 className="text-2xl md:text-3xl mb-2 text-red font-medium text-center md:text-start">Espíritu Empresarial</h2>
                            <p className="text-darkgray text-sm md:text-base text-center md:text-start">
                                <strong>Expertos</strong> en dispositivos médicos desechables para uso en anestesia, purificación de sangre, infusión y cuidado de heridas.
                            </p>
                        </div>
                        <div className="relative w-full md:w-[188px] h-[40px] md:h-[88px] hidden md:block">
                            <div className="absolute top-4 right-0 md:right-28 w-full md:w-[800px] h-[4px] bg-red"></div>
                            <div className="absolute top-4 right-0 md:right-28 w-[4px] h-[80px] md:h-[140px] bg-red"></div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 -mb-32 md:-mb-52">
                            {servicesBusiness.map((service, index) => (
                                <div
                                    key={service.id}
                                    className='relative bg-white p-4 md:p-6 shadow-[-5px_5px_5px_0px_rgba(0,0,0,0.2)] rounded-lg space-y-3 md:space-y-4 text-center'
                                >
                                    <img
                                        src={service.icon}
                                        alt="Icono"
                                        loading="lazy"
                                        className="w-16 h-16 md:w-20 md:h-20 mx-auto"
                                    />
                                    <h2 className="text-lg md:text-xl text-black">{service.title}</h2>
                                    <p className='text-darkgray text-sm md:text-base'>
                                        {service.description}
                                    </p>

                                    {index < servicesBusiness.length - 1 && (
                                        <div className="absolute top-16 right-0 md:flex items-center transform translate-x-24 hidden">
                                            <div className="h-[4px] bg-red w-24"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className='px-8 md:px-16 pt-12 pb-24 md:py-24 mt-32 md:mt-32'>
                    <div className="container mx-auto flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 order-1 md:order-none">
                            <img
                                src={bannerImage}
                                alt="Compromiso con el futuro"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        <div className="w-full md:w-1/2 text-center md:text-right order-2 md:order-none">
                            <h2 className="text-2xl md:text-3xl mb-2 text-green font-medium">Compromiso con el futuro</h2>
                            <p className="mb-8 md:mb-12 text-darkgray text-sm md:text-base">
                                En Baihe Medical, nos mantenemos fieles a nuestros valores fundamentales: credibilidad, responsabilidad por la vida, búsqueda de la excelencia y satisfacción de nuestros clientes.
                                <br /><br />
                                Seguiremos enfocados en el diseño, desarrollo, producción y comercialización de dispositivos médicos desechables, siempre con un firme compromiso hacia el bienestar de los pacientes. Nuestro objetivo es consolidarnos como el proveedor líder de soluciones integrales en consumibles médicos desechables a nivel mundial, impulsando la innovación y la calidad en cada uno de nuestros productos.
                            </p>
                            <div className="flex justify-center md:justify-end">
                                <Button
                                    color="bg-green"
                                    text="Conoce nuestros productos"
                                    onClick={() => navigate('/products')}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-8 md:space-y-16">
                    <Carousel slides={1} images={redImages} />
                    <Carousel slides={1} images={blackImages} />
                    <Carousel slides={1} images={greenImages} />
                </section>

                <section className="py-12 md:py-12 px-8 md:px-16 -mt-2 bg-lightgreen grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-0">
                    <div className="flex justify-center md:justify-start order-2 md:order-1">
                        <div className='flex flex-col items-center space-y-3 md:space-y-4'>
                            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                                <img src={isoIcon} alt="ISO" loading="lazy" className="w-10 h-10 md:w-12 md:h-12" />
                                <img src={ceIcon} alt="CE" loading="lazy" className="w-10 h-10 md:w-12 md:h-12" />
                                <img src={fdaIcon} alt="FDA" loading="lazy" className="w-20 h-10 md:w-24 md:h-12" />
                            </div>
                            <Button
                                color="bg-red"
                                text="Conoce nuestros productos"
                                onClick={() => navigate('/products')}
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

export default HomeView;