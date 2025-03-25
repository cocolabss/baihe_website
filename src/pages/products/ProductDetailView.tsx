// ProductDetailView.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import MainLayout from '../../components/MainLayout';
import Button from '../../components/Button';

import { products } from '../../utils/productsData';

const ProductDetailView: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const productId = id ? parseInt(id, 10) : NaN;

    function findProductAndCategory(productId: number) {
        for (const category of products) {
            const product = category.products?.find(p => p.id === productId);
            if (product) return { product, category };
        }
        return { product: undefined, category: undefined };
    }

    const { product, category } = findProductAndCategory(productId);
    const categoryName = category?.title || "Categoría";

    if (!product) {
        return (
            <MainLayout>
                <div className="p-12 text-center">
                    <h2 className="text-2xl text-red">Producto no encontrado</h2>
                    <Button
                        color="bg-green"
                        text="Volver al catálogo"
                        onClick={() => navigate('/')}
                    />
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <section className="p-12">
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
                    <span>/</span>
                    <button
                        onClick={() => navigate(-1)}
                        className="hover:text-red transition-colors hover:underline"
                    >
                        {categoryName}
                    </button>
                    <span>/</span>
                    <span className="text-red">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-medium text-red">{product.name}</h1>
                            <div className="prose max-w-none text-darkgray text-justify">
                                {product.description?.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        {i < product.description!.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                )) || "Descripción detallada del producto..."}
                            </div>
                        </div>

                        {product.specifications && (
                            <div className="mt-8 text-justify">
                                <h3 className="text-xl font-medium mb-4 text-green">{product.specificationsTitle}</h3>
                                <ul className="list-disc pl-5 space-y-2 text-darkgray marker:text-green">
                                    {product.specifications.map((spec, index) => (
                                        <li key={index}>{spec}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="space-y-6">
                        <div className="shadow-[-5px_5px_5px_0px_rgba(0,0,0,0.2)] overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {product.detailImages?.map((detail, index) => (
                                <div key={index} className="border rounded-lg overflow-hidden">
                                    <img
                                        src={detail.image}
                                        alt={`Detalle ${index + 1}`}
                                        className="w-full h-32 object-cover"
                                    />
                                    {detail.subtitle && (
                                        <p className="text-right text-sm text-darkgray p-2">
                                            {detail.subtitle}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default ProductDetailView;