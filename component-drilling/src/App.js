import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import Navi from './components/navi/Navi'
import Main from './components/main/Main'

export default class App
 extends Component {
  state = {
    products : [],
    currentCategory : "",
    cart : []
  }
  componentDidMount(){
    this.getProducts();
  }
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if(categoryId){
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({products : data}));
  }
  changeCategory = (category) => {
    this.setState({currentCategory : category.categoryName});
    this.getProducts(category.id);
}
addToCart = (product) => {
  let newCart = this.state.cart;
  var addedItem = newCart.find(c => c.product.id === product.id);
  if(addedItem){
    addedItem.quantity += 1;
  }else{
    newCart.push({product : product, quantity : 1});
  }
  this.setState({cart : newCart});
}
removeFromCart = (product) => {
  let newCart = this.state.cart.filter(c => c.product.id !== product.id);
  this.setState({cart : newCart});
}
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Main removeFromCart={this.removeFromCart} addToCart = {this.addToCart} cart={this.state.cart} changeCategory = {this.changeCategory} products = {this.state.products} currentCategory= {this.state.currentCategory} />
          </Row>
        </Container>
      </div>
    )
  }
}