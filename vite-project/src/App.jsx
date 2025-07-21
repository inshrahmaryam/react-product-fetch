// import {createBrowserRouter} from 'react-router-dom'
const BASE_URL='https://fakestoreapi.com/products';
import {Link} from 'react-router-dom';
import ProductDetails from './ProductDetails';
import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';

import './App.css'
import SfNav from './SfNav'; 
import 'bootstrap/dist/css/bootstrap.min.css';


// import {Search} from 'react-bootstrap-icons';
// const router= createBrowserRouter([]);


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
