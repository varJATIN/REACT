// bridge react and redux

import {connect} from 'react-redux';

import ShoppingList from './ShoppingList';

import {ListActions} from '../redux/Actions';

// state from redux give it as props to React

// @arg is redux state
// return value will be props for react
function mapStateToProps(state) {
    return {
        list: state.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addListItem: (item) => dispatch(ListActions.addItem(item)),
        removeListItem: (id) => dispatch(ListActions.removeItem(id)),
        removeAllListItems: () => dispatch(ListActions.removeAllItems())
    }
}

const ShoppingListContainer = connect(
    mapStateToProps, 
    mapDispatchToProps)(ShoppingList);

export default ShoppingListContainer;