import Form from './Form';
import React from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import About from './About';
import Routing from './routing';
import Stocks from './DataLoad';
import DefaultPost from './NestedData';
import "./style.css"
import DataLoad from './DataLoad';
import DemoData from './DemoData';
import DataNav from './DataNav';
import Nav from './Nav';
import OrderRouting from './orderRouting';

class App extends React.Component {
  render() {
    return (
      <div>
        <Routing />
      </div>
    );
  }
}

export default App;