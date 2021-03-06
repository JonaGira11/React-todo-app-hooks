import { useState, useEffect } from "react";
import useTodoState from "./hooks/useTodoState";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';



function TodoApp() {

  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
//  const [todos, setTodos] = useState(initialTodos);
const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(
  initialTodos
);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);




  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elavation={0}
    >
      <AppBar colors='primary' position='static' style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent='center' style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>


          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;

