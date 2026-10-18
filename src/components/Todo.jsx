import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import ToDoInfo from "./ToDoInfo.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm/>
            <SearchTaskForm/>
            <ToDoInfo/>
            <TodoList/>
        </div>
    )
}

export default Todo