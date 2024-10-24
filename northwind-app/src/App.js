import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Layout from './components/Layout';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home/>} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/orders" element={<Orders />} />
          <Route path='/products' element={<Products/>} />
        </Routes>
      </Router>
    )
  }
}
