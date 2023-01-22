import React, { useState } from 'react'

function TodoForm(props) {

    const [todo, setTodo] = useState('');
    
    const handleChange = event => {
        setTodo(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: todo,
            checked:false,
            createdAt: +new Date()
        });

        setTodo('');
    }

    return (
        <>
            <form className='todo-form' onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder="What do you want to schedule?"
                  name="todo"
                  value={todo}
                  onChange={handleChange}
                />
                <button>Add</button>
            </form>
        </>
        
    )
}

export default TodoForm
