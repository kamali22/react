import React, {useState} from 'react';
import {Container ,Card, Col, Row } from 'react-bootstrap';  
import stockData from "./foodData";

function FoodProduct({setCart, cart}) {
    var count=0;
    const addToCart = (product) => {
        let newCart = [...cart];
        newCart.push(product);
        /*let itemInCart = newCart.find( (item) =>product.name === item.name );
        
        if(itemInCart) {
            itemInCart.quantity++;
        }
        else {
            itemInCart = {
                ...product, quantity:1,
            };
            newCart.push(itemInCart);
        }*/
        setCart(newCart);
    }

    return (
        <>
            <div className="App">  
			{stockData.map(function(data) {
				count=-1;
				return (
					<div>
						<div><h2>{data.category}</h2></div>
						<div className='bootstrap-card'> 
							{Object.keys(data.items).map((item, idx) => {
								count++;
								return (
									<Container fluid className='container'>	
										<Col xs="4">
											<Card className='card'>
												<Card.Img variant='' src={data.items[count].img} />
												<Card.Body className='card'>
													<Card.Title>{data.items[count].itemName}</Card.Title>
													<Card.Text>
														Price: {data.items[count].price} <br></br>
														Vegan: {data.items[count].vegan}
													</Card.Text>
													<button onClick={ () => addToCart(data.items[count])}>Add to cart</button>
												</Card.Body>
											</Card>
										</Col>	
									</Container>
								);
									
							})}
						</div>
					</div>
				);
			})}
		</div>  
        </>
    )
}

export default FoodProduct;