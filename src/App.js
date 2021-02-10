import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/Header';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
// import Signup from './components/Signup';
import { Route, BrowserRouter, Link, Redirect } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Take the dog out',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Go swimming',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Grocery Shopping',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Read over notes',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id 
      !== id)]});
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }
  render() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className= 'container'>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/Register'>Register</Link>
          <Link to='/Login'>Login</Link>
          <Link to='/Logout'>Logout</Link>
        </ul>
      </div>

      <div>
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} 
          delTodo={this.delTodo} />
        </div>
        
          
          <div>
            <Route exact path="/Register" />
            <Route path='/Login' />
            <Route path='/Logout' />
          </div>

          <div>
            <Footer> </Footer>
          </div>  
    </div>
    </BrowserRouter>
  );
}
}
export default App;