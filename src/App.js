import React, { Component } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./TodoList";
import LoginScreen from "./screens/LoginScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginScreen />
        <TodoForm buttonTitle="Add" />
      </div>
    );
  }
}

export default App;
