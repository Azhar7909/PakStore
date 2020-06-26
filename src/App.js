import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import ProductContextProvider from './Globel/ProductContext';
import ProductShow from './Components/productShow';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Cart from './Components/Cart';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
import About from './Components/About';
import CartContextProvider from './Globel/cartContext';



function App() {

  
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={ProductShow} />
              <Route path="/shopingCart" exact component={Cart} />
              <Route path="/about" exact component={About} />
              <Route component={NotFound} />
              
            </Switch>
            <Footer />
          </Router>
          </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
