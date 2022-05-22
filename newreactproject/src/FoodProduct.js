import React, {useState} from 'react';
import {Container ,Card, Col, Row } from 'react-bootstrap';  
import stockData from "./foodData";
import { useCart } from "react-use-cart";
import ItemCard from './ItemCard';
import DataNav from './DataNav';

function FoodProduct() {
    var count=0;
	var value=0;
	var lengt=0;
    const { addItem } = useCart();

    return (
		
            <div className="App"> 
			<DataNav />
			{stockData.map(function(data) {
				value++;
				count=-1;
				return ( 
					<div key={data} className="App">
						{console.log("Category", data.category)}
						<div><h2>{data.category}</h2></div>
						<div className='bootstrap-card'> 
							{Object.keys(data.items).map((item, index) => {
								count++;
								console.log("item", item)
								return (
									
									<ItemCard img={data.items[count].img} itemName={data.items[count].itemName} price={data.items[count].price} vegan={data.items[count].vegan} item={data.items[count]} key={index}/>
								);
									
							})}
						</div>
					</div>
				);
			})}
			{console.log("value is", value)}
		{console.log("length gcgkujbkj is", lengt)}
		</div>  
        
    )
}

export default FoodProduct;