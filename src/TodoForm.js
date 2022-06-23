import React from 'react';
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import useinputState from './hooks/useinputState';

function TodoForm({addTodo}) {
    const [value, handleChange, reset] = useinputState("");
  return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem"}}>
            <form onSubmit={e=>{
                e.preventDefault();
            addTodo(value) 
            reset();  
            }}> 
            <TextField 
            value={value} 
            onChange={handleChange} 
            label='Add New Todo'
            fullWidth
            />
            </form>
    </Paper>
  )
}

export default TodoForm;