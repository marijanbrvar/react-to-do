/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class TodoItem extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <li>{title}</li>
    );
  }
}

export default TodoItem;
