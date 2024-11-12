import React, {useState} from "react";


const TodoForm = ({ todo , setTodo , setTodos,todos}) => {

   

    const handleSubmit = (evt) => {
        evt.preventDefault();
       // console.log(todo);
       todo.id = Math.floor(Math.random()*100);
       setTodos([...todos,todo])

    }

    const changeTodo = (evt) => {
        setTodo ({ 
            ...todo,
           [ evt.target.id]: evt.target.value
        });
    }
        

    return (
        <>
        <form onSubmit={handleSubmit}>
        Title <input id="title"  type='text'  value= {todo.title} placeholder=' Enter a new hold title' onChange={changeTodo} /><br/>
        user ID  <input id="userId" type='text' value= {todo.userId} placeholder='Enter ther user Id 'onChange={changeTodo}/><br/>
        <input type='submit' value="add todo"/>
        </form>
        </>

    )

}

export default TodoForm;