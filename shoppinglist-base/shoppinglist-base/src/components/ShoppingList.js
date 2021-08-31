import React, { Component } from 'react';
import List from './List';
import AddListItem from './AddListItem';

class ShoppingList extends Component {
 
  render() {
    const items = this.props.list;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">

            <List
              items={items}
              removeListItem={this.props.removeListItem}
              removeAllListItems={this.props.removeAllListItems}
            />

          </div>
          <div className="col-sm-6">

            <AddListItem addListItem={this.props.addListItem} />

          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingList;