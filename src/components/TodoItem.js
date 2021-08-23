/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styles from './TodoItem.module.scss';

class TodoItem extends React.Component {
  render() {
    return (
      <li className={styles.item}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={this.props.todos.completed}
          onChange={() => this.props.handleChangeProps(this.props.todos.id)}
        />
        {' '}
        {this.props.todos.title}
        <button onClick={() => this.props.delTodoProps(this.props.todos.id)}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;
