export const ADD_ITEM = "add_item";
export const REMOVE_ITEM = "remove_item";
export const REMOVE_ALL_ITEMS = "remove_all_items";

// action creators
function addItem(item) {
    return {
        type: ADD_ITEM,
        item
    }
}

function removeItem(id) {
    return {
        type: REMOVE_ITEM,
        id
    }
}

function removeAllItems() {
    return {
        type: REMOVE_ALL_ITEMS
    }
}

export const ListActions = {
    addItem,
    removeItem,
    removeAllItems
}