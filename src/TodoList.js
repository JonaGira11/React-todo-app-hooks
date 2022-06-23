import React from 'react'
import Paper from "@mui/material/Paper"
import List from "@mui/material/List"

import Divider from "@mui/material/Divider"
import Todo from "./Todo";

function TodoList({todos, removeTodo, toggleTodo, editTodo}) {
    if(todos.length)
    return (
        <Paper>
            <List>
            {todos.map((todo, i) => (
                <>
               
               <Todo task={todo.task} id={todo.id} key={todo.id} completed={todo.completed} removeTodo={removeTodo} 
               toggleTodo={toggleTodo} 
               editTodo={editTodo}
               />
                {i < todos.length - 1 && <Divider/>}
                 </>
            ))}
            </List>
        </Paper>
    );
    return null;
}

export default TodoList;