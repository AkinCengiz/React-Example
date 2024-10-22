import React, { Component } from 'react'
import './App.css'
import Main from './components/main/Main'
import { Container } from 'reactstrap'

export default class App extends Component {
state = {
    products: []
}
componentDidMount(){
    this.getProducts();
}
getProducts = () => {
    fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(data => {
        this.setState({products:data})
  })}
  render() {
    return (
      <Container>

        <Main productList={this.state.products} />

      </Container>
    )
  }
}
