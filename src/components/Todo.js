import React from 'react';
import {FaRegTimesCircle} from "react-icons/fa"

function Todo({todos, deleteById, handleCheck}) {
  {if(todos.length){
    return (
  
        <ul className='todo-list'>
          {todos.map((todo, index) => (
              <li className='todo' key={index}>
                <p className='todo-text'>{todo.text}</p>
  
                <div className='todo-options'>
                  <input type="checkbox" value={todo.text} checked={todo.checked || false} onChange={() => handleCheck(todo.id)}></input>
                  <FaRegTimesCircle className='circle' onClick={() => deleteById(index)}/>
                </div>
              </li>
          ))}
        </ul>
    )
  }
  return <p className='no-activity'>No activity scheduled</p>
}
}

export default Todo