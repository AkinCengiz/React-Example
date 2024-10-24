import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

export default class Content extends Component {
    render() {
        return (
            <div>
                <h3>Category{this.props.currentCategory === "" ? "" : " / "+this.props.currentCategory}</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                               Product Name
                            </th>
                            <th>
                                Unit Price
                            </th>
                            <th>
                                Quantity Per Unit
                            </th>
                            <th>
                                Stock
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product => {
                                return (
                                    <tr key={product.id}>
                                        <th scope="row">
                                            {product.id}
                                        </th>
                                        <td>
                                            {product.productName}
                                        </td>
                                        <td>
                                            {product.unitPrice}
                                        </td>
                                        <td>
                                            {product.quantityPerUnit}
                                        </td>
                                        <td>
                                            {product.unitsInStock}
                                        </td>
                                        <td>
                                        <Button onClick={() => {this.props.addToCart(product)}} color="primary">Add</Button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
            </div>
                
        )
    }
}
