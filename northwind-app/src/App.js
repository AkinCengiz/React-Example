import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductList from './components/productList/ProductList';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Orders from './pages/Orders';
import Products from './pages/Products';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route index element={<Home/>} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/orders" element={<Orders />} />
          <Route path='/products' element={<Products/>} />
        </Routes>
      </Router>
    )
  }
}
