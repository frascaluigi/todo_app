import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';
import TodoControls from './TodoControls';

function TodoApp() {
    const [todos, setTodos] = useState([]);

    const sortTodos = (todosToSort) => {
        const pendingTodos = todosToSort.filter(t => t.checked === false).sort((a, b) => b.createdAt - a.createdAt);
        const completeTodos = todosToSort.filter(t => t.checked === true).sort((a, b) => b.createdAt - a.createdAt);

        return [...pendingTodos, ...completeTodos]
    }


    const addTodo = todo => {
        if(!todo.text) return;
        setTodos([todo, ...todos]);
    }

    const deleteTodo = (index) => {
        todos.splice(index,1);
        console.log("todos: ", todos);
        setTodos([...todos]);
    }

    const handleCheck = (todoId) => {
        todos.map(t => {
            if(t.id === todoId) t.checked = !t.checked
            return t;
        });
        console.log("todos: ", todos);
        setTodos(sortTodos([...todos]));
    }

    const clearAllTodos = () => {
        setTodos([]);
    }

    const uncheckTodos = () => {
        const newTodos = todos.map(t => {
            if(t.checked === true) t.checked = false;
            return t;
        });
        console.log("uncheck newTodos: ", newTodos);
        setTodos(sortTodos([...newTodos]));
    }

    return (
        <div className='wrapper'>
            <TodoControls removeAll={clearAllTodos} uncheckAll={uncheckTodos}/>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} deleteById={deleteTodo} handleCheck={handleCheck}/>
        </div>
    )
}

export default TodoApp
