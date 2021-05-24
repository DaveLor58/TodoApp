import React from 'react';

/* component that takes care of what to do when user enters an input in the input bar.
 * each time a new todo item is created, the form will assign props in that todo item.  
 * Additionally, there is a dropdown bar that will allow users to see categories of completed, incomplete, and all todos
 */
const Form = ({ inputText, todos, setTodos, setInputText, setStatus }) => {
    // js code and functions here 
    // function inputTextHandler takes in the user input as a text value
    // then submitTodoHandler will take care of creating todo item
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    // once user enters in input, the submitTodoHandler will be called 
    // once '+' button is pressed. This function takes props from todos, change values
    // and give a unique id for each todo item.
    const submitTodoHandler = (e) => {
        // stop the page from loading to default
        e.preventDefault();
        setTodos([
            ...todos, 
            {   text: inputText, 
                completed: false, 
                id: Math.random() * 1000
            },
        ]);
        setInputText(""); // refresh the input bar after user enters a todo item
    };
    // change status of todo item once it changes state
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return(
        <form>
            <input 
                className="todo-input" 
                type="text" 
                placeholder="Type your new todo here"
                value={inputText}
                onChange={inputTextHandler}/>
            <button 
                onClick={submitTodoHandler} 
                className="todo-button" 
                type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    );
}

export default Form;