/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styles from './TodoItem.module.scss';

class TodoItem extends React.Component {
  render() {
    const { id, title, completed } = this.props.todos;

    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    return (
      <li className={styles.item}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => this.props.handleChangeProps(id)}
        />
        {' '}
        <button onClick={() => this.props.delTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </li>
    );
  }
}

export default TodoItem;
