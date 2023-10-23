import {useSelector} from "react-redux";
import TaskItem from "./TasItem.jsx";
import {useState} from "react";
import Filters from "./Filters.jsx";
import {selectFilteredTasks} from "../slices/taskSlice.js";

const TaskList = () => {
    const [type, setType] = useState('all')
    const tasks = useSelector(state => selectFilteredTasks(state, type))

    const handleTypeChange = e => {
        setType(e.target.value)
    }

    return (
        <>
            <Filters type={type} onTypeChange={handleTypeChange} />
            {tasks.length
                ?
                <ul className="list-group list-group-flush mt-3" style={{maxHeight: "600px", overflow: 'scroll'}}>
                    {tasks.map(task => <TaskItem task={task} key={task.id}/>)}
                </ul>
                :
                <p>No tasks found</p>
            }
        </>
    )
}

export default TaskList