import React from 'react';

export default function Todo(props){
    return (
    <div>
      <table>
        <tbody>
              {props.todostolist.map((todo, index) => 
                <tr key={index}>
                      <td>{todo.date}</td>
                      <td>{todo.desc}</td>
                </tr>)
                }
        </tbody>
      </table>  
    </div>
    )
}