import { React, useState, useRef } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [TodoVisiblity, setTodoVisiblity] = useState(false);
  const [todolist, setTodolist] = useState([
    { todo_id: uuidv4(), todo_title: "it's just a todo web-app", complete: false },
    { todo_id: uuidv4(), todo_title: "What more did you expect?", complete: true },
    { todo_id: uuidv4(), todo_title: "this IS quite unhelpful, i know.", complete: false },
    { todo_id: uuidv4(), todo_title: "👈🏻 tick when completed", complete: true },
    { todo_id: uuidv4(), todo_title: "Press the red/white button to clear", complete: true },
  ]);
  let todocount = todolist.filter((todo) => !todo.complete).length;
  const todoNameRef = useRef();
  //const Local_storage_key = "harambedidnothingwrong";

  const TodoVisiblityHandler = () => {
    setTodoVisiblity(!TodoVisiblity);
  };

  const addtodohandler = () => {
    const title = todoNameRef.current.value;
    if (title === "") return;
    setTodolist((prevTodos) => {
      return [
        ...prevTodos,
        { todo_id: uuidv4(), todo_title: title, complete: false },
      ];
    });
    document.getElementById("todotitle").value = "";
  };

  const ToggleTodos = (id) => {
    const newTodolist = [...todolist];
    const todo = newTodolist.find((todo) => todo.todo_id === id);
    todo.complete = !todo.complete;
    setTodolist(newTodolist);
  };

  const cleardonetodos = () => {
    const clearedtodos = todolist.filter((todo) => !todo.complete);
    setTodolist(clearedtodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="toggleaddtodo" onClick={TodoVisiblityHandler}>
          Toggle Add todo
        </button>
        {TodoVisiblity ? (
          <AddTodo addtodohandler={addtodohandler} todoNameRef={todoNameRef} />
        ) : (
          <></>
        )}
        <p>{todocount} left to-do</p>
        <div className="todo-list">
          {/*cause styling nahi ho paa raihi thi*/}
          <TodoList todolist={todolist} ToggleTodos={ToggleTodos} />
        </div>
        <button className="cleardonetodos" onClick={cleardonetodos}>
          clear completed <br /> to-do(s)
        </button>
      </header>
    </div>
  );
}

export default App;



  /*
//this loads the todolist from local storage. 
//the functionality is not working just yet, so ill try to slap on a backend or solve it later on
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(Local_storage_key));
    console.log(storedTodos);
    setTodolist(storedTodos);
  }, []);
 
  this loads the todolist in local storage
  useEffect(() => {
    localStorage.setItem(Local_storage_key, JSON.stringify(todolist));
  }, [todolist]);*/