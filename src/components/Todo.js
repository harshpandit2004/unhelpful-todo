import React from 'react'

export default function Todo( props ) {
    const handleTodoClick = () => {
        props.ToggleTodos(props.todo.todo_id)
    }
    return (
        <div>
            <label onClick = {handleTodoClick}>
            
            <input type = "checkbox" checked = {props.todo.complete} onChange = {handleTodoClick}/>
            {props.todo.todo_title}

            </label>
        </div>
    )
}
