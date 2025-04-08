import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import MainLayout from '../components/MainLayout';
import Carousel from '../components/Carousel';
import Button from '../components/Button';

import peopleImage from '../assets/images/people.png';

import isoIcon from '../assets/icons/seal/iso.svg';
import fdaIcon from '../assets/icons/seal/fda.svg';
import ceIcon from '../assets/icons/seal/ce.svg';

import StepImage1 from '../assets/images/timeline/step_1.svg';
import StepImage2 from '../assets/images/timeline/step_2.svg';
import StepImage3 from '../assets/images/timeline/step_3.svg';
import StepImage4 from '../assets/images/timeline/step_4.svg';

import bannerRedImage1 from '../assets/images/banners/red/banner_1.png';
import bannerRedImage2 from '../assets/images/banners/red/banner_2.png';
import bannerRedImage3 from '../assets/images/banners/red/banner_3.png';
import bannerBlackImage1 from '../assets/images/banners/black/banner_1.png';
import bannerBlackImage2 from '../assets/images/banners/black/banner_2.png';
import bannerBlackImage3 from '../assets/images/banners/black/banner_3.png';
import bannerGreenImage1 from '../assets/images/banners/green/banner_1.png';
import bannerGreenImage2 from '../assets/images/banners/green/banner_2.png';
import bannerGreenImage3 from '../assets/images/banners/green/banner_3.png';

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
                <section className="grid grid-cols-1 md:grid-cols-2 md:gap-24 pb-24 px-12 pt-12 items-center">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h1 className="text-5xl text-green font-medium">Innovación y excelencia en insumos médicos</h1>
                            <p>
                                Innovamos insumos médicos certificados para anestesia, purificación, infusiones y cuidado de heridas, mejorando vidas globalmente.
                            </p>
                        </div>
                        <Button color="bg-green" text="Conoce nuestros productos" onClick={() => navigate('/products')} />
                    </div>
                    <div className="justify-self-end">
                        <img src={peopleImage} alt="Imagen" className="w-full h-[450px] rounded-lg" />
                    </div>
                </section>

                <section className="p-12 relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 -mt-16 -mb-40">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className={`bg-white p-6 shadow-[-5px_5px_5px_0px_rgba(0,0,0,0.2)] rounded-lg space-y-8 text-center ${index === 1 || index === 3 ? 'transform translate-y-12' : ''}`}
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}
                            >
                                <div className="space-y-4">
                                    <h2 className={`text-xl transition-colors ${hoverIndex === index ? 'text-red' : 'text-black'}`}>
                                        {service.title}
                                    </h2>
                                    <img
                                        src={hoverIndex === index ? service.iconHover : service.icon}
                                        alt="Icono"
                                        className="w-20 h-20 mx-auto transition-transform"
                                    />
                                    <p className='text-darkgray'>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="pt-60 px-12 pb-24 bg-lightgreen">
                    <h2 className="text-3xl mb-2 font-medium">Áreas de Especialización</h2>
                    <p className="mb-12 text-darkgray">
                        <strong>Expertos</strong> en dispositivos médicos desechables para uso en anestesia,<br />purificación de sangre, infusión y cuidado de heridas.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                ref={el => setProductRef(el, index)}
                                className="relative"
                            >
                                <p className='mb-3 text-darkgray'>{product.title}</p>
                                <div className="relative w-full h-96 rounded-lg overflow-hidden">
                                    {!loadedImages[index] && (
                                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg">
                                            <div className="h-full w-full flex items-center justify-center">
                                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}

                                    <img
                                        alt={`Producto ${product.title}`}
                                        className={`w-full h-96 object-cover rounded-lg transition-opacity duration-300 ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
                                        loading="lazy"
                                        data-src={products[index].image}
                                    />
                                </div>
                                <div className="absolute bottom-4 right-4">
                                    <Button color="bg-red" text="Ver más" onClick={() => navigate(`/products`)} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 mt-20 items-center">
                        <p className='text-darkgray'>
                            Desde 1999, Baihe Medical se destaca como uno de los principales fabricantes de insumos médicos desechables.
                        </p>
                        <div className="flex justify-end">
                            <div className='flex flex-col items-center space-y-4'>
                                <div className="flex row space-x-6">
                                    <img src={isoIcon} alt="ISO" className="w-12 h-12" />
                                    <img src={ceIcon} alt="CE" className="w-12 h-12" />
                                    <img src={fdaIcon} alt="FDA" className="w-24 h-12" />
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

                <section className="px-12 py-24 space-y-16">
                    <motion.div
                        ref={ref1}
                        initial="hidden"
                        animate={controls1}
                        className="flex row justify-between"
                    >
                        <div className="relative w-[188px] h-[88px]">
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-4 left-28 w-[700px] h-[4px] bg-[#6fb71e]"
                            />
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-4 left-28 w-[4px] h-[125px] bg-[#6fb71e]"
                            />
                        </div>
                        <motion.div
                            variants={slideInFromRight}
                            className='flex flex-col w-2/3 space-y-4 justify-center text-end'
                        >
                            <h2 className="text-3xl text-green font-medium">Valores fundamentales</h2>
                            <p className='text-darkgray'>Innovamos insumos médicos certificados para anestesia, purificación, infusiones y cuidado de heridas, mejorando vidas globalmente.</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        ref={ref2}
                        initial="hidden"
                        animate={controls2}
                        className="flex row justify-between"
                    >
                        <motion.div
                            variants={slideInFromLeft}
                            className='flex flex-row w-2/3 space-x-8 justify-center'
                        >
                            <img src={StepImage1} alt="Estabilidad" className='h-40' />
                            <div className="flex flex-col space-y-4 justify-center">
                                <h2 className="text-3xl text-black">Estabilidad</h2>
                                <p className='text-darkgray'>Mantenemos un compromiso constante con la calidad de nuestros productos, la satisfacción de nuestros empleados y la eficiencia de nuestras operaciones, siempre buscando la mejora continua en todos los aspectos de nuestra empresa.</p>
                            </div>
                        </motion.div>
                        <div className="relative w-[188px] h-[88px]">
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-8 right-28 w-[800px] h-[4px] bg-green"
                            />
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-8 right-28 w-[4px] h-[160px] bg-green"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref3}
                        initial="hidden"
                        animate={controls3}
                        className="flex row justify-between"
                    >
                        <div className="relative w-[188px] h-[88px]">
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-8 left-28 w-[800px] h-[4px] bg-green"
                            />
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-8 left-28 w-[4px] h-[160px] bg-green"
                            />
                        </div>
                        <motion.div
                            variants={slideInFromRight}
                            className='flex flex-row w-2/3 space-x-8 justify-center'
                        >
                            <div className="flex flex-col space-y-4 justify-center text-end">
                                <h2 className="text-3xl text-black">Vanguardia</h2>
                                <p className='text-darkgray'>Nos destacamos por nuestra eficiencia, una sólida cultura empresarial y beneficios excepcionales. Nuestra competitividad se fundamenta en procesos productivos eficientes y una mentalidad empresarial moderna.</p>
                            </div>
                            <img src={StepImage2} alt="Vanguardia" className='h-40' />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        ref={ref4}
                        initial="hidden"
                        animate={controls4}
                        className="flex row justify-between"
                    >
                        <motion.div
                            variants={slideInFromLeft}
                            className='flex flex-row w-2/3 space-x-8 justify-center'
                        >
                            <img src={StepImage3} alt="Innovación" className='h-40' />
                            <div className="flex flex-col space-y-4 justify-center">
                                <h2 className="text-3xl text-black">Innovación</h2>
                                <p className='text-darkgray'>Impulsamos la evolución constante en tecnología, enfoque y gestión, con el objetivo de mantenernos a la vanguardia del mercado y ofrecer soluciones de calidad que superen las expectativas.</p>
                            </div>
                        </motion.div>
                        <div className="relative w-[188px] h-[88px]">
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-8 right-28 w-[800px] h-[4px] bg-green"
                            />
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-8 right-28 w-[4px] h-[160px] bg-green"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref5}
                        initial="hidden"
                        animate={controls5}
                        className="flex row justify-between"
                    >
                        <div className="relative w-[188px] h-[88px]">
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-8 left-28 w-[650px] h-[4px] bg-green"
                            />
                            <motion.div
                                variants={fadeIn}
                                className="absolute top-8 left-28 w-[4px] h-[225px] bg-green"
                            />
                        </div>
                        <motion.div
                            variants={slideInFromRight}
                            className='flex flex-row w-2/3 space-x-8 justify-center'
                        >
                            <div className="flex flex-col space-y-4 justify-center text-end">
                                <h2 className="text-3xl text-black">Ganancia mutua</h2>
                                <p className='text-darkgray'>Nos enfocamos en generar valor para nuestros clientes, promoviendo un desarrollo conjunto y una colaboraciónque nos permita alcanzar el éxito de manera compartida.</p>
                            </div>
                            <img src={StepImage4} alt="Ganancia mutua" className='h-40' />
                        </motion.div>
                    </motion.div>
                </section>

                <section className="px-12 py-24 bg-lightgreen">
                    <div className="flex row justify-between">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl mb-2 text-red font-medium">Espíritu Empresarial</h2>
                            <p className="mb-12 text-darkgray">
                                <strong>Expertos</strong> en dispositivos médicos desechables para uso en anestesia,<br />purificación de sangre, infusión y cuidado de heridas.
                            </p>
                        </div>
                        <div className="relative w-[188px] h-[88px]">
                            <div className="absolute top-4 right-28 w-[800px] h-[4px] bg-red"></div>
                            <div className="absolute top-4 right-28 w-[4px] h-[140px] bg-red"></div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 -mb-52">
                            {servicesBusiness.map((service, index) => (
                                <div
                                    key={service.id}
                                    className='relative bg-white p-6 shadow-[-5px_5px_5px_0px_rgba(0,0,0,0.2)] rounded-lg space-y-4 text-center'
                                >
                                    <img
                                        src={service.icon}
                                        alt="Icono"
                                        className="w-20 h-20 mx-auto"
                                    />
                                    <h2 className="text-black">{service.title}</h2>
                                    <p className='text-darkgray'>
                                        {service.description}
                                    </p>

                                    {index < servicesBusiness.length - 1 && (
                                        <div className="absolute top-16 right-0 flex items-center transform translate-x-24">
                                            <div className="h-[4px] bg-red w-24"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className='px-12 py-24 mt-32 flex justify-end items-center'>
                    <div className="w-1/2 text-right">
                        <h2 className="text-3xl mb-2 text-green font-medium">Compromiso con el futuro</h2>
                        <p className="mb-12 text-darkgray">En Baihe Medical, nos mantenemos fieles a nuestros valores fundamentales: credibilidad, responsabilidad por la vida, búsqueda de la excelencia y satisfacción de nuestros clientes.<br /><br />Seguiremos enfocados en el diseño, desarrollo, producción y comercialización de dispositivos médicos desechables, siempre con un firme compromiso hacia el bienestar de los pacientes. Nuestro objetivo es consolidarnos como el proveedor líder de soluciones integrales en consumibles médicos desechables a nivel mundial, impulsando la innovación y la calidad en cada uno de nuestros productos.</p>
                        <div className="flex justify-end">
                            <Button
                                color="bg-green"
                                text="Conoce nuestros productos"
                                onClick={() => navigate('/products')}
                            />
                        </div>
                    </div>
                </section>

                <section className="space-y-24">
                    <Carousel slides={3} images={redImages} />
                    <Carousel slides={3} images={blackImages} />
                    <Carousel slides={3} images={greenImages} />
                </section>

                <section className="p-12 -mt-2 bg-lightgreen grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="flex justify-start">
                        <div className='flex flex-col items-center space-y-4'>
                            <div className="flex row space-x-6">
                                <img src={isoIcon} alt="ISO" className="w-12 h-12" />
                                <img src={ceIcon} alt="CE" className="w-12 h-12" />
                                <img src={fdaIcon} alt="FDA" className="w-24 h-12" />
                            </div>
                            <Button
                                color="bg-red"
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

export default HomeView;