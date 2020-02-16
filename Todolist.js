import React, { useState } from 'react';

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

  function removeLine(index){
      todos.splice(index, 1);
      setTodos([...todos]);
    }
    
  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="date" name="date" onChange={inputChanged} value={todo.date}/>
        <input type="text" name="desc" onChange={inputChanged} value={todo.desc}/>
        <input type="submit" value="Add"/>
      </form>
      <div>
      <table>
        <tbody>
            {todos.map((todo, index) => 
                <tr key={index}>
                      <td>{todo.date}</td>
                      <td>{todo.desc}</td>
                      <td><button onClick={() => {removeLine(index)}}>Delete</button></td>
                </tr>)
                }
        </tbody>
      </table>  
    </div>
    </div>
  );
};


export default Todolist;