import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {Routes, Route} from 'react-router-dom';
import Products from './Components/Products';
import Product from './Components/Product';
import Login from './Components/Login'
import Register  from './Components/Register';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
    </Routes>
    </>
  );
}

export default App;
