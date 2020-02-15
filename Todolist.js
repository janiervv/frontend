import React, { useState } from 'react';
import Todo from './components/todo.js'

const Todolist = () => {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }


  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="date" name="date" onChange={inputChanged} value={todo.date}/>
        <input type="text" name="desc" onChange={inputChanged} value={todo.desc}/>
        <input type="submit" value="Add"/>
      </form>
    <Todo todostolist={todos}/>
    </div>
  );
};


export default Todolist;