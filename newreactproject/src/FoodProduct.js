import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';   
import stockData from "./assests/Data/foodData";
import ItemCard from './ItemCard';
import DataNav from './DataNav';

function FoodProduct() {
    var count=0;

    return (
		
            <div className="App"> 
			<DataNav />
			{stockData.map(function(data) {
				count=-1;
				return ( 
					<div key={data} className="App">
						<div><h2>{data.category}</h2></div>
						<div className='bootstrap-card'> 
							{Object.keys(data.items).map((item, index) => {
								count++;
								return (
									<ItemCard img={data.items[count].img} itemName={data.items[count].itemName} price={data.items[count].price} vegan={data.items[count].vegan} item={data.items[count]} key={index}/>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>  
        
    )
}

export default FoodProduct;