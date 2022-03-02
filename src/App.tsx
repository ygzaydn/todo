import React from "react";
import "./app.scss";

import TodoList from "./components/TodoList/todoList";
import DoneList from "./components/DoneList/doneList";
import AddTodo from "./components/AddTodo/addTodo";

type appProps = {};

const App: React.FC<appProps> = () => {
    return (
        <div className="app">
            <div className="title">
                <h6>Todo App with Redux / Typescript</h6>
            </div>
            <div className="main-container">
                <div className="add-todo-container">
                    <AddTodo />
                </div>
                <div className="list-container">
                    <div className="unchecked-container">
                        <TodoList />
                    </div>
                    <div className="checked-container">
                        <DoneList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
