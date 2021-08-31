import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ShoppingListContainer from './components/ShoppingListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';


import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import {ListReducer} from './redux/Reducers';

const store = createStore(ListReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(<Provider store={store}><ShoppingListContainer/></Provider>, document.getElementById('root'));

