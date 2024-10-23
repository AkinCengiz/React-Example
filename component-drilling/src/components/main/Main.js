import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import LeftSideBar from './sidebar/LeftSideBar'
import Content from './content/Content'
import RightsideBar from './sidebar/RightsideBar'
import { Route, Routes } from 'react-router-dom'
import NotFound from './content/NotFound'

export default class Main extends Component {
  render() {
    return (
      <Row>
        <Col xs="3">
            <LeftSideBar changeCategory = {this.props.changeCategory} currentCategory={this.props.currentCategory} />
        </Col>
        <Col xs="6">
        <Routes>
          <Route exact path='/' element={<NotFound/>}/>
          <Route exact path='/products' element={<Content addToCart={this.props.addToCart} products = {this.props.products} currentCategory={this.props.currentCategory} /> }/>
        </Routes>
            {/* <Content addToCart={this.props.addToCart} products = {this.props.products} currentCategory={this.props.currentCategory} /> */}
        </Col>
        <Col xs="3">
            <RightsideBar removeFromCart={this.props.removeFromCart} cart = {this.props.cart} />
        </Col>
      </Row>
    )
  }
}
