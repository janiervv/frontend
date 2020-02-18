import React from 'react';

export default function Todo(props){

    function handleClick(event) {
        props.removeLine(event.target.name);
      }

    return (
    <div>
      <table>
        <tbody>
            {props.todostolist.map((todo, index) => 
            <tr key={index}>
                    <td>{todo.date}</td>
                    <td>{todo.desc}</td>
                    <td><button name={index} onClick={handleClick}>Delete</button></td>
            </tr>)
            }
        </tbody>
      </table>  
    </div>
    )
}