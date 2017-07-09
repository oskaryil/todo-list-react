import React, { Component } from "react";
import { connect } from "react-redux";

connect(state => ({
  auth: state.auth,
  todo: state.todo
}));
export default class TodoList extends Component {
  renderTodoItems() {
    const todos = this.props.todo.todos;
    if (todos) {
      todos.map(todo =>
        <li>
          {todo.text}
        </li>
      );
    }
  }

  render() {
    return (
      <ul>
        {this.renderTodoItems()}
      </ul>
    );
  }
}
