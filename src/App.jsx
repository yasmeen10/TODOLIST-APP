import React from "react";
import TodoList from "./components/TodoList";
import "./App.css"
import { Header } from "./components/Header";


export default function App(){
    return(
        <>
        <Header/>
        <div className="todo-app">
            <TodoList/>
        </div>
        </>
    )
}
