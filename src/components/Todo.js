import React from 'react';
/* This component handles all of the state changes that 
 * occurs whenever the user modifies the listed todo items. 
 * Depending on what the user clicked on, the corresponding function 
 * will update the todo array or update the property of each items status 
 */
const Todo = ({setTodos, todos, todo, text}) => {
    // Events
    // delete handler will filter out items that have been removed 
    // due to user pressing trash button
    const deleteHandler = () => {
        setTodos(todos.filter(elem => elem.id !== todo.id))
    };
    // completeHandler will set todo array with items that have been checked by the user 
    // each item's completed property will toggle to correctly assign values when each 
    // completed/incomplete item have been filtered 
    const completeHandler = () => {
            setTodos(todos.map(item => {
                if(item.id === todo.id){
                    return {
                        ...item, completed: !item.completed 
                    }         
                }
                return item;
            }
            )
        );
    };
    return(
            <div className="todo">
                <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
                <button  onClick={completeHandler} className="complete-btn"> 
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={deleteHandler} className="trash-btn"> 
                    <i className="fas fa-trash"></i>
                </button>
            </div>
    );
}

export default Todo;