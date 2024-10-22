import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import Sidebar from './sidebar/Sidebar'
import Content from './content/Content'

export default class Main extends Component {
    state = {
        selectedCategory: ""
    }
    getCategories = () => {
        fetch("http://localhost:3000/categories")
        .then(response => response.json())
        .then(data => {
            this.setState({categories: data})
        })
    }
    changeCategory = (category) => {
        this.setState({selectedCategory: category})
    }
    render() {
        return (
                <Row>
                    <Col xs="3">
                        <Sidebar getCategories={this.getCategories} changeCategory={this.changeCategory} selectedCategory={this.state.selectedCategory} />
                    </Col>
                    <Col xs="9">
                        <Content productList={this.props.productList}/>
                    </Col>
                </Row>
        )
    }
}
