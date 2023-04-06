import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';

import { Routes, Route } from 'react-router-dom';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import ProductAboutPage from './Pages/ProductAboutPage/ProductAboutPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/categorypage" element={<CategoryPage />} />
        <Route path="/productaboutpage" element={<ProductAboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
