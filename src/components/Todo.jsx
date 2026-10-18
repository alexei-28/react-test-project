import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import ToDoInfo from "./ToDoInfo.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
    const tasks = [
        {id: "task-1", title: "Buy milk", isDone: false},
        {id: "task-2", title: "Drink coffee", isDone: true}
    ]

    const deleteAllTasks = () => {
        console.log("Delete all tasks!")
    }

    const deleteTask = (taskId) => {
        console.log("Delete task: ", taskId)
    }

    const toggleTaskComplete = (taskId, isDone) => {
        console.log(`Task: ${taskId} is done: ${isDone}`)
    }

    const filterTasks = (query) => {
        console.log("Query: ", query);
    }

    const addTask = () => {
        console.log("Add new task!");
    }

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
                addTask={addTask}/>
            <SearchTaskForm
                onSearchInput={filterTasks}
            />
            <ToDoInfo
                total={tasks.length}
                done={tasks.filter(task => task.isDone).length}
                onDeleteAllButtonClick={deleteAllTasks}
            />
            <TodoList
                tasks={tasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChanged={toggleTaskComplete}
            />
        </div>
    )
}

export default Todo