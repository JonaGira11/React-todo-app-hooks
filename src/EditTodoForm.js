import React from 'react'
import useinputState from './hooks/useinputState'
import TextField from "@mui/material/TextField"

function EditTodoForm({id, editTodo, task, toggle }) {
    const [value, handleChange, reset] = useinputState(task);
  return (
    <form onSubmit={(e)=> {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggle();
    }}
    style={{marignLeft: "1rem", width: "50%"}}
    > 
    <TextField margin="normal" value={value} onChange={handleChange} autoFocus />
    </form>
  )
}

export default EditTodoForm