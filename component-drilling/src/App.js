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
  getProducts = () => {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => this.setState({products : data}));
  }
  changeCategory = (category) => {
    this.setState({currentCategory : category.categoryName});
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
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Main addToCart = {this.addToCart} cart={this.state.cart} changeCategory = {this.changeCategory} products = {this.state.products} currentCategory= {this.state.currentCategory} />
          </Row>
        </Container>
      </div>
    )
  }
}