import React, { useState } from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

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

    const columns = [
      {
        Header: 'Date',
        accessor: 'date',
        width: 150
      },
      {
        Header: 'Description',
        accessor: 'desc',
        width: 400
      },

      {
        Cell: ({index}) => <button id={index} onClick={() => {removeLine(index)}} >Delete</button>,
        width: 70
      }
    ]
    
  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="date" name="date" onChange={inputChanged} value={todo.date}/>
        <input type="text" name="desc" onChange={inputChanged} value={todo.desc}/>
        <input type="submit" value="Add"/>
      </form>
      <div>
    <ReactTable data={todos} columns={columns}/>
    </div>
    </div>
  );
};


export default Todolist;