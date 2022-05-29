import {useLocation} from "react-router-dom";

const PlaceOrder = () => {
    const location = useLocation();
    const items = location.state.items
    console.log("Your order is placed!!!");
    return (
      <div className="place order">
        <h2 className="place-header">Thanks for your order!!! We will reach soon with your delicious food.</h2>
        <div>
          <table>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
            <tr>
            {items.map((item, index) => {
              return (
                <div key={index}>  
                  <td>{item.itemName}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                </div>
              );
              })}
              </tr>
            </table>
        </div>
      </div>
    );
  }

export default PlaceOrder;