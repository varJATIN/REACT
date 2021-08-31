import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
// import Cart from './components/Cart';
import Default from './components/Default';
import React, { Suspense } from 'react';

const Cart = React.lazy(() => import('./components/Cart'));

function App() {
  return (
   <>
  <Suspense fallback={<h1>Loading.....</h1>}>
  <Router>
    <Navbar />
    <Switch>
      <Route path="/products" component={ProductList} />
      <Route path="/cart" component={Cart} />
      <Route path="/details/:id" component={Details} />
      <Route exact path="/" component={ProductList} />
      <Route default component={Default} />
    </Switch>
  </Router>
  </Suspense>
   </>
  );
}

export default App;
