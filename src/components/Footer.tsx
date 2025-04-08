import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

import Button from './Button';

import logoImage from '../assets/images/logo_white.svg';
import supportIcon from '../assets/icons/support_icon.svg';
import locationIcon from '../assets/icons/location_icon.svg';
import emailRedIcon from '../assets/icons/email_red_icon.svg';
import emailGreenIcon from '../assets/icons/email_green_icon.svg';

import { CountryCode, countryInfo } from '../utils/countryData';

delete (L.Icon.Default.prototype as { _getIconUrl?: string })._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

function ChangeView({ center, zoom }: { center: [number, number]; zoom: number }) {
    const map = useMap();
    useEffect(() => {
        map.setView(center, zoom);
    }, [center, zoom, map]);
    return null;
}

const Footer = () => {
    const location = useLocation();

    const [selectedCountry, setSelectedCountry] = useState<CountryCode | null>(null);
    const [mapCenter, setMapCenter] = useState<[number, number]>([-15.7942, -47.8822]);
    const [zoom, setZoom] = useState<number>(4);

    const countries: CountryCode[] = ['PERÚ', 'COLOMBIA', 'VENEZUELA', 'CHILE', 'ECUADOR', 'ARGENTINA', 'URUGUAY', 'PARAGUAY', 'BOLIVIA'];

    const handleCountrySelect = (country: CountryCode) => {
        setSelectedCountry(country);
        if (countryInfo[country]?.coordinates) {
            setMapCenter([countryInfo[country].coordinates.lat, countryInfo[country].coordinates.lng]);
            setZoom(6);
        }
    };

    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        mensaje: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;

        if (id === 'telefono') {
            const numericValue = value.replace(/[^0-9]/g, '');
            setFormData(prev => ({
                ...prev,
                [id]: numericValue
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [id]: value
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { nombre, telefono, email, mensaje } = formData;
        const subject = `Nuevo contacto de ${nombre}`;
        const body =
            `Nombre: ${nombre}%0A` +
            `Teléfono: ${telefono}%0A` +
            `Email: ${email}%0A` +
            `Mensaje: ${mensaje}%0A` +
            `País: ${selectedCountry || 'No seleccionado'}`;

        window.location.href = `mailto:hyh@baihemedical.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        setFormData({
            nombre: '',
            telefono: '',
            email: '',
            mensaje: ''
        });
    };

    return (
        <footer className="bg-black text-white py-8 px-8 md:px-16">
            <div id='contact' className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">Contáctanos</h2>
                        <p className="mt-1 md:mt-2 text-sm md:text-base">
                            Vendemos a nivel global y tenemos gran presencia a nivel nacional.
                        </p>
                    </div>
                    <img src={supportIcon} alt="Imagen" className="w-24 h-24 md:w-32 md:h-32" />
                </div>

                <div className="w-full mb-8 md:mb-12">
                    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-2 md:gap-4">
                        {countries.map((country) => (
                            <button
                                key={country}
                                className={`flex-1 min-w-[120px] md:min-w-0 px-3 py-2 rounded-full text-sm md:text-base text-center whitespace-nowrap ${selectedCountry === country
                                        ? 'bg-red text-white'
                                        : 'bg-white text-black'
                                    } hover:bg-red hover:text-white transition-colors`}
                                onClick={() => handleCountrySelect(country)}
                            >
                                {country}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 mb-8 md:mb-12 relative">
                    <div className="order-2 lg:order-1">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <label htmlFor="nombre" className="block mb-1 text-sm md:text-base">Nombre</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    placeholder="Tu nombre completo"
                                    className="w-full py-2 px-4 rounded-xl md:rounded-2xl text-black text-sm md:text-base"
                                    value={formData.nombre}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="telefono" className="block mb-1 text-sm md:text-base">Número de celular</label>
                                <input
                                    type="tel"
                                    id="telefono"
                                    placeholder="Tu número de celular"
                                    className="w-full py-2 px-4 rounded-xl md:rounded-2xl text-black text-sm md:text-base"
                                    value={formData.telefono}
                                    onChange={handleInputChange}
                                    required
                                    pattern="[0-9]*"
                                    inputMode="numeric"
                                    maxLength={15}
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="email" className="block mb-1 text-sm md:text-base">Correo electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Tu correo electrónico"
                                    className="w-full py-2 px-4 rounded-xl md:rounded-2xl text-black text-sm md:text-base"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="mensaje" className="block mb-1 text-sm md:text-base">Mensaje</label>
                                <textarea
                                    id="mensaje"
                                    placeholder="Escribe tu mensaje aquí..."
                                    rows={4}
                                    className="w-full py-2 px-4 rounded-xl md:rounded-2xl text-black text-sm md:text-base"
                                    value={formData.mensaje}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-end md:justify-start">
                                <Button
                                    color="bg-green"
                                    text="Enviar"
                                    type="submit"
                                />
                            </div>
                        </form>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        {selectedCountry && countryInfo[selectedCountry] && (
                            <div className="absolute top-4 left-4 md:top-6 md:left-6 lg:-top-4 lg:-left-12 z-10 w-[calc(100%-2rem)] md:w-auto">
                                <div className="bg-white text-black p-3 md:p-4 rounded-lg shadow-lg w-full md:w-56 lg:w-64">
                                    <div className='flex items-center'>
                                        <img src={locationIcon} alt="Ubicación" className='w-5 h-5 md:w-6 md:h-6' />
                                        <h3 className="text-base md:text-lg lg:text-xl text-red mb-1 md:mb-2 ml-1">
                                            {countryInfo[selectedCountry].name}
                                        </h3>
                                    </div>

                                    <div className='flex flex-col border-t-2 py-2 md:py-3 text-xs md:text-sm'>
                                        <p className='text-darkgray'>{countryInfo[selectedCountry].nameRegional}</p>
                                        <div className='flex items-center mt-1 md:mt-2 mb-2 md:mb-3'>
                                            <img src={emailRedIcon} alt="Correo principal" className="w-3 h-3 md:w-4 md:h-4" />
                                            <a
                                                href={`mailto:${countryInfo[selectedCountry].emailRegional}`}
                                                className='text-red ml-1 md:ml-2 text-xs md:text-sm hover:underline'
                                            >
                                                {countryInfo[selectedCountry].emailRegional}
                                            </a>
                                        </div>
                                        <Button
                                            color="bg-green"
                                            text="Contactar vía email"
                                            onClick={() => {
                                                const email = countryInfo[selectedCountry].emailRegional;
                                                const subject = `Consulta desde la página web - ${countryInfo[selectedCountry].name}`;
                                                const body = `Hola,\n\nEstoy interesado(a) en recibir más información sobre sus productos o servicios en ${countryInfo[selectedCountry].name}.\n\nGracias.`;
                                                window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                                            }}
                                        />
                                    </div>

                                    <div className='flex flex-col border-t-2 py-2 md:py-3 text-xs md:text-sm'>
                                        <p className='text-darkgray'>Gerencia General</p>
                                        <div className='flex items-center mt-1'>
                                            <img src={emailGreenIcon} alt="Correo principal" className="w-3 h-3 md:w-4 md:h-4" />
                                            <a
                                                href="mailto:hyh@baihemedical.com"
                                                className='text-green ml-1 md:ml-2 text-xs md:text-sm hover:underline'
                                            >
                                                hyh@baihemedical.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] z-0 border-2 border-gray-300 rounded-lg overflow-hidden relative mt-16 sm:mt-0">
                            <MapContainer
                                center={mapCenter}
                                zoom={zoom}
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    minHeight: '300px'
                                }}
                                dragging={true}  // Habilitado para móviles
                                touchZoom={true}  // Habilitado para zoom con gestos
                                zoomControl={true}  // Mostrar controles de zoom
                                scrollWheelZoom={false}
                                doubleClickZoom={false}
                                boxZoom={false}
                                keyboard={false}
                                preferCanvas={true}
                            >
                                <ChangeView center={mapCenter} zoom={zoom} />
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  // Tile más ligero
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    detectRetina={true}  // Mejor visualización en móviles HD
                                />
                                {selectedCountry && countryInfo[selectedCountry]?.coordinates && (
                                    <Marker
                                        position={[
                                            countryInfo[selectedCountry].coordinates.lat,
                                            countryInfo[selectedCountry].coordinates.lng
                                        ]}
                                        icon={L.icon({
                                            iconUrl: markerIcon,
                                            iconRetinaUrl: markerIcon2x,
                                            shadowUrl: markerShadow,
                                            iconSize: [25, 41],  // Tamaño ajustado para móviles
                                            iconAnchor: [12, 41]
                                        })}
                                    >
                                        <Popup className="text-sm font-bold">
                                            {countryInfo[selectedCountry].name}
                                        </Popup>
                                    </Marker>
                                )}
                            </MapContainer>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 justify-between items-center border-t border-white pt-6 md:pt-8 mb-8 md:mb-12">
                    <div className="space-y-3 md:space-y-6 text-center md:text-left">
                        <img src={logoImage} alt="Logo blanco" className="w-64 md:w-80 lg:w-96 mx-auto md:mx-0" />
                        <p className="text-sm md:text-base">
                            Innovamos insumos médicos certificados para anestesia, purificación, infusiones y cuidado de heridas, mejorando vidas globalmente.
                        </p>
                    </div>
                    <div className='space-y-4 md:space-y-6'>
                        <div className="border-t md:border-t-0 border-white pt-4 md:pt-6">
                            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                                <a
                                    href="/"
                                    className={`hover:text-red hover:underline transition-colors duration-300 md:text-xl ${location.pathname === '/' ? 'text-red' : ''
                                        }`}
                                >
                                    HOME
                                </a>
                                <a
                                    href="/products"
                                    className={`hover:text-red hover:underline transition-colors duration-300 md:text-xl ${location.pathname === '/products' ? 'text-red' : ''
                                        }`}
                                >
                                    CATÁLOGO
                                </a>
                                <a
                                    href="/news"
                                    className={`hover:text-red hover:underline transition-colors duration-300 md:text-xl ${location.pathname === '/news' ? 'text-red' : ''
                                        }`}
                                >
                                    NOTICIAS
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white text-center pt-6 md:pt-8">
                    <p className="text-xs md:text-sm">Copyright © 2025 Baihe Medical Tecnology - Desarrollado por Coco Labs S.A.S</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;