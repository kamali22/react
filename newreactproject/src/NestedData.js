import React from "react";
import stockData from "./foodData";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default class DefaultPost extends React.Component {
    render() {
        return (
            <>
                <Container fluid={true}>
                    <Row>
                            {stockData.map(function(postData) {
                                console.log(postData);
                                {
                                    Object.keys.postData.map(function(itemData) {
                                        return (
                                            <Card key={postData.id}>
                                                <Card.Img variant="top" src={postData.items.img} />
                                                
                                                <Card.Body>
                                                    <Card.Title>{ postData.items.itemName }</Card.Title>
                                                    <Card.Text>{postData.items.vegan}</Card.Text>
                                                    <Card.Text>{postData.items.price}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })
                                }
                                
                                
                            })}
                    </Row>
                </Container>
            </>
        );
    }
}