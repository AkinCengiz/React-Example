import React, { Component } from 'react';
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem, Button, Badge } from 'reactstrap';

export default class RightsideBar extends Component {
    render() {
        return (
            <div>
                <Card style={{fontSize:"0.8rem"}}>
                    <CardBody>
                        <CardTitle tag="h5">
                            Sepet
                        </CardTitle>
                        <ListGroup>
                            {
                                this.props.cart.map(cartItem => (
                                    <ListGroupItem key={cartItem.product.id} style={{marginBottom : "2px"}}>
                                        {cartItem.product.productName}  
                                        <Badge style={{margin:"2px", cursor:"pointer"}} color="primary">{cartItem.quantity}</Badge> <Badge color="danger" onClick={() => this.props.removeFromCart(cartItem.product)}  style={{margin:"2px", cursor:"pointer"}}>X</Badge>
                                    </ListGroupItem>
                                ))
                            }                    
                        </ListGroup>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
