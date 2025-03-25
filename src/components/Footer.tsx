import { useState } from 'react';
import logoImage from '../assets/images/logo_white.svg';
import supportIcon from '../assets/icons/support_icon.svg';
import facebookIcon from '../assets/icons/social/facebook_icon.svg';
import instagramIcon from '../assets/icons/social/instagram_icon.svg';
import xIcon from '../assets/icons/social/x_icon.svg';
import youtubeIcon from '../assets/icons/social/youtube_icon.svg';
import locationIcon from '../assets/icons/location_icon.svg'
import emailRedIcon from '../assets/icons/email_red_icon.svg'
import emailGreenIcon from '../assets/icons/email_green_icon.svg'
import { CountryCode, countryInfo } from '../utils/countryData';
import Button from './Button';

const Footer = () => {
    const [selectedCountry, setSelectedCountry] = useState<CountryCode | null>(null);

    const countries: CountryCode[] = ['PERÚ', 'COLOMBIA', 'VENEZUELA', 'CHILE', 'ECUADOR', 'ARGENTINA', 'URUGUAY', 'PARAGUAY', 'BOLIVIA'];

    return (
        <footer className="bg-black text-white py-8 px-12">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-4xl font-medium">Contáctanos</h2>
                        <p className="mt-2">Vendemos a nivel global y tenemos gran presencia a nivel nacional.</p>
                    </div>
                    <img src={supportIcon} alt="Imagen" className="w-32 h-32" />
                </div>

                <div className="flex flex-row space-x-4 mb-12">
                    {countries.map((country) => (
                        <button
                            key={country}
                            className={`px-4 py-2 rounded-full w-full ${selectedCountry === country ? 'bg-red text-white' : 'bg-white text-black'
                                } hover:bg-red hover:text-white`}
                            onClick={() => setSelectedCountry(country)}
                        >
                            {country}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-24 mb-12 relative">
                    <div>
                        <form>
                            <div className="mb-2">
                                <label htmlFor="nombre" className="block mb-1">Nombre</label>
                                <input type="text" id="nombre" placeholder="Tu nombre completo" className="w-full py-2 px-4 rounded-2xl" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="telefono" className="block mb-1">Número de celular</label>
                                <input type="number" id="telefono" placeholder="Tu número de celular" className="w-full py-2 px-4 rounded-2xl" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="email" className="block mb-1">Correo electrónico</label>
                                <input type="email" id="email" placeholder="Tu correo electrónico" className="w-full py-2 px-4 rounded-2xl" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="mensaje" className="block mb-1">Mensaje</label>
                                <textarea id="mensaje" placeholder="Escribe tu mensaje aquí..." rows={4} className="w-full py-2 px-4 rounded-2xl"></textarea>
                            </div>
                            <Button
                                color="bg-green"
                                text="Enviar"
                            />
                        </form>
                    </div>
                    <div className="relative">
                        {selectedCountry && countryInfo[selectedCountry] && (
                            <div className="absolute -top-4 -left-12 z-10">
                                <div className="bg-white text-black p-4 rounded-lg shadow-lg w-64">
                                    <div className='flex row'>
                                        <img src={locationIcon} alt="Ubicación" className='w-6 h-6' />
                                        <h3 className="text-xl text-red mb-2 ml-1">{countryInfo[selectedCountry].name}</h3>
                                    </div>
                                    <div className='flex flex-col border-t-2 py-3 text-sm'>
                                        <p className='text-darkgray'>Juan Mesa</p>
                                        <div className='flex row items-center mt-2 mb-3'>
                                            <img src={emailRedIcon} alt="Correo principal" className="w-4 h-4" />
                                            <p className='text-red ml-2'>juan@bahihemedical.com</p>
                                        </div>
                                        <Button
                                            color="bg-green"
                                            text="Contactar vía email"
                                        />
                                    </div>
                                    <div className='flex flex-col border-t-2 py-3 text-sm'>
                                        <p className='text-darkgray'>Gerencia General</p>
                                        <div className='flex row items-center mt-1'>
                                            <img src={emailGreenIcon} alt="Correo principal" className="w-4 h-4" />
                                            <p className='text-green ml-2'>hyh@baihemedical.com</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col border-t-2 py-3 text-sm'>
                                        <p className='text-darkgray'>Gerencia Regional Colombia, Ecuador, Chile, Venezuela, Perú</p>
                                        <div className='flex row items-center mt-1'>
                                            <img src={emailGreenIcon} alt="Correo principal" className="w-4 h-4" />
                                            <p className='text-green ml-2'>juan@baihemedical.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="bg-gray-500 w-full h-full flex justify-center items-center text-2xl">
                            Mapa aquí
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-24 justify-between items-center border-t border-white pt-8 mb-12">
                    <div className="space-y-6">
                        <img src={logoImage} alt="Logo blanco" className="w-96" />
                        <p>Innovamos insumos médicos certificados para anestesia, purificación, infusiones y cuidado de heridas, mejorando vidas globalmente.</p>
                    </div>
                    <div className='space-y-6'>
                        <div className='flex row justify-center items-center'>
                            <p className='mr-12'>Síguenos en nuestras redes:</p>
                            <div className="flex row justify-center items-center space-x-4">
                                <a href="#" className="text-white hover:text-red">
                                    <img src={facebookIcon} alt="Facebook" className="h-12 w-12" />
                                </a>
                                <a href="#" className="text-white hover:text-red">
                                    <img src={instagramIcon} alt="Instagram" className="h-12 w-12" />
                                </a>
                                <a href="#" className="text-white hover:text-red">
                                    <img src={xIcon} alt="X" className="h-12 w-12" />
                                </a>
                                <a href="#" className="text-white hover:text-red">
                                    <img src={youtubeIcon} alt="Youtube" className="h-12 w-12" />
                                </a>
                            </div>
                        </div>
                        <div className="border-t border-white flex justify-evenly items-center pt-6">
                            <a href="#" className="text-white hover:text-red">HOME</a>
                            <a href="#" className="text-white hover:text-red">CATÁLOGO</a>
                            <a href="#" className="text-white hover:text-red">NOTICIAS</a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white text-center">
                    <p className="mt-8">Copyright © 2025 Baihe Medical Tecnology - Desarrollado por Coco Labs S.A.S</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;