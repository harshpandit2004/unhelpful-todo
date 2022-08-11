import { React } from 'react'

export default function AddTodo(props) {
    return (
        <div className="addTodoWalaDiv">
            Add a Todo: <br/><br/>
            <input ref = {props.todoNameRef} type="text" name="Title" id="todotitle" className="addtodo-title" placeholder="Title"/>
            <br/>
            <button className="addtodohandler" onClick = { props.addtodohandler }>Add</button>
        </div>
    )
}
