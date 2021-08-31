import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListHeader extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const { removeAllListItems } = this.props;

    removeAllListItems();
  }

  render() {
    const { totalNumberOfListItems } = this.props;

    if (totalNumberOfListItems > 0) {
      return (
        <form onSubmit={this.handleSubmit} className="form-inline">
          {totalNumberOfListItems} {totalNumberOfListItems === 1 ? 'item' : 'items'}
          {' '}
          <button className="btn  btn-danger mx-5" type="submit">Remove all</button>
        </form>
      );
    }

    return (<span>Shopping List</span>);
  }
}

ListHeader.propTypes = {
  removeAllListItems: PropTypes.func.isRequired,
  totalNumberOfListItems: PropTypes.number.isRequired,
};

export default ListHeader;