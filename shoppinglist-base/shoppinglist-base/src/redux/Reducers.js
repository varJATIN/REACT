import {ADD_ITEM, REMOVE_ITEM, REMOVE_ALL_ITEMS} from './Actions';

var initialState = {
    items: {}
}

export const ListReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return {
                items: {...state.items, [action.item.id]: action.item}
            }
        case REMOVE_ITEM:
            let cpy = {...state.items};
            delete cpy[action.id];
            return {
                items: cpy
            }
        case REMOVE_ALL_ITEMS:
            return {
                items: {}
            }
        default:
            return state;
    }
}