import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';

import Button from '../../components/Button';
import MainLayout from '../../components/MainLayout';

import isoIcon from '../../assets/icons/seal/iso.svg';
import fdaIcon from '../../assets/icons/seal/fda.svg';
import ceIcon from '../../assets/icons/seal/ce.svg';

import productsImage from '../../assets/images/products/products_banner.png';

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
                className={`w-full flex justify-between items-center p-4 ${isOpen ? 'text-green' : 'text-black'
                    } hover:text-green transition-colors`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-xl">{title}</h3>
                {isOpen ? (
                    <ChevronDown className={`w-6 h-6 ${isOpen ? 'text-green' : ''}`} />
                ) : (
                    <ChevronRight className="w-6 h-6" />
                )}
            </button>
            {isOpen && (
                <div className="px-4 pt-4 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-24 gap-x-12">
                    {children}
                </div>
            )}
        </div>
    );
};

const ProductCard: React.FC<{ product: ProductItem }> = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-b-3xl overflow-hidden shadow-[-5px_5px_5px_0px_rgba(0,0,0,0.2)] hover:shadow-md transition-shadow">
            <div className="w-full h-48 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4 flex flex-col min-h-[130px]">
                <h4 className="text-darkgray">{product.name}</h4>
                <div className="mt-auto pt-4 flex justify-end items-end">
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

    return (
        <MainLayout>
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
                            onClick={() => navigate('/products')}
                            className="hover:text-red transition-colors hover:underline"
                        >
                            Catálogo
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
                    <img src={productsImage} alt="Imagen" className="w-full h-[450px]" />
                </div>
            </section>

            <section className="p-12 grid grid-cols-1 md:grid-cols-2">
                <div className='flex flex-col space-y-2'>
                    <h2 className="text-3xl text-red">Nuestros productos</h2>
                    <p className='text-darkgray'>
                        Conoce nuestra gama de dispositivos médicos certificados para una atención sanitaria avanzada y confiable.
                    </p>
                </div>
                <div className="flex row justify-end items-center space-x-6">
                    <img src={isoIcon} alt="ISO" className="w-12 h-12" />
                    <img src={ceIcon} alt="CE" className="w-12 h-12" />
                    <img src={fdaIcon} alt="FDA" className="w-24 h-12" />
                </div>
            </section>

            <section className='px-12 pb-12'>
                {products.map((category: ProductCategory) => (
                    <Accordion key={category.id} title={category.title}>
                        {category.products?.map((product: ProductItem) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </Accordion>
                ))}
            </section>

            <section className="p-12 bg-lightgreen grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="flex justify-start">
                    <div className='flex flex-col items-center space-y-4'>
                        <div className="flex row space-x-6">
                            <img src={isoIcon} alt="ISO" className="w-12 h-12" />
                            <img src={ceIcon} alt="CE" className="w-12 h-12" />
                            <img src={fdaIcon} alt="FDA" className="w-24 h-12" />
                        </div>
                        <Button
                            color="bg-red"
                            text="Contácta un asesor"
                        />
                    </div>
                </div>
                <p className='text-darkgray text-right'>
                    Desde 1999, Baihe Medical se destaca como uno de los principales fabricantes de insumos médicos desechables.
                </p>
            </section>
        </MainLayout>
    );
}

export default ProductsView;