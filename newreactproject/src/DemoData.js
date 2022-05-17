import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Row, Button} from 'react-bootstrap';  
import food2 from './assests/food2.jpg';  
import stockData from "./foodData";
import "./style.css"

function DemoData() {  
	const categories=[];
	var count=0;
	var prevCount=0;

  return (  
    <div className="App">  
 	   {stockData.map(function(data) {
			prevCount = count;
			console.log("previous count", prevCount);
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
												<button>Add to cart</button>
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
}  
export default DemoData;


/* 
<div>
						{Object.keys(data.items).map(function(item) {
							//console.log(item);
							const len = data.items.length;
							for(let i=0; i < len; i++) {
										return ( 
											<Container className='p-4'>
												<Row md="4">
													<Card>
														<Card.Img variant='' src={item.img} />
														<Card.Body>
															<Card.Title>{item.itemName}</Card.Title>
															<Card.Text>
																This is the bootstrap card text
															</Card.Text>
														</Card.Body>
													</Card>
												</Row>
											</Container>
										);
							}
						})}
						</div>
*/

/*
{Object.keys(data.items).map(function(item) {
	console.log("item is ", item);
	<div>{item.itemName}
	{data.items[0].itemName}
	{data.items[1].itemName}
	</div>
	return (
		<>
		{Object.keys(item).map(function(info) {
			console.log("information is ", info)
			return (
				<>
				{Object.keys(info).map(function(realinfo) {
					console.log("real info is ", realinfo);
				}

				)}
				</>
			);
		}
			)}
		</>
	);
}
)}




		<ul>
			{data.items.map((value, index) => {
				//console.log("len data ", value);
				console.log("item name is ", value.itemName);
				console.log("veg or non-veg ", value.vegan);
				return <li key={index}>{value}</li>
			}
			)}
		</ul>


		arr[0].name, 


		Object.keys(data.items).forEach(key => arr.push({name: key, value: data.items[key]}));


		<ul>
	{Object.keys(arr).map((value) => {
		console.log("2nd div ", value);
		console.log("summa ", arr[value]);
		{Object.keys(value).map(function (info) {
			console.log("true value ", arr[info]);
			console.log("item name ", arr[info][value].itemName);
		}
		)}					
	}
	)}
</ul> 



function DemoData() {  
  return (  
    <div className="App">  
 	   {stockData.map(function(data) {
			console.log("stock data type", typeof(stockData))
	    	console.log("CATEGORY", data.category);
			console.log("LENGTH", data);
			return (
				<div>
				<div><h2>{data.category}</h2></div>
				{Object.keys(data).map(item => {
					console.log("individual items", item);
					for (var i=0; i < data.items.length; i++) {
						console.log("new data",i);
						return (
							<Container className='p-4 container'>	
								<Col md="4">
									<Card className='card'>
										<Card.Img variant='' src={item[i].img} />
										<Card.Body className='card'>
											<Card.Title>{item[i].itemName}</Card.Title>
											<Card.Text>
												Price: {item[i].price} <br></br>
												Vegan: {item[i].vegan}
											</Card.Text>
											<button>Add to cart</button>
										</Card.Body>
									</Card>
								</Col>		
							</Container>
						);
						//nameArray.push(data.items[i].itemName);				
					}
				})}
				
				</div>
			);
		})}
    </div>  
  );  
}  
export default DemoData;



*/