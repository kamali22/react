import {Container ,Card, Col} from 'react-bootstrap';
import stockData from "./assests/Data/foodData";  
import Nav from './Nav';
import "./assests/Styles/style.css";

function HomePage() {  
	var count=0;

  return (   
    <div className="App">  
		<Nav />
 	   {stockData.map(function(data) {
			count=-1;
			return (
				<div>
					<div><h2>{data.category}</h2></div>
					<div> 
						{Object.keys(data.items).map(item => {
							count++;
							return (
								<Container fluid className='container'>
									<Col xs="4">
										<Card className='card'>
											<Card.Img variant='bottom' src={data.items[count].img} />
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

export default HomePage;