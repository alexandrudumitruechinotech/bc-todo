import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {deleteTask, updateTask} from "../slices/taskSlice.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const TaskItem = ({task}) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteTask(task.id))
    }

    const toggleComplete = () => {
        dispatch(updateTask({...task, completed: !task.completed}))
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <input type="checkbox" className="form-check-input me-2" checked={task.completed} onChange={toggleComplete}></input>
                <span className={task.completed ? 'text-decoration-line-through' : ''}>{task.text}</span>
            </div>
            <FontAwesomeIcon icon={faTrashCan} className="text-danger delete-icon"  onClick={handleDelete}/>
        </li>
    )
}

TaskItem.propTypes = {
    task: PropTypes.object
}

export default TaskItem