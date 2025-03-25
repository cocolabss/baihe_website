import { useLocation } from 'react-router-dom';

import logoImage from '../assets/images/logo_red.svg';
import searchIcon from '../assets/icons/search_icon.svg';

const Header = () => {
    const location = useLocation();

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-12">
                <img src={logoImage} alt="Logo rojo" className="h-20 w-44" />
                <nav className="flex items-center space-x-24">
                    <ul className="flex space-x-24 text-black">
                        <li>
                            <a
                                href="/"
                                className={`hover:text-red ${location.pathname === '/' ? 'text-red' : ''}`}
                            >
                                HOME
                            </a>
                        </li>
                        <li>
                            <a
                                href="/products"
                                className={`hover:text-red ${location.pathname === '/products' ? 'text-red' : ''}`}
                            >
                                CATÁLOGO
                            </a>
                        </li>
                        <li>
                            <a
                                href="/news"
                                className={`hover:text-red ${location.pathname === '/news' ? 'text-red' : ''}`}
                            >
                                NOTICIAS
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className={`hover:text-red ${location.pathname === '/contact' ? 'text-red' : ''}`}
                            >
                                CONTACTO
                            </a>
                        </li>
                    </ul>
                    <img src={searchIcon} alt="Search" className="h-6 w-6" />
                </nav>
            </div>
        </header>
    );
};

export default Header;