import React from "react";
import {Container ,Card, Col} from 'react-bootstrap';
import { useCart } from "react-use-cart"; 

const ItemCard = (props) => {
    const { addItem } = useCart();

    return (
        <div>
            <Container fluid className="container">	
                <Col md="4">
                    <Card className="logged card">
                        <Card.Img variant='bottom' src={props.img} />
                        <Card.Body className="card">
                            <Card.Title>{props.itemName}</Card.Title>
                            <Card.Text>
                                Price: {props.price} <br></br>
                                Vegan: {props.vegan}
                            </Card.Text>
                            <button onClick={ () => addItem(props.item)}>Add to cart</button>
                        </Card.Body>
                    </Card>
                </Col>	
            </Container>
        </div>
    );
}

export default ItemCard;