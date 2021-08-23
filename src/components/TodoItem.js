/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todos.completed}
          onChange={() => this.props.handleChangeProps(this.props.todos.id)}
        />
        {' '}
        {this.props.todos.title}
      </li>
    );
  }
}

export default TodoItem;
