import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import HomeView from "./pages/HomeView";
import NewsView from "./pages/NewsView";
import ProductsView from "./pages/products/ProductsView";
import ProductDetailView from "./pages/products/ProductDetailView";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/home" element={<HomeView />} />
                <Route path="/news" element={<NewsView />} />
                <Route path="/products" element={<ProductsView />} />
                <Route path="/products/:id" element={<ProductDetailView />} />
            </Routes>
        </Router>
    );
}

export default App;