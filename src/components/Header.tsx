import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import logoImage from "../assets/images/logo_red.svg";
import searchIcon from "../assets/icons/search_icon.svg";

import { ProductCategory } from "../utils/productsData";

interface HeaderProps {
    products: ProductCategory[];
}

const Header: React.FC<HeaderProps> = ({ products = [] }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const searchRef = useRef<HTMLDivElement>(null);

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

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-12 relative">
                <img src={logoImage} alt="Logo rojo" className="h-20 w-44" />
                <nav className="flex items-center space-x-24">
                    <ul className="flex space-x-24 text-black">
                        <li>
                            <a href="/" className={location.pathname === "/" ? "text-red" : ""}>HOME</a>
                        </li>
                        <li>
                            <a href="/products" className={location.pathname === "/products" ? "text-red" : ""}>CATÁLOGO</a>
                        </li>
                        <li>
                            <a href="/news" className={location.pathname === "/news" ? "text-red" : ""}>NOTICIAS</a>
                        </li>
                        <li>
                            <a href="#contact" className={location.pathname === "/contact" ? "text-red" : ""}>CONTACTO</a>
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
                                className="border border-gray-300 p-2 rounded-md w-64"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                autoFocus
                            />
                        </motion.div>

                        <img
                            src={searchIcon}
                            alt="Search"
                            className="h-6 w-6 cursor-pointer"
                            onClick={handleSearchClick}
                        />

                        {query && (
                            <ul className="absolute right-0 top-12 bg-white border border-gray-300 rounded-md mt-2 max-h-60 overflow-y-auto w-64 shadow-lg">
                                {filteredProducts.map(product => (
                                    <li
                                        key={product.id}
                                        className="p-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => navigate(`/product/${product.id}`)}
                                    >
                                        <span className="text-gray-500">{product.categoryName} &gt; </span>
                                        <span>{product.name}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;