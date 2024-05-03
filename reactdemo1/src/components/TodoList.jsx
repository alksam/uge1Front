import React, { useEffect, useState } from 'react'

const TodoList = ({todos ,setTodos}) => {
   
    
            useEffect(() => {
                fetch("https://jsonplaceholder.typicode.com/todos/")
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        setTodos(data); 
                    });
            }, []);
   
  return (
    <>
            <h1>Todo List</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <strong>Title:</strong> {todo.title} <br />
                        <strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'} <br />
                        <strong>User ID:</strong> {todo.userId}
                    </li>
                ))}
            </ul>
        </>
    
    );
   
  
}



export default TodoList;

