import { useDispatch, useSelector } from "react-redux";
//import { useHistory } from "react-router";
//import { addToCart } from "../slices/cartSlice";
import stockData from "./foodData";
import {Container ,Card, Col } from 'react-bootstrap';  

const Home = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  //const history = useHistory();
  const count = 0;

  /*const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);*/

  const handleAddToCart = (product) => {
      console.log("handle cart");
    //dispatch(addToCart(product));
    //history.push("/cart");
  };

  return (
    <div className="home-container">
      <div className="App">  
			{stockData.map(function(data) {
				count=-1;
				return (
					<div>
						<div><h2>{data.category}</h2></div>
						<div className='bootstrap-card'> 
							{Object.keys(data.items).map((item) => {
								count++;
								return (
									<Container fluid className='container'>	
										<Col xs="4">
											<Card className=' logged card'>
												<Card.Img variant='bottom' src={data.items[count].img} />
												<Card.Body className='card'>
													<Card.Title>{data.items[count].itemName}</Card.Title>
													<Card.Text>
														Price: {data.items[count].price} <br></br>
														Vegan: {data.items[count].vegan}
													</Card.Text>
													<button onClick={ () => handleAddToCart(data.items[count], data.items[count].id)}>Add to cart</button>
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
    </div>
  );
};

export default Home;