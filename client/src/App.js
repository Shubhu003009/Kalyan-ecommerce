import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} children />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/product/:id" element={<Products />} />
          <Route path="*" element={<h2>Page not Found !!!</h2>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
