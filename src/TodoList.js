import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import TodoNewForm from './TodoNewForm';

class TodoList extends Component {
  state = {
    todos: [
      'test',
      'comer higos',
      'planchar'
    ],
    newTodoName: ''
  }

  changeNameNewTodo = (event) => {
    this.setState({newTodoName: event.target.value});
  }

  addNewTodoHandler = () => {
    if (this.state.newTodoName === '') {
      return;
    }

    let todos = [...this.state.todos];
    todos.push(this.state.newTodoName);

    this.setState({
      todos: todos
    });
  }

  deleteTodoHandler = (index) => {
    let todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({
      todos: todos
    });
  }

  increasePriority = (index) => {
    let todos = [...this.state.todos];
    if (index === 0) {
      return;
    }

    let previousTodo = todos[index - 1];
    let todoToIncrease = todos[index];

    todos[index] = previousTodo;
    todos[index - 1] = todoToIncrease;

    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <div className="App">
        Todo List - State app
        <TodoNewForm
          changeFunc={this.changeNameNewTodo}
          addFunc={this.addNewTodoHandler} />

        { this.state.todos.map((todo, index) => {
          return <Todo
            key={index}
            name={todo}
            deleteFunc={this.deleteTodoHandler.bind(this, index)} 
            addPriority={this.increasePriority.bind(this, index)} 
          />
        }) }
      </div>
    );
  }
}

export default TodoList;
