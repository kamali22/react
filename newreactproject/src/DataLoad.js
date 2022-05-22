import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Row } from 'react-bootstrap';  
import { NavLink } from "react-router-dom";
import DataNav from './DataNav';
import Nav from './Nav';
import stockData from "./foodData";
import "./style.css";
import { useState } from 'react';
import Cart from './Cart';
import FoodProduct from './FoodProduct';
import profile from "./assests/profile.png";
import * as cartimg from "./assests/cart.png";
import logo from "./assests/y-logo.png";

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function DataLoad(props) { 
	const [cart, setCart] = useState([]);
	const [page, setPage] = useState(PAGE_PRODUCTS);
	const cartData = [];
	var count=0;

	const navigateTo = (nextPage) => {
		setPage(nextPage);
	}
	const getCartTotal = () => {
		console.log("cart length")
		return cart.length;
	};

	const handleCart = (cname) => {
		cartData.push(cname);
		console.log("cardData", cartData);
		console.log("len", cartData.length);
	};

	return (
		<div>
			<DataNav />
			
			{page === PAGE_PRODUCTS && (<FoodProduct cart={cart} setCart={setCart} /> )}
			{page === PAGE_CART && (<Cart cart={cart} setCart={setCart} /> )}
		</div>
	);
	
}  

export default DataLoad;

/*
return (  
		<div className="App">  
			{stockData.map(function(data) {
				count=-1;
				return (
					<div>
						<div><h2>{data.category}</h2></div>
						<div className='bootstrap-card'> 
							{Object.keys(data.items).map(item => {
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
													<button onClick={ () => handleCart(data.items[count].itemName)}>Add to cart</button>
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
	  );  
*/