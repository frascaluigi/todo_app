import React from 'react'
import {FaRecycle, FaTrashAlt} from'react-icons/fa'
function TodoControls(props) {
  return (
    <div className='todo-controls' >
      <FaRecycle className='recycle' onClick={props.uncheckAll}/>
      <FaTrashAlt className='trash' onClick={props.removeAll}/>
    </div>
  )
}

export default TodoControls
