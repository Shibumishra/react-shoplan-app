import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Topbar from './components/Topbar';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import OrderConform from './components/Order';
import SignUp from './components/SignUp';
import SignIn from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Topbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product/:id"  component={ProductDetails} />
      <Route path="/cart" component={Cart} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/order" component={OrderConform} />
      <Route component={() => <h1 style={{marginTop: "100px"}}>404: Page Not Found</h1>} />
    </Switch>
    </BrowserRouter>
 
  );
}

export default App;