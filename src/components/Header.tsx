import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import logoImage from "../assets/images/logo_red.svg";
import searchIcon from "../assets/icons/search_icon.svg";
import { FiMenu, FiX } from "react-icons/fi";

import { ProductCategory } from "../utils/productsData";

interface HeaderProps {
    products: ProductCategory[];
}

const Header: React.FC<HeaderProps> = ({ products = [] }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const searchRef = useRef<HTMLDivElement>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState("");

    const filteredProducts = products.flatMap(category =>
        category.products?.flatMap(product => {
            const lowerQuery = query.toLowerCase();
            if (
                category.title.toLowerCase().includes(lowerQuery) ||
                product.name.toLowerCase().includes(lowerQuery)
            ) {
                return { ...product, categoryName: category.title };
            }
            return [];
        }) || []
    );

    const handleSearchClick = () => {
        setSearchOpen(prev => !prev);
        setQuery("");
    };

    const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
        if (!searchRef.current?.contains(event.relatedTarget)) {
            setSearchOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (!mobileMenuOpen) setSearchOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-4 md:py-2 md:px-12 relative">
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-red focus:outline-none">
                        {mobileMenuOpen ? (
                            <FiX className="h-8 w-8" />
                        ) : (
                            <FiMenu className="h-8 w-8" />
                        )}
                    </button>
                </div>

                <a onClick={() => navigate("/")} className="cursor-pointer absolute left-1/2 transform -translate-x-1/2 md:static md:left-auto md:transform-none">
                    <img src={logoImage} alt="Logo rojo" className="h-16 w-36 md:h-20 md:w-44" />
                </a>

                <div className="md:hidden flex items-center">
                    <img
                        src={searchIcon}
                        alt="Search"
                        className="h-6 w-6 cursor-pointer"
                        onClick={handleSearchClick}
                    />
                </div>

                {searchOpen && (
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute left-4 right-4 top-20 bg-white z-50"
                    >
                        <div className="relative" ref={searchRef}>
                            <input
                                type="text"
                                placeholder="Buscar productos..."
                                className="border border-gray-300 p-2 rounded-md w-full"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                autoFocus
                            />
                            {query && (
                                <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg">
                                    {filteredProducts.map(product => (
                                        <li
                                            key={product.id}
                                            className="p-2 hover:bg-gray-200 cursor-pointer"
                                            onClick={() => {
                                                navigate(`/products/${product.id}`);
                                                setSearchOpen(false);
                                            }}
                                        >
                                            <span className="text-gray-500">{product.categoryName} &gt; </span>
                                            <span>{product.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </motion.div>
                )}

                <nav className="hidden md:flex items-center space-x-6 lg:space-x-24">
                    <ul className="flex space-x-6 lg:space-x-24 text-black">
                        <li>
                            <a href="/" className={`hover:text-red hover:underline transition-colors duration-300 ${location.pathname === "/" ? "text-red underline" : ""}`}>HOME</a>
                        </li>
                        <li>
                            <a href="/products" className={`hover:text-red hover:underline transition-colors duration-300 ${location.pathname === "/products/" ? "text-red underline" : ""}`}>CATÁLOGO</a>
                        </li>
                        <li>
                            <a href="/news" className={`hover:text-red hover:underline transition-colors duration-300 ${location.pathname === "/news/" ? "text-red underline" : ""}`}>NOTICIAS</a>
                        </li>
                        <li>
                            <a href="#contact" className={`hover:text-red hover:underline transition-colors duration-300 ${location.pathname === "/contact/" ? "text-red underline" : ""}`}>CONTACTO</a>
                        </li>
                    </ul>
                    <div className="relative flex items-center" ref={searchRef} onBlur={handleBlur}>
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: searchOpen ? "16rem" : 0, opacity: searchOpen ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <input
                                type="text"
                                placeholder="Buscar productos..."
                                className="border border-gray-300 p-2 rounded-md w-full md:w-64"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                autoFocus
                            />
                        </motion.div>

                        <img
                            src={searchIcon}
                            alt="Search"
                            className="h-6 w-6 cursor-pointer hidden md:block"
                            onClick={handleSearchClick}
                        />

                        {searchOpen && query && (
                            <ul className="absolute right-0 top-12 bg-white border border-gray-300 rounded-md mt-2 max-h-60 overflow-y-auto w-64 shadow-lg">
                                {filteredProducts.map(product => (
                                    <li
                                        key={product.id}
                                        className="p-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => navigate(`/products/${product.id}`)}
                                        onMouseDown={(e) => e.preventDefault()}
                                    >
                                        <span className="text-gray-500">{product.categoryName} &gt; </span>
                                        <span>{product.name}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </nav>

                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white text-center shadow-lg p-4"
                    >
                        <ul className="flex flex-col space-y-4 text-black">
                            <li>
                                <a
                                    href="/"
                                    className={`block py-2 hover:text-red hover:underline transition-colors duration-300 ${location.pathname === "/" ? "text-red underline" : ""}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    HOME
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/products"
                                    className={`block py-2 hover:text-red hover:underline transition-colors duration-300 ${location.pathname === "/products" ? "text-red underline" : ""}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    CATÁLOGO
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/news"
                                    className={`block py-2 hover:text-red hover:underline transition-colors duration-300 ${location.pathname === "/news" ? "text-red underline" : ""}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    NOTICIAS
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className={`block py-2 hover:text-red hover:underline transition-colors duration-300 ${location.pathname === "/contact" ? "text-red underline" : ""}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    CONTACTO
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </div>
        </header>
    );
};

export default Header;