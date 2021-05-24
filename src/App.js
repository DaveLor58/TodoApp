import React, { useState, useEffect } from 'react';
import './App.css';
// importing components 
import Form from './components/Form';
import TodoList from './components/TodoList';

/* Function that generates the entire todo list and uses useState and useEffect to track 
 * changes in state and update accordingly, returns components of the todo project as well
 * as creating a local storage to save todo data.
 */
const App = () => {
  // every state changes 
  const [inputText, setInputText] = useState(""); // inputText initialized to empty str
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  // RUNS during the beginning of the app 
  useEffect(() => {
    getLocalTodos();
  },[]);
  // use effect will execute the filter function 
  // everytime a user enters a new todo item or when item status
  // is selected i.e. completed,uncompleted,all
  useEffect(() => {
     // call to filter completed todos from uncompleted
    filterHandler(); 
    saveLocalTodos();
  }, [todos,status]); 

  // filterHandler is a function that will change the screen of the app depending 
  // on whether the user selects completed, incomplete, or all todo items
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'incomplete':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
        // otherwise, show all of the todo items
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //function that saves to local storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // function that checks if there are items or if there is none
  // gets called once by useEffect
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      // set to empty array
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else{
      // if todo exists, then parse and setTodos
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
      <h1>Dave's Todo List</h1>
      </header>
        <Form 
          inputText={inputText} 
          todos={todos} 
          setTodos={setTodos} 
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <TodoList 
          filteredTodos={filteredTodos} 
          setTodos={setTodos} 
          todos={todos} 
        />
    </div>
  );
}

export default App;
