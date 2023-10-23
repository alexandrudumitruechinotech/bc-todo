import './App.css'
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TasList.jsx";

function App() {
    return (
        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center main">
            <div className="card border-0 shadow">
                <div className="card-body">
                    <h4 className="card-title">Inspirational title</h4>
                    <TaskForm/>
                    <TaskList/>
                </div>
            </div>
        </div>
    )
}

export default App
