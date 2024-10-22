import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class LeftSideBar extends Component {
    state = {
        categories : []
    }
    componentDidMount() {
        this.getCategories();
    }
    getCategories = () => {
        fetch("http://localhost:3000/categories")
            .then(response => response.json())
            .then(data => this.setState({categories : data}));
    }

    
    
    render() {
        return (
            <div>
                <h3>{this.props.currentCategory}</h3>
                <ListGroup>
                    {
                        this.state.categories.map(category => {
                            return(
                            <ListGroupItem onClick={() => {this.props.changeCategory(category)}} key={category.id}>
                                {category.categoryName}
                            </ListGroupItem>
                            );}
                            
                        )
                    }
                </ListGroup>
            </div>
        )
    }
}
