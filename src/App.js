import { Routes, Route } from 'react-router-dom';
import Header from 'components/header';
import 'styles/style.scss';
import Homepage from 'pages/Homepage';
import Product from 'pages/Product/ProductPage';

function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
