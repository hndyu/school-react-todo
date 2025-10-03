import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, toggleTodo, handleClear}) => {
    return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} handleClear={handleClear} />);
}

export default TodoList