import React from "react";
import "../styles/todoForm.css";

const TodoForm = props => {
  return (
    <div className="todo-form">
      <input type="text" onChange={props.onInputChange} required />
      <button type="submit" onClick={props.onButtonClick}>
        {props.buttonTitle}
      </button>
    </div>
  );
};

export default TodoForm;
