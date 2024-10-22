import React, { Component } from 'react'

export default class Content extends Component {

  render() {
    return (
      <div>
        <h1>Content</h1>
        <ul>
            {
                this.props.productList.map(product => {
                    return (
                        <li key={product.id}>{product.productName}</li>
                    )
                })
            }
        </ul>
      </div>
    )
  }
}
