import React from 'react';
import MainLayout from '../components/MainLayout';
import Carousel from '../components/Carousel';
import Button from '../components/Button';

import peopleImage from '../assets/images/people.svg';

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
                        <Button color="bg-green" text="Conoce nuestros productos" />
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
                            >
                                <div className="space-y-4">
                                    <h2 className={`text-xl ${service.color ? 'text-red' : ''}`}>{service.title}</h2>
                                    <img
                                        src={service.icon}
                                        alt="Icono"
                                        className="w-20 h-20 mx-auto"
                                    />
                                    <p className='text-darkgray'>
                                        {service.description}
                                    </p>
                                </div>
                                <Button
                                    color={service.color ? 'bg-red' : 'bg-green'}
                                    text="Ver más"
                                />
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
                        {products.map((product) => (
                            <div key={product.id} className="relative">
                                <p className='mb-3 text-darkgray'>{product.title}</p>
                                <img
                                    src={product.image}
                                    alt="Producto"
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                                <div className="absolute bottom-4 right-4">
                                    <Button
                                        color="bg-red"
                                        text="Ver más"
                                    />
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
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-12 py-24 space-y-16">
                    <div className="flex row justify-between">
                        <div className="relative w-[188px] h-[88px]">
                            <div className="absolute top-4 left-28 w-[700px] h-[4px] bg-[#6fb71e]"></div>
                            <div className="absolute top-4 left-28 w-[4px] h-[125px] bg-[#6fb71e]"></div>
                        </div>
                        <div className='flex flex-col w-2/3 space-y-4 justify-center text-end'>
                            <h2 className="text-3xl text-green font-medium">Valores fundamentales</h2>
                            <p className='text-darkgray'>Innovamos insumos médicos certificados para anestesia, purificación, infusiones y cuidado de heridas, mejorando vidas globalmente.</p>
                        </div>
                    </div>

                    <div className="flex row justify-between">
                        <div className='flex flex-row w-2/3 space-x-8 justify-center'>
                            <img src={StepImage1} alt="Paso 1" className='h-40' />
                            <div className="flex flex-col space-y-4 justify-center">
                                <h2 className="text-3xl text-black">Estabilidad</h2>
                                <p className='text-darkgray'>Mantenemos un compromiso constante con la calidad de nuestros productos, la satisfacción de nuestros empleados y la eficiencia de nuestras operaciones, siempre buscando la mejora continua en todos los aspectos de nuestra empresa.</p>
                            </div>
                        </div>
                        <div className="relative w-[188px] h-[88px]">
                            <div className="absolute top-8 right-28 w-[800px] h-[4px] bg-green"></div>
                            <div className="absolute top-8 right-28 w-[4px] h-[160px] bg-green"></div>
                        </div>
                    </div>

                    <div className="flex row justify-between">
                        <div className="relative w-[188px] h-[88px]">
                            <div className="absolute top-8 left-28 w-[800px] h-[4px] bg-green"></div>
                            <div className="absolute top-8 left-28 w-[4px] h-[160px] bg-green"></div>
                        </div>
                        <div className='flex flex-row w-2/3 space-x-8 justify-center'>
                            <div className="flex flex-col space-y-4 justify-center text-end">
                                <h2 className="text-3xl text-black">Vanguardia</h2>
                                <p className='text-darkgray'>Nos destacamos por nuestra eficiencia, una sólida cultura empresarial y beneficios excepcionales. Nuestra competitividad se fundamenta en procesos productivos eficientes y una mentalidad empresarial moderna.</p>
                            </div>
                            <img src={StepImage2} alt="Paso 2" className='h-40' />
                        </div>
                    </div>

                    <div className="flex row justify-between">
                        <div className='flex flex-row w-2/3 space-x-8 justify-center'>
                            <img src={StepImage3} alt="Paso 3" className='h-40' />
                            <div className="flex flex-col space-y-4 justify-center">
                                <h2 className="text-3xl text-black">Innovación</h2>
                                <p className='text-darkgray'>Impulsamos la evolución constante en tecnología, enfoque y gestión, con el objetivo de mantenernos a la vanguardia del mercado y ofrecer soluciones de calidad que superen las expectativas.</p>
                            </div>
                        </div>
                        <div className="relative w-[188px] h-[88px]">
                            <div className="absolute top-8 right-28 w-[800px] h-[4px] bg-green"></div>
                            <div className="absolute top-8 right-28 w-[4px] h-[160px] bg-green"></div>
                        </div>
                    </div>

                    <div className="flex row justify-between">
                        <div className="relative w-[188px] h-[88px]">
                            <div className="absolute top-8 left-28 w-[650px] h-[4px] bg-green"></div>
                            <div className="absolute top-8 left-28 w-[4px] h-[225px] bg-green"></div>
                        </div>
                        <div className='flex flex-row w-2/3 space-x-8 justify-center'>
                            <div className="flex flex-col space-y-4 justify-center text-end">
                                <h2 className="text-3xl text-black">Ganancia mutua</h2>
                                <p className='text-darkgray'>Nos enfocamos en generar valor para nuestros clientes, promoviendo un desarrollo conjunto y una colaboraciónque nos permita alcanzar el éxito de manera compartida</p>
                            </div>
                            <img src={StepImage4} alt="Paso 4" className='h-40' />
                        </div>
                    </div>
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
                        <Button
                            color="bg-green"
                            text="Conoce nuestros productos"
                        />
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