import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import ToDoInfo from "./ToDoInfo.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
    const tasks = [
        {id: "task-1", title: "Buy milk", isDone: false},
        {id: "task-2", title: "Drink coffee", isDone: true}
    ]

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm/>
            <SearchTaskForm/>
            <ToDoInfo
                total={tasks.length}
                done={tasks.filter(task => task.isDone).length}/>
            <TodoList tasks={tasks}/>
        </div>
    )
}

export default Todo