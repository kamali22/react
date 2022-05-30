import {Container ,Card, Col, Row} from 'react-bootstrap';
import stockData from "./assests/Data/foodData";  
import Nav from './Nav';
import "./assests/Styles/style.css";

function HomePage() {  
	var count=0;

  return (   
	
    <div className="App"> 
	<div > 
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
								<Container fluid='true' className='p-2  col-sm-7'>
									<div className='row col-md-9'>
										<Row xs="4">
												<div className='col'>
													<Card.Body>
														<Card.Title>{data.items[count].itemName}</Card.Title>
														<Card.Text>
															Price: {data.items[count].price} <br></br>
															Vegan: {data.items[count].vegan}
														</Card.Text>
														<button>Add to cart</button>
													</Card.Body>
												</div>
												<div className='col'>
													<Card.Img src={data.items[count].img} style={{height: '10rem', width: '15rem'}}/>
												</div>
										</Row>	
									</div>
									
								</Container>
							);
						})}
					</div>
				</div>
			);
		})}
    </div>  
	</div>
  );  
}  

export default HomePage;