import React, { Component } from 'react'
import './Sidebar.css'

export default class Sidebar extends Component {
    state = {
        categories: []
    }
    componentDidMount(){
        this.getCategories();
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
      <div className='Sidebar'>
        <h1>Categories</h1>
        <p>{this.props.selectedCategory.categoryName}</p>
        <ul className='Category-List'>
            {
                this.state.categories.map(category => {
                    return (
                        <li className='Category-List-Item' onClick={() => {this.changeCategory(category)}}  key={category.id}>{category.categoryName}</li>
                    )
                })
            }       
            
        </ul>
    </div>
    )
  }
}
