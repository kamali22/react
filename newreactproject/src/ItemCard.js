import React from "react";
import {Container ,Card, Col, Row} from 'react-bootstrap';
import { useCart } from "react-use-cart"; 

const ItemCard = (props) => {
    const { addItem } = useCart();

    return (
        <div>
            <Container fluid='true' className="p-2 col-sm-8">
                <div className="row col-md-20">
                    <Row md="5">
                            <div className="col">
                                <Card.Body>
                                    <Card.Title>{props.itemName}</Card.Title>
                                    <Card.Text>
                                        Price: {props.price} <br></br>
                                        Vegan: {props.vegan}
                                    </Card.Text>
                                    <button onClick={ () => addItem(props.item)}>Add to cart</button>
                                </Card.Body>
                            </div>
                            <div className="col">
                                <Card.Img src={props.img} style={{height: '10rem', width: '20rem'}} />
                            </div>
                    </Row>	
                </div>	
            </Container>
        </div>
    );
}

export default ItemCard;