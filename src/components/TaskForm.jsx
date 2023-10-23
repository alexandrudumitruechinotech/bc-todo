import {useRef} from "react";
import {useDispatch} from "react-redux";
import {addTask} from "../slices/taskSlice.js";
import { v4 as uuidv4 } from 'uuid';

const TaskForm = () => {
    const inputRef = useRef()
    const dispatch = useDispatch()

    const saveTask = e => {
        e.preventDefault()
        if ( inputRef.current.value.trim() !== '') {
            dispatch(addTask({id: uuidv4(), text: inputRef.current.value, completed: false}))
        }
        inputRef.current.value = ''
    }

    return (
            <form onSubmit={saveTask} className="input-group mb-3">
                <input type="text" ref={inputRef} className="form-control" aria-label="Recipient's username" aria-describedby="button"/>
                    <button className="btn btn-outline-primary" type="submit" id="button">Add Task</button>
            </form>
    )
}

export default TaskForm